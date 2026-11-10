import type { Metadata } from "next";
import Link from "next/link";

import { CtaBand } from "@/components/cta-band";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  appUseCases,
  extras,
  faqs,
  processSteps,
  servicePillars,
  stack,
  webPlans,
  whatsappUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Servicios de diseño web y apps móviles",
  description:
    "Sitios web, tiendas virtuales y aplicaciones móviles para negocios de Iquitos. Planes desde S/ 1,200, precios claros y acompañamiento local de WebCity.",
  alternates: { canonical: "/servicios" },
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function ServiciosPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="servicios-title">
        <div className="container page-hero__inner">
          <p className="eyebrow">Servicios</p>
          <h1 id="servicios-title">
            Todo lo que tu negocio necesita para{" "}
            <span className="text-gradient">existir en internet.</span>
          </h1>
          <p className="lede">
            Diseñamos, programamos y acompañamos. Puedes empezar con una página
            sencilla y crecer después hacia una tienda o una aplicación. Sin
            contratos eternos ni costos escondidos.
          </p>
          <div className="page-hero__actions">
            <Link className="btn btn--primary btn--lg" href="/contacto">
              Solicitar una cotización
              <Icon name="arrow" />
            </Link>
            <a
              className="btn btn--ghost btn--lg"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="whatsapp" />
              Hablar por WhatsApp
            </a>
          </div>
          <div className="page-hero__meta">
            <span className="chip chip--glass">
              <Icon name="check" /> Precios claros
            </span>
            <span className="chip chip--glass">
              <Icon name="check" /> Entrega por etapas
            </span>
            <span className="chip chip--glass">
              <Icon name="check" /> Soporte local
            </span>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="pilares">
        <div className="container">
          <Reveal>
            <SectionHeading
              id="pilares"
              eyebrow="Qué hacemos"
              title="Dos especialidades, un mismo estándar."
              description="Trabajamos con herramientas modernas y probadas. Cada proyecto se entrega documentado, con las cuentas a tu nombre y una capacitación para que puedas moverte solo."
            />
          </Reveal>

          <div className="pillars">
            {servicePillars.map((service, index) => (
              <Reveal key={service.id} delay={index * 80}>
                <article
                  id={service.id}
                  className={`pillar${index === 1 ? " pillar--dark" : ""}`}
                >
                  <div className="pillar__intro">
                    <div className="pillar__badge">
                      <span
                        className={`icon-tile${index === 1 ? " icon-tile--dark" : ""}`}
                      >
                        <Icon name={service.icon} />
                      </span>
                      <span className="pillar__kicker">{service.eyebrow}</span>
                    </div>
                    <h2>{service.title}</h2>
                    <p>{service.summary}</p>
                    <Link
                      className={`btn ${index === 1 ? "btn--primary" : "btn--dark"}`}
                      href={service.href}
                    >
                      {service.cta}
                      <Icon name="arrow" />
                    </Link>
                  </div>

                  <div className="pillar__lists">
                    <div>
                      <h3 className="mini-title">Qué hacemos</h3>
                      <ul className="feature-list">
                        {service.features.map((feature) => (
                          <li key={feature}>
                            <Icon name="check" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="mini-title">Qué recibes</h3>
                      <ul className="feature-list">
                        {service.deliverables.map((item) => (
                          <li key={item}>
                            <Icon name="check" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mint" id="planes-web" aria-labelledby="planes-title">
        <div className="container">
          <Reveal>
            <SectionHeading
              id="planes-title"
              eyebrow="Planes web"
              title="Precios claros desde el primer día."
              description="Los montos son referenciales y en soles peruanos. Después de la primera reunión recibes una cotización cerrada según el alcance real de tu proyecto."
            />
          </Reveal>

          <div className="plan-grid">
            {webPlans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 80}>
                <article className={`plan${plan.highlighted ? " plan--featured" : ""}`}>
                  <div className="plan__top">
                    <h3 className="plan__name">{plan.name}</h3>
                    {plan.badge ? <span className="plan__badge">{plan.badge}</span> : null}
                  </div>
                  <div className="plan__price">
                    <strong>{plan.price}</strong>
                    <span>{plan.priceNote}</span>
                  </div>
                  <p className="plan__summary">{plan.summary}</p>
                  <ul className="feature-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <Icon name="check" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="plan__cta">
                    <Link
                      className={`btn btn--block ${plan.highlighted ? "btn--primary" : "btn--outline"}`}
                      href="/contacto"
                    >
                      {plan.cta}
                      <Icon name="arrow" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <p className="pricing-note">
            <Icon name="shield" />
            • Los precios son referenciales y pueden variar según los requerimientos.<br />
            • Dominio y hosting se cotizan por separado.<br />
            • Las integraciones y funcionalidades especiales se presupuestan según su complejidad.<br />
            • Pago en dos partes (50% al inicio y 50% al entregar). Los emprendedores
            pueden dividirlo en tres pagos sin intereses.
          </p>
        </div>
      </section>

      <section className="section section--dark" id="apps" aria-labelledby="apps-title">
        <div className="container">
          <Reveal>
            <SectionHeading
              id="apps-title"
              eyebrow="Aplicaciones móviles"
              title={
                <>
                  Tu negocio en el bolsillo de tus{" "}
                  <span className="text-gradient">clientes.</span>
                </>
              }
              description="Una app propia ordena los pedidos, reduce las llamadas y te da información que hoy se pierde en el chat. La construimos con React Native para Android e iOS."
              action={
                <a
                  className="btn btn--ghost"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon name="whatsapp" />
                  Conversemos
                </a>
              }
            />
          </Reveal>

          <div className="usecase-grid">
            {appUseCases.map((useCase, index) => (
              <Reveal key={useCase.title} delay={index * 70}>
                <article className="usecase">
                  <span className="icon-tile icon-tile--dark">
                    <Icon name={useCase.icon} />
                  </span>
                  <div>
                    <h3>{useCase.title}</h3>
                    <p>{useCase.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="stack-strip">
            <strong>Tecnología</strong>
            {stack.map((item) => (
              <span className="stack-chip" key={item}>
                {item}
              </span>
            ))}
            <span className="stack-strip__time">
              <Icon name="clock" />
              Desarrollo típico: 6 a 10 semanas
            </span>
          </div>
        </div>
      </section>

      <section className="section" id="extras" aria-labelledby="extras-title">
        <div className="container">
          <Reveal>
            <SectionHeading
              id="extras-title"
              eyebrow="Servicios complementarios"
              title="Lo que rodea a un buen proyecto digital."
              description="Puedes contratarlos por separado o sumarlos a tu plan. También trabajamos con negocios que ya tienen web y necesitan mejorarla."
            />
          </Reveal>

          <div className="extra-grid">
            {extras.map((extra, index) => (
              <Reveal key={extra.title} delay={index * 60}>
                <article className="extra">
                  <span className="icon-tile">
                    <Icon name={extra.icon} />
                  </span>
                  <h3>{extra.title}</h3>
                  <p>{extra.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--mint" aria-labelledby="proceso-servicios">
        <div className="container">
          <Reveal>
            <SectionHeading
              id="proceso-servicios"
              eyebrow="Metodología"
              title="Cuatro etapas, cero misterios."
            />
          </Reveal>
          <div className="process">
            <div className="process__grid">
              {processSteps.map((step, index) => (
                <Reveal key={step.number} delay={index * 70}>
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

      <section className="section" id="faq" aria-labelledby="faq-title">
        <div className="container">
          <Reveal>
            <SectionHeading
              id="faq-title"
              eyebrow="Preguntas frecuentes"
              title="Lo que todos preguntan antes de empezar."
              description="Si tu duda no está aquí, escríbenos. Respondemos personalmente, no con respuestas automáticas."
            />
          </Reveal>

          <div className="faq">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={Math.min(index * 40, 200)}>
                <details className="faq__item">
                  <summary>
                    {faq.question}
                    <span className="faq__icon" aria-hidden="true" />
                  </summary>
                  <div className="faq__answer">
                    <p>{faq.answer}</p>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight" aria-label="Cotiza tu proyecto">
        <div className="container">
          <Reveal>
            <CtaBand
              title="¿Empezamos con una conversación?"
              text="Cuéntanos qué hace tu negocio y qué te gustaría lograr. Te decimos con honestidad qué necesita, cuánto cuesta y en cuánto tiempo lo tendrías."
            />
          </Reveal>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
    </>
  );
}
