import Link from "next/link";
import type { ReactNode } from "react";

import { Icon } from "@/components/icon";
import { whatsappUrl } from "@/lib/site";

type CtaBandProps = {
  title: ReactNode;
  text: ReactNode;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaBand({
  title,
  text,
  primaryHref = "/contacto",
  primaryLabel = "Cuéntanos tu idea",
  secondaryHref = whatsappUrl,
  secondaryLabel = "Escribir por WhatsApp",
}: CtaBandProps) {
  const secondaryIsExternal = secondaryHref.startsWith("http");

  return (
    <div className="cta-band">
      <div className="cta-band__copy">
        <p className="eyebrow" style={{ color: "rgba(255,255,255,0.72)" }}>
          Siguiente paso
        </p>
        <h2 className="cta-band__title">{title}</h2>
        <p className="cta-band__text">{text}</p>
      </div>
      <div className="cta-band__actions">
        <Link className="btn btn--primary btn--lg" href={primaryHref}>
          {primaryLabel}
          <Icon name="arrow" />
        </Link>
        <a
          className="btn btn--ghost btn--lg"
          href={secondaryHref}
          {...(secondaryIsExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          <Icon name={secondaryIsExternal ? "whatsapp" : "arrowUpRight"} />
          {secondaryLabel}
        </a>
      </div>
    </div>
  );
}
