import Link from "next/link";

import { ThemeAwareAurora } from "@/components/theme-aware-aurora";
import { DnaParticleField } from "@/components/dna-particle-field";
import { Icon } from "@/components/icon";
import { LiquidGlass } from "@/components/ui/liquid-glass";

export function HomeHero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <ThemeAwareAurora
        className="aurora-background"
        colorStops={["#14d67d", "#83f3bd", "#18b89c"]}
        amplitude={0.9}
        blend={0.72}
        speed={0.32}
        height={0.42}
        scale={0.82}
        glow={0.42}
        brightness={0.76}
        layers={2}
        opacity={0.14}
        paused
        mouseInteraction
      />
      <DnaParticleField />
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow" aria-hidden="true" />

      <div className="container hero__inner">
        <LiquidGlass
          className="hero__copy liquid-glass-surface"
          radius={28}
          bevelDepth={36}
          scale={64}
          aberration={8}
          frost={0.3}
          tint={0.08}
        >
          <span className="chip chip--glass hero__eyebrow">
            <span className="hero__live-dot" aria-hidden="true" />
            IQUITOS · FISI–UNAP · IDEAS EN MOVIMIENTO
          </span>

          <h1 id="hero-title" className="hero__title">
            <span>El futuro digital</span>
            <span className="text-gradient">empieza aquí.</span>
          </h1>

          <p className="hero__lead">
            Somos estudiantes de la FISI–UNAP y estamos creando WebCity desde
            Iquitos. Aprendemos haciendo: diseñamos webs y apps para convertir
            buenas ideas en proyectos que puedan crecer.
          </p>

          <div className="hero__actions">
            <Link className="btn btn--primary btn--lg" href="/contacto">
              Hablemos de tu idea
              <Icon name="arrow" />
            </Link>
            <Link className="btn btn--ghost btn--lg" href="/portafolio">
              Mira lo que imaginamos
            </Link>
          </div>

          <ul className="hero__meta">
            <li>
              <Icon name="pin" />
              Hecho en Iquitos
            </li>
            <li>
              <Icon name="check" />
              FISI · UNAP
            </li>
            <li>
              <Icon name="code" />
              Webs · apps · diseño
            </li>
          </ul>
        </LiquidGlass>
      </div>
    </section>
  );
}
