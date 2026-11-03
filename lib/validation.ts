export const projectTypes = [
  "Sitio web",
  "Tienda virtual",
  "Aplicación móvil",
  "Rediseño / mantenimiento",
  "No estoy seguro todavía",
] as const;

export const budgetRanges = [
  "Menos de S/ 1,500",
  "S/ 1,500 – S/ 3,000",
  "S/ 3,000 – S/ 6,000",
  "Más de S/ 6,000",
  "Aún no lo defino",
] as const;

export type ProjectType = (typeof projectTypes)[number];
export type BudgetRange = (typeof budgetRanges)[number];

export type ContactField =
  | "name"
  | "email"
  | "phone"
  | "projectType"
  | "budget"
  | "message"
  | "consent";

export type ContactData = {
  name: string;
  email: string;
  phone: string;
  projectType: ProjectType;
  budget: BudgetRange | "";
  message: string;
  consent: true;
};

export type ValidationErrors = Partial<Record<ContactField, string>>;

export type ValidationResult =
  | { ok: true; data: ContactData }
  | { ok: false; errors: ValidationErrors };

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;
const PHONE_PATTERN = /^\+?[\d\s()-]{6,20}$/;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

/**
 * Valida el formulario de contacto. Se usa en el cliente para dar feedback
 * inmediato y en el servidor como única fuente de verdad.
 */
export function validateContact(input: unknown): ValidationResult {
  const raw = (input ?? {}) as Record<string, unknown>;
  const errors: ValidationErrors = {};

  const name = asString(raw.name);
  if (name.length < 2) {
    errors.name = "Escribe tu nombre completo.";
  } else if (name.length > 80) {
    errors.name = "El nombre no puede superar los 80 caracteres.";
  }

  const email = asString(raw.email).toLowerCase();
  if (!email) {
    errors.email = "Necesitamos un correo para responderte.";
  } else if (email.length > 160 || !EMAIL_PATTERN.test(email)) {
    errors.email = "Escribe un correo válido, por ejemplo nombre@correo.com.";
  }

  const phone = asString(raw.phone);
  if (phone && !PHONE_PATTERN.test(phone)) {
    errors.phone = "Usa solo números, espacios o el signo + (mínimo 6 dígitos).";
  }

  const projectTypeRaw = asString(raw.projectType);
  const projectType = projectTypes.includes(projectTypeRaw as ProjectType)
    ? (projectTypeRaw as ProjectType)
    : null;
  if (!projectType) {
    errors.projectType = "Elige el tipo de proyecto que tienes en mente.";
  }

  const budgetRaw = asString(raw.budget);
  if (budgetRaw && !budgetRanges.includes(budgetRaw as BudgetRange)) {
    errors.budget = "Elige un rango de presupuesto de la lista.";
  }

  const message = asString(raw.message);
  if (message.length < 20) {
    errors.message = "Cuéntanos un poco más: al menos 20 caracteres.";
  } else if (message.length > 2000) {
    errors.message = "El mensaje no puede superar los 2000 caracteres.";
  }

  const consent = raw.consent === true || raw.consent === "true";
  if (!consent) {
    errors.consent = "Necesitamos tu permiso para tratar tus datos.";
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      projectType: projectType as ProjectType,
      budget: (budgetRaw as BudgetRange) || "",
      message,
      consent: true,
    },
  };
}
