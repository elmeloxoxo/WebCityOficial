import type { Metadata } from "next";

import { ContactForm } from "@/components/contact-form";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { site, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos tu idea: conversemos sobre un sitio web, tienda virtual o aplicación móvil para tu negocio.",
  alternates: { canonical: "/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="contacto-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">Contacto</p>
          <h1 id="contacto-title">
            Hablemos de tu próximo{" "}
            <span className="text-gradient">paso digital.</span>
          </h1>
          <p className="lede">
            No necesitas tener todo resuelto para escribirnos. Cuéntanos qué hace
            tu negocio y qué te gustaría mejorar; nosotros te ayudamos a ordenar
            la idea y te decimos qué conviene hacer.
          </p>
          <div className="page-hero__actions">
            <a
              className="btn btn--primary btn--lg"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" />
              Escribir por WhatsApp
            </a>
            <a className="btn btn--ghost btn--lg" href={`mailto:${site.email}`}>
              <Icon name="mail" />
              Enviar un correo
            </a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="contacto-form-title">
        <div className="container contact">
          <div className="contact__aside">
            <Reveal>
              <div className="contact__intro">
                <p className="eyebrow">Datos directos</p>
                <h2>Estamos a un mensaje de distancia.</h2>
                <p className="lede">
                  Atendemos en Iquitos y de forma remota en todo el Perú. Si
                  prefieres, agenda una visita a nuestro espacio cerca del centro.
                </p>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <a
                className="info-card"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon-tile">
                  <Icon name="whatsapp" />
                </span>
                <div>
                  <h3>WhatsApp</h3>
                  <p>{site.phoneDisplay} · respuesta rápida</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={100}>
              <a className="info-card" href={`mailto:${site.email}`}>
                <span className="icon-tile">
                  <Icon name="mail" />
                </span>
                <div>
                  <h3>Correo electrónico</h3>
                  <p>{site.email}</p>
                </div>
              </a>
            </Reveal>

            <Reveal delay={140}>
              <div className="info-card">
                <span className="icon-tile">
                  <Icon name="pin" />
                </span>
                <div>
                  <h3>Oficina</h3>
                  <p>{site.address}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="info-card">
                <span className="icon-tile">
                  <Icon name="clock" />
                </span>
                <div>
                  <h3>Horario de atención</h3>
                  <p>{site.hours}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={220}>
              <div className="map-card">
                <span className="map-card__grid" aria-hidden="true" />
                <svg
                  className="map-card__river"
                  viewBox="0 0 400 200"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M-20 158c86-34 112-96 208-78s118 66 242 26"
                    stroke="currentColor"
                    strokeWidth="20"
                    opacity="0.28"
                  />
                  <path
                    d="M-20 158c86-34 112-96 208-78s118 66 242 26"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M-20 176c92-32 118-92 210-74s116 62 240 24"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.5"
                  />
                </svg>
                <span className="map-card__pin">
                  <Icon name="pin" />
                </span>
                <div className="map-card__label">
                  <div>
                    <strong>Iquitos, Loreto</strong>
                    <span>3°44′S · 73°15′O</span>
                  </div>
                  <a
                    className="map-card__link"
                    href="https://www.google.com/maps/search/?api=1&query=Iquitos%2C+Loreto%2C+Per%C3%BA"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver mapa
                    <Icon name="arrowUpRight" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="form-card" id="formulario">
              <div className="form-card__head">
                <p className="eyebrow">Cuéntanos tu proyecto</p>
                <h2 id="contacto-form-title">Un formulario breve y una respuesta real.</h2>
                <p>
                  Completa los campos y te escribiremos con preguntas puntuales y
                  una idea inicial. Sin robots ni respuestas enlatadas.
                </p>
              </div>
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" aria-label="Nuestro compromiso">
        <div className="container">
          <div className="promise-row">
            <div className="promise">
              <span className="icon-tile">
                <Icon name="clock" />
              </span>
              <div>
                <h3>Respuesta en menos de 24 h</h3>
                <p>Días hábiles. Si escribes por WhatsApp, suele ser más rápido.</p>
              </div>
            </div>
            <div className="promise">
              <span className="icon-tile">
                <Icon name="users" />
              </span>
              <div>
                <h3>Primera reunión sin costo</h3>
                <p>Conversamos, entendemos tu caso y te decimos si podemos ayudar.</p>
              </div>
            </div>
            <div className="promise">
              <span className="icon-tile">
                <Icon name="shield" />
              </span>
              <div>
                <h3>Datos confidenciales</h3>
                <p>Tu información solo se usa para responder a esta consulta.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
