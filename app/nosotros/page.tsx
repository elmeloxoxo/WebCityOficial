import type { Metadata } from "next";
import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { site, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre nosotros",
  description:
    "Conoce a WebCity: estudiantes de Ingeniería de Sistemas e Informática en Iquitos que construyen su camino profesional creando soluciones digitales.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="nosotros-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">Nosotros</p>
          <h1 id="nosotros-title">
            Jóvenes con iniciativa, una ciudad y{" "}
            <span className="text-gradient">muchas ganas de construir.</span>
          </h1>
          <p className="lede">
            Somos un equipo de la Facultad de Ingeniería de Sistemas e Informática
            de la UNAP. Nacimos en Iquitos, estudiamos aquí y queremos que la
            tecnología de la Amazonía se sienta tan propia como su gente.
          </p>
          <div className="page-hero__meta">
            <span className="chip chip--glass">
              <Icon name="pin" /> Iquitos, Loreto
            </span>
            <span className="chip chip--glass">
              <Icon name="users" /> Equipo de 5
            </span>
            <span className="chip chip--glass">
              <Icon name="leaf" /> Identidad amazónica
            </span>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="historia">
        <div className="container">
          <div className="story">
            <Reveal className="story__copy">
              <p className="eyebrow">Nuestra historia</p>
              <h2 id="historia">
                Empezamos en un salón de la FISI y crecimos mirando al río.
              </h2>
              <p>
                Somos estudiantes universitarios de Ingeniería de Sistemas e
                Informática en Iquitos. WebCity es el espacio donde ponemos en
                práctica lo que aprendemos, exploramos ideas y construimos una
                carta de presentación profesional.
              </p>
              <p>
                Queremos abrirnos camino en el mercado laboral a través de
                proyectos tecnológicos reales y, al mismo tiempo, ayudar a que
                negocios de nuestra región encuentren nuevas oportunidades
                digitales.
              </p>
              <p>
                Estamos creciendo como equipo. Por eso hablamos con honestidad
                sobre nuestra etapa, cuidamos cada propuesta y nos comprometemos
                a aprender con cada reto.
              </p>
              <div className="story__signature">
                <span aria-hidden="true" />
                Equipo WebCity · Iquitos, Perú
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="story-art">
                <span className="story-art__coords" aria-hidden="true">
                  3°44′S · 73°15′O
                </span>
                <span className="story-art__sun" aria-hidden="true" />
                <svg
                  viewBox="0 0 400 220"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M-20 36c70-28 112 26 182 22s108-48 178-26 70 6 90 2"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    opacity="0.55"
                  />
                  <path
                    d="M-20 68c74-24 108 30 176 26s104-46 174-22 80 10 110 4"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    opacity="0.45"
                  />
                  <path
                    d="M-20 102c80-22 110 32 178 28s100-42 168-18 84 12 116 6"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    opacity="0.4"
                  />
                  <path
                    d="M-20 140c84-20 114 34 180 30s98-38 164-14 86 14 120 8"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    opacity="0.32"
                  />
                  <path
                    d="M-20 178c88-18 118 34 184 32s96-34 160-10 88 16 124 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    opacity="0.26"
                  />
                  <path
                    d="M-20 214c92-16 122 32 188 32s94-30 156-6 90 18 128 12"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    opacity="0.2"
                  />
                </svg>
                <span className="story-art__tag">
                  <Icon name="leaf" />
                  Hecho en la Amazonía
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section section--mint" aria-labelledby="valores">
        <div className="container">
          <Reveal>
            <SectionHeading
              id="valores"
              eyebrow="Lo que nos guía"
              title="Cuatro ideas que no negociamos."
              description="No son frases de pared: son las preguntas que nos hacemos antes de entregar cualquier proyecto."
            />
          </Reveal>

          <div className="value-grid">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 70}>
                <article className="value-card">
                  <span className="icon-tile">
                    <Icon name={value.icon} />
                  </span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="equipo">
        <div className="container">
          <Reveal>
              <SectionHeading
              id="equipo"
              eyebrow="Nuestra motivación"
              title="Estamos construyendo nuestro futuro mientras ayudamos a construir el tuyo."
              description="Aprender, colaborar y resolver problemas reales es la forma en que queremos crecer como profesionales y aportar a nuestra ciudad."
              action={
                <Link className="btn btn--outline" href="/contacto">
                  Trabaja con nosotros
                  <Icon name="arrow" />
                </Link>
              }
            />
          </Reveal>

          <div className="local-note">
            <span className="icon-tile"><Icon name="users" /></span>
            <div>
              <h3>Un equipo universitario en construcción</h3>
              <p>
                Somos jóvenes con iniciativa, curiosidad y ganas de demostrar lo
                que podemos hacer. Cada idea es una oportunidad para aprender y
                aportar valor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-label="Nuestra raíz en Iquitos">
        <div className="container">
          <div className="local-note">
            <span className="icon-tile">
              <Icon name="pin" />
            </span>
            <div>
              <h3>Nuestra raíz está en Iquitos</h3>
              <p>
                La Amazonía es nuestro hogar y el lugar desde donde imaginamos
                soluciones útiles, cercanas y hechas con cuidado. Si tienes una
                idea, nos encantará escucharla. <Link href="/contacto">Conversemos</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-label="Hablemos">
        <div className="container">
          <Reveal>
            <CtaBand
              title="¿Quieres que seamos el equipo de tu próximo proyecto?"
              text={`Escríbenos a ${site.email} o agenda una conversación. Nos gusta conocer primero a las personas y después hablar de presupuestos.`}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
