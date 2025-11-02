import React from "react";

export type Project = {
  name: string;
  href?: string;               // live demo or landing page
  repoHref?: string;          // GitHub link (optional)
  logoSrc?: string;           // optional thumbnail / logo
  logoAlt?: string;
  description: string;        // one-liner
  tech?: string[];            // tag pills
  year?: string;               // e.g., "2024 – Present"
  stat?: string;              // e.g., "2k users", "★ 1.2k", etc. (optional)
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
      <h3 className="mb-3 block text-lg">{title}</h3>

      <div className="border-t border-dashed border-gray-600">
        {projects.map((project, i) => (
          <ProjectRow
            key={`${project.name}-${project.year}-${i}`}
            project={project}
            delaySec={itemStartDelaySec + i * itemStepDelaySec}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectRow({ project, delaySec }: { project: Project; delaySec: number }) {
  return (
    <div className="work-animate hide" style={{ animationDelay: `${delaySec}s` }}>
      <div className="flex flex-col gap-2 border-b border-dashed border-gray-600 py-2 md:flex-row md:items-center md:justify-between">
        {/* Left: Logo + Name/Links + Description + Tags */}
        <div className="min-w-0">
          <div className="flex items-center gap-3 min-w-0">
            {project.logoSrc && (
              <img
                alt={project.logoAlt || project.name}
                loading="lazy"
                width={24}
                height={24}
                decoding="async"
                className="rounded-xs shrink-0"
                style={{ color: "transparent" }}
                src={project.logoSrc}
              />
            )}

            <div className="flex items-center gap-2 min-w-0">
              <a
                id="no-style"
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="text-md text-gray-700 truncate"
                title={project.name}
              >
                {project.name}
              </a>

              {project.repoHref && (
                <a
                  href={project.repoHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-gray-500 hover:text-gray-700 shrink-0"
                  aria-label={`${project.name} repository`}
                  title="Repository"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.57 2.33 1.12 2.9.86.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.74-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05a9.2 9.2 0 0 1 5 0c1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.47.1 2.73.64.71 1.02 1.62 1.02 2.74 0 3.95-2.34 4.82-4.57 5.07.36.32.68.93.68 1.89 0 1.36-.01 2.45-.01 2.78 0 .27.18.59.69.49A10.1 10.1 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/>
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <p className="mt-1 text-sm text-gray-500 line-clamp-2">{project.description}</p>

          {/* Tags */}
          {project.tech && project.tech.length > 0 && (
            <div className="mt-1 flex flex-wrap gap-1.5">
              {project.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="rounded-md border border-gray-200 py-0.5 text-xs text-gray-600"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right: Year + optional stat */}
        <div className="flex shrink-0 items-center gap-2">
          {project.stat && <span className="text-xs text-gray-900">{project.stat}</span>}
          <span className="text-sm text-gray-900">{project.year}</span>
        </div>
      </div>
    </div>
  );
}

/* --- Example data: customize for your site --- */
export const defaultProjects: Project[] = [
  {
    name: "FIU Rooms",
    href: "https://fiu-rooms.vercel.app",
    repoHref: "https://github.com/asixham/fiu-rooms",
    description:
      "Empty classroom finder for FIU's MMC Campus.",
    tech: ["Next.js", "TypeScript", "Tailwind", "MongoDB", "Python", "Selenium"],
  },
  {
    name: "Scout",
    href: "https://scout-silk.vercel.app",
    repoHref: "https://github.com/asixham/scout",
    logoSrc: "https://cdn-icons-png.flaticon.com/512/919/919847.png",
    description:
      "Scrapes and tracks internship repos (e.g., Summer2025-Internships) with alerts and filters like FAANG+.",
    tech: ["Next.js", "Cheerio", "KV (Vercel)", "Tailwind"],
  },
  {
    name: "Greenline",
    href: "greenline-ruddy.vercel.app/",
    repoHref: "https://github.com/asixham/greenline",
    logoSrc: "https://cdn-icons-png.flaticon.com/512/825/825642.png",
    description:
      "Stock explorer with Prophet-based forecasts. REST API backed; Polygon.io ingestion; React charts.",
    tech: ["React", "Python", "Prophet", "FastAPI", "Polygon.io"],
  },
  {
    name: "Summon",
    logoSrc: "https://cdn-icons-png.flaticon.com/512/888/888879.png",
    description:
      "Mac-native chat for local LLMs via Ollama. Fast prompt history, attachments, and session export.",
    tech: ["Swift", "AppKit", "Ollama"],
  },
];
