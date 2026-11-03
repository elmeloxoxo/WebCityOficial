"use client";

import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { projectCategories, projects, type ProjectCategory } from "@/lib/site";

type Filter = "Todos" | ProjectCategory;

export function PortfolioExplorer() {
  const [filter, setFilter] = useState<Filter>("Todos");

  const visible = useMemo(
    () =>
      filter === "Todos"
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <>
      <div className="filters" role="group" aria-label="Filtrar proyectos por tipo">
        {projectCategories.map((category) => (
          <button
            key={category}
            type="button"
            className="filter"
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <p className="sr-only" aria-live="polite">
        {visible.length} {visible.length === 1 ? "proyecto mostrado" : "proyectos mostrados"}
      </p>

      <div className="project-grid">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
