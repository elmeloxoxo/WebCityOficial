import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { site } from "@/lib/site";
import { validateContact, type ContactData } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_BODY_BYTES = 20_000;

function json(body: unknown, status = 200): Response {
  return Response.json(body, {
    status,
    headers: { "Cache-Control": "no-store" },
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

async function persistLocally(record: Record<string, unknown>): Promise<boolean> {
  try {
    const directory = path.join(process.cwd(), ".data");
    await mkdir(directory, { recursive: true });
    await appendFile(
      path.join(directory, "contactos.jsonl"),
      `${JSON.stringify(record)}\n`,
      "utf8",
    );
    return true;
  } catch (error) {
    console.error("[contacto] No se pudo guardar el mensaje localmente:", error);
    return false;
  }
}

async function sendWithResend(data: ContactData): Promise<boolean> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const to = process.env.CONTACT_TO_EMAIL || site.email;
  const from = process.env.CONTACT_FROM_EMAIL || `WebCity <${site.email}>`;

  const html = `
    <div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;color:#0b1f19;line-height:1.6">
      <h2 style="margin:0 0 16px">Nueva consulta desde webcity.pe</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Correo:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(data.phone || "No indicado")}</p>
      <p><strong>Proyecto:</strong> ${escapeHtml(data.projectType)}</p>
      <p><strong>Presupuesto:</strong> ${escapeHtml(data.budget || "No definido")}</p>
      <hr style="border:none;border-top:1px solid #dcece4;margin:20px 0" />
      <p style="white-space:pre-wrap">${escapeHtml(data.message)}</p>
    </div>
  `;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: data.email,
      subject: `Nueva consulta de ${data.name} · ${data.projectType}`,
      html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("[contacto] Resend respondió con error:", response.status, detail);
    return false;
  }

  return true;
}

export async function POST(request: Request): Promise<Response> {
  const contentLength = Number(request.headers.get("content-length") ?? 0);
  if (contentLength > MAX_BODY_BYTES) {
    return json({ ok: false, message: "El mensaje es demasiado grande." }, 413);
  }

  const ip = getClientIp(request.headers);
  const limit = rateLimit(ip);
  if (!limit.allowed) {
    return json(
      {
        ok: false,
        message: "Recibimos varios mensajes seguidos. Intenta de nuevo en unos minutos.",
      },
      429,
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, message: "No pudimos leer el formulario." }, 400);
  }

  // Campo trampa: si viene completo, es un bot. Respondemos 200 para no dar pistas.
  if (typeof payload === "object" && payload !== null) {
    const honeypot = (payload as Record<string, unknown>).website;
    if (typeof honeypot === "string" && honeypot.trim() !== "") {
      return json({ ok: true });
    }
  }

  const result = validateContact(payload);
  if (!result.ok) {
    return json(
      {
        ok: false,
        message: "Revisa los campos marcados.",
        errors: result.errors,
      },
      422,
    );
  }

  const record = {
    ...result.data,
    receivedAt: new Date().toISOString(),
    source: "webcity-contact-form",
  };

  const delivered = await sendWithResend(result.data);
  const stored = await persistLocally(record);

  if (!delivered && !stored) {
    console.error("[contacto] Consulta sin entregar:", record);
  }

  return json({ ok: true, delivered, stored });
}

export function GET(): Response {
  return json({ ok: false, message: "Método no permitido." }, 405);
}
