import type { Metadata } from "next";

import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { PortfolioExplorer } from "@/components/portfolio-explorer";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Portafolio",
  description:
    "Proyectos de WebCity: webs de reservas, tiendas virtuales y aplicaciones móviles para negocios de Iquitos y la Amazonía. Resultados, retos y soluciones.",
  alternates: { canonical: "/portafolio" },
};

export default function PortafolioPage() {
  const featured = projects[0];

  return (
    <>
      <section className="page-hero" aria-labelledby="portafolio-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">Portafolio</p>
          <h1 id="portafolio-title">
            Ideas digitales en proceso de{" "}
            <span className="text-gradient">tomar forma.</span>
          </h1>
          <p className="lede">
            Esta selección reúne conceptos visuales para web y aplicaciones,
            creados para explorar soluciones a retos comunes de distintos
            sectores. Son ejercicios demostrativos, no proyectos de clientes ni
            resultados comerciales.
          </p>
          <div className="page-hero__meta">
            <span className="chip chip--glass">
              <Icon name="layers" /> Conceptos demostrativos
            </span>
            <span className="chip chip--glass">
              <Icon name="monitor" /> Web y tiendas
            </span>
            <span className="chip chip--glass">
              <Icon name="smartphone" /> Apps móviles
            </span>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="caso-destacado">
        <div className="container">
          <Reveal>
            <article className="case-study">
              <div
                className="case-study__visual"
                style={{
                  background: `linear-gradient(155deg, ${featured.theme.from} 0%, ${featured.theme.to} 100%)`,
                }}
              >
                <span className="case-study__glow" aria-hidden="true" />
                <span className="case-study__tag">Concepto demostrativo</span>
                <p className="case-study__client">{featured.category} · {featured.sector}</p>
                <span className="case-study__year">Exploración visual</span>
              </div>

              <div className="case-study__body">
                <p className="eyebrow">{featured.category} · {featured.sector}</p>
                <h2 id="caso-destacado">{featured.name}</h2>

                <div className="case-study__block">
                  <h3>El reto</h3>
                  <p>{featured.challenge}</p>
                </div>

                <div className="case-study__block">
                  <h3>La solución</h3>
                  <p>{featured.solution}</p>
                </div>

                <div className="case-study__tags">
                  {featured.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="section section--mint" aria-labelledby="todos-proyectos">
        <div className="container">
          <Reveal>
            <SectionHeading
              id="todos-proyectos"
              eyebrow="Todos los proyectos"
              title="Explora por tipo de solución."
              description="Filtra los conceptos por tipo de solución. Estas propuestas sirven para mostrar dirección visual y capacidades de diseño y desarrollo."
            />
          </Reveal>

          <Reveal>
            <PortfolioExplorer />
          </Reveal>
        </div>
      </section>

      <section className="section section--tight" aria-label="Nota sobre el portafolio">
        <div className="container">
          <p className="portfolio-note">
            <Icon name="sparkles" />
            Todo el material de esta página es conceptual. No corresponde a
            clientes, testimonios ni resultados reales.
          </p>
        </div>
      </section>

      <section className="section section--tight" aria-label="Cotiza tu proyecto">
        <div className="container">
          <Reveal>
            <CtaBand
              title="El próximo caso podría ser el tuyo."
              text="Cuéntanos qué necesita tu negocio. Analizamos tu situación, te damos una recomendación honesta y recién después hablamos de precios."
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
