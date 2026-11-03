import Link from "next/link";

import { Icon } from "@/components/icon";

export default function NotFound() {
  return (
    <section className="error-page">
      <div className="container">
        <p className="error-page__code">404</p>
        <h1>Esta página se perdió en el río.</h1>
        <p>
          El enlace que seguiste no existe o cambió de lugar. Vuelve al inicio o
          escríbenos y te ayudamos a encontrar lo que buscabas.
        </p>
        <div className="page-hero__actions" style={{ justifyContent: "center" }}>
          <Link className="btn btn--primary btn--lg" href="/">
            Volver al inicio
            <Icon name="arrow" />
          </Link>
          <Link className="btn btn--ghost btn--lg" href="/contacto">
            Contactar a WebCity
          </Link>
        </div>
      </div>
    </section>
  );
}
