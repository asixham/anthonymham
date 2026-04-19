"use client";

import React from "react";

export type Project = {
  name: string;
  href?: string;
  repoHref?: string;
  logoSrc?: string;
  logoAlt?: string;
  description: string;
  tech?: string[];
  year?: string;
  stat?: string;
};

interface ProjectsSectionProps {
  title?: string;
  projects: Project[];
  sectionDelaySec?: number;
  itemStartDelaySec?: number;
  itemStepDelaySec?: number;
  className?: string;
}

export default function ProjectsSection({
  title = "Projects",
  projects,
  sectionDelaySec = 0.65,
  itemStartDelaySec = 0.4,
  itemStepDelaySec = 0.07,
  className = "",
}: ProjectsSectionProps) {
  return (
    <section
      className={`section-animate z-10 w-full hide ${className}`}
      style={{ animationDelay: `${sectionDelaySec}s` }}
      aria-label={title}
    >
      <h3 className="mb-4 block text-lg font-medium text-foreground">{title}</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
        {projects.map((project, i) => (
          <ProjectRow
            key={`${project.name}-${project.year ?? "ny"}-${i}`}
            project={project}
            delaySec={itemStartDelaySec + i * itemStepDelaySec}
          />
        ))}
      </div>
    </section>
  );
}

function projectLinkLabel(href: string): string {
  try {
    const host = new URL(href).hostname.replace(/^www\./, "");
    return host || href;
  } catch {
    return href;
  }
}

function ProjectRow({ project, delaySec }: { project: Project; delaySec: number }) {
  const isClickable = Boolean(project.href);

  const handleRowClick = () => {
    if (project.href) window.open(project.href, "_blank", "noopener,noreferrer");
  };

  const handleRowKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (!project.href) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleRowClick();
    }
  };

  const content = (
    <>
      {project.logoSrc && (
        <div className="shrink-0 w-32 h-20 md:w-40 md:h-24 rounded-lg overflow-hidden bg-muted border border-border self-start">
          <img
            alt={project.logoAlt || project.name}
            loading="lazy"
            width={160}
            height={96}
            decoding="async"
            className="w-full h-full object-cover object-center"
            style={{ color: "transparent" }}
            src={project.logoSrc}
          />
        </div>
      )}

      <div className="min-w-0 flex-1 flex flex-col min-h-0 h-full">
        <div className="flex items-center gap-2 flex-wrap shrink-0">
          <span
            className={`text-base font-medium text-foreground ${
              isClickable ? "underline decoration-transparent hover:decoration-inherit" : ""
            }`}
            title={project.name}
          >
            {project.name}
          </span>
          {project.repoHref && (
            <a
              href={project.repoHref}
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted-foreground hover:text-foreground shrink-0"
              aria-label={`${project.name} repository`}
              title="Repository"
              onClick={(e) => e.stopPropagation()}
              onKeyDown={(e) => e.stopPropagation()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.33 1.12 2.9.86.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.71 1.02 1.62 1.02 2.74 0 3.95-2.34 4.82-4.57 5.07.36.32.68.93.68 1.89 0 1.36-.01 2.45-.01 2.78 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
              </svg>
            </a>
          )}
        </div>

        <p className="mt-1.5 text-sm text-muted-foreground leading-snug line-clamp-3">
          {project.description}
        </p>

        {(project.href || project.year || project.stat) && (
          <div className="mt-auto pt-2 flex flex-col gap-1 shrink-0 border-t border-border/60">
            {project.href && (
              <span className="text-xs text-muted-foreground truncate" title={project.href}>
                {projectLinkLabel(project.href)}
              </span>
            )}
            {(project.year || project.stat) && (
              <div className="flex items-center gap-2 flex-wrap">
                {project.year && <span className="text-xs text-muted-foreground">{project.year}</span>}
                {project.stat && <span className="text-xs text-foreground">{project.stat}</span>}
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );

  return (
    <div className="work-animate hide h-full min-h-0" style={{ animationDelay: `${delaySec}s` }}>
      <div
        className={`flex items-stretch gap-3 p-3 rounded-xl border border-border bg-card/50 transition h-full ${
          isClickable ? "cursor-pointer hover:bg-muted/50 hover:border-white/15" : ""
        }`}
        onClick={handleRowClick}
        onKeyDown={handleRowKeyDown}
        role={isClickable ? "link" : undefined}
        tabIndex={isClickable ? 0 : -1}
        aria-label={isClickable ? `Open ${project.name}` : undefined}
      >
        {content}
      </div>
    </div>
  );
}

export const defaultProjects: Project[] = [
  {
    name: "FIU Atlas",
    href: "https://fiuatlas.com",
    repoHref: "https://github.com/asixham/fiu-rooms",
    description: "Empty classroom finder for FIU's MMC Campus.",
  },
  {
    name: "Scout",
    href: "https://scout-silk.vercel.app",
    repoHref: "https://github.com/asixham/scout",
    description:
      "Scrapes and tracks internship repos (e.g., Summer2025-Internships) with alerts and filters like FAANG+.",
  },
  {
    name: "Greenline",
    href: "https://greenline-ruddy.vercel.app/",
    repoHref: "https://github.com/asixham/greenline",
    description:
      "Stock explorer with Prophet-based forecasts. REST API backed; Polygon.io ingestion; React charts.",
  },
  {
    name: "Summon",
    description: "Mac-native chat for local LLMs via Ollama.",
  },
];
