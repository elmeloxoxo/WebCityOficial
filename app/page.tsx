import type { Metadata } from "next";
import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { HomeHero } from "@/components/home-hero";
import { Icon } from "@/components/icon";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  processSteps,
  projects,
  servicePillars,
  values,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Diseño web y apps móviles en Iquitos",
  description:
    "Somos estudiantes de Ingeniería de Sistemas e Informática en Iquitos. En WebCity desarrollamos ideas digitales mientras construimos nuestro camino profesional.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <HomeHero />

      <section className="section" aria-labelledby="por-que-webcity">
        <div className="container">
          <Reveal>
            <SectionHeading
              id="por-que-webcity"
              eyebrow="Por qué WebCity"
              title={
                <>
                  Tecnología de primer nivel con{" "}
                  <span className="gradient-ink">acento amazónico.</span>
                </>
              }
              description="Somos estudiantes de Iquitos que combinan curiosidad, aprendizaje y tecnología para explorar soluciones digitales útiles para nuestra región."
              action={
                <Link className="btn btn--outline" href="/nosotros">
                  Conoce al equipo
                  <Icon name="arrow" />
                </Link>
              }
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

      <section className="section section--mint" aria-labelledby="servicios-destacados">
        <div className="container">
          <Reveal>
            <SectionHeading
              id="servicios-destacados"
              eyebrow="Servicios"
              title="Dos formas de llevar tu negocio al mundo digital."
              description="Una página web que presenta lo que haces o una aplicación que resuelve tu operación diaria. Podemos empezar por donde más lo necesites."
              action={
                <Link className="btn btn--outline" href="/servicios">
                  Ver todos los servicios
                  <Icon name="arrow" />
                </Link>
              }
            />
          </Reveal>

          <div className="service-grid">
            {servicePillars.map((service, index) => (
              <Reveal key={service.id} delay={index * 90}>
                <article
                  className={`service-card${index === 1 ? " service-card--dark" : ""}`}
                >
                  <div className="service-card__head">
                    <span
                      className={`icon-tile${index === 1 ? " icon-tile--dark" : ""}`}
                    >
                      <Icon name={service.icon} />
                    </span>
                    <span className="service-card__kicker">{service.eyebrow}</span>
                  </div>

                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__text">{service.summary}</p>

                  <ul className="feature-list">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <Icon name="check" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link className="card-link" href={service.href}>
                    {service.cta}
                    <Icon name="arrow" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="proceso">
        <div className="container">
          <Reveal>
            <SectionHeading
              id="proceso"
              eyebrow="Cómo trabajamos"
              title="Un proceso claro, sin sorpresas."
              description="Sabes qué pasa en cada etapa, cuánto cuesta y cuándo se entrega. Así de simple."
            />
          </Reveal>

          <div className="process">
            <div className="process__grid">
              {processSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 80} className="step-reveal">
                  <article className="step">
                    <span className="step__num">{step.number}</span>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--mint" aria-labelledby="trabajos">
        <div className="container">
          <Reveal>
            <SectionHeading
              id="trabajos"
              eyebrow="Portafolio"
              title="Conceptos para problemas reales."
              description="Propuestas demostrativas para explorar cómo sitios web y aplicaciones podrían ayudar a negocios de distintos sectores."
              action={
                <Link className="btn btn--outline" href="/portafolio">
                  Ver el portafolio
                  <Icon name="arrow" />
                </Link>
              }
            />
          </Reveal>

          <div className="work-grid">
            {featured.map((project, index) => (
              <Reveal key={project.slug} delay={index * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-label="Empecemos tu proyecto">
        <div className="container">
          <Reveal>
            <CtaBand
              title="Demos forma a tu idea."
              text="Cuéntanos qué tienes en mente. Podemos conversar sobre el reto, explorar opciones y definir juntos un siguiente paso realista."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
