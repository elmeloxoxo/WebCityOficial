import type { Project } from "@/lib/site";

function WebMock() {
  return (
    <div className="mock" aria-hidden="true">
      <div className="mock__chrome">
        <i />
        <i />
        <i />
        <span className="mock__url" />
      </div>
      <div className="mock__screen">
        <div className="mock__hero" />
        <div className="mock__line mock__line--lg" />
        <div className="mock__line" />
        <div className="mock__row">
          <span className="mock__pill" />
          <span className="mock__pill mock__pill--ghost" />
        </div>
      </div>
    </div>
  );
}

function AppMock() {
  return (
    <div className="mock mock--app" aria-hidden="true">
      <div className="mock__phone">
        <span className="mock__notch" />
        <div className="mock__app-hero" />
        <div className="mock__line mock__line--lg" />
        <div className="mock__line" />
        <div className="mock__line mock__line--sm" />
        <div className="mock__cta" />
      </div>
      <div className="mock__float">
        <span className="mock__check">✓</span>
        <div>
          <span className="mock__line mock__line--lg" />
          <span className="mock__line mock__line--sm" />
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="work-card">
      <div
        className="work-card__visual"
        style={{
          background: `linear-gradient(150deg, ${project.theme.from} 0%, ${project.theme.to} 100%)`,
        }}
      >
        <span className="work-card__category">{project.category}</span>
        {project.category === "App" ? <AppMock /> : <WebMock />}
      </div>

      <div className="work-card__body">
        <div className="work-card__meta">
          <span>Concepto</span>
          <span>{project.category} · {project.sector}</span>
        </div>
        <h3 className="work-card__title">{project.name}</h3>
        <p className="work-card__text">{project.summary}</p>

        <div className="work-card__tags" aria-label="Tecnologías usadas">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
