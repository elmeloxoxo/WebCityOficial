"use client";

import { useEffect } from "react";

import { Icon } from "@/components/icon";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[webcity] Error inesperado:", error);
  }, [error]);

  return (
    <section className="error-page">
      <div className="container">
        <p className="error-page__eyebrow">
          <Icon name="shield" />
          Algo salió mal
        </p>
        <h1>No pudimos cargar esta página.</h1>
        <p>
          Puede ser un problema momentáneo. Intenta de nuevo o escríbenos por
          WhatsApp si el error continúa.
        </p>
        <div className="page-hero__actions" style={{ justifyContent: "center" }}>
          <button type="button" className="btn btn--primary btn--lg" onClick={reset}>
            Intentar de nuevo
            <Icon name="arrow" />
          </button>
          <a
            className="btn btn--ghost btn--lg"
            href="https://wa.me/51965482173"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="whatsapp" />
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
