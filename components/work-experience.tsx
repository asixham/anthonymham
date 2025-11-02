import React from "react";

// Tailwind-first, data-driven Work section.
// Add or update jobs by editing the `jobs` array you pass in — no markup changes needed.
// Each row gets a subtle staggered animation delay like the original snippet.

export type Job = {
    company: string;
    companySuffix?: string; // e.g., (YC W23)
    href: string;
    logoSrc?: string; // public path or remote URL
    logoAlt?: string;
    area: string; // e.g., "Engineering, AI" | "Design" | "Product"
    year: string; // e.g., "2024" | "2022-23"
};

interface WorkSectionProps {
    title?: string;
    jobs: Job[];
    // Base delay (in seconds) for the section + per-item increments
    sectionDelaySec?: number;
    itemStartDelaySec?: number;
    itemStepDelaySec?: number;
    className?: string;
}

export default function WorkSection({
    title = "Work",
    jobs,
    sectionDelaySec = 0.65,
    itemStartDelaySec = 0.4,
    itemStepDelaySec = 0.07,
    className = "",
}: WorkSectionProps) {
    return (
        <section
            className={`section-animate z-10 w-full hide ${className}`}
            style={{ animationDelay: `${sectionDelaySec}s` }}
            aria-label={title}
        >
            <h3 className="mb-3 block text-lg">{title}</h3>

            <div className="border-t border-dashed border-gray-600">
                {jobs.map((job, i) => (
                    <WorkRow
                        key={`${job.company}-${job.year}-${i}`}
                        job={job}
                        delaySec={itemStartDelaySec + i * itemStepDelaySec}
                    />
                ))}
            </div>
        </section>
    );
}

function WorkRow({ job, delaySec }: { job: Job; delaySec: number }) {
    return (
<div className="flex items-center border-b border-dashed border-gray-600 py-2 overflow-hidden">
  <a
    id="no-style"
    href={job.href}
    target="_blank"
    rel="noreferrer"
    className="flex w-full items-center min-w-0 overflow-hidden"
  >
    {/* Logo */}
    <img
      alt={job.logoAlt || job.company}
      width={24}
      height={24}
      loading="lazy"
      decoding="async"
      className="h-6 w-6 rounded-sm shrink-0"
      style={{ color: "transparent" }}
      src={job.logoSrc}
    />

    {/* Left text cluster: Company · Role (stays together) */}
    <div className="flex items-center gap-1.5 w-0 flex-1 min-w-0 overflow-hidden ml-3">
      {/* Company + optional suffix */}
      <div className="flex items-center gap-1.5 min-w-0">
        <span className="truncate">{job.company}</span>
        {job.companySuffix ? (
          <span className="text-sm text-gray-600 shrink-0">{job.companySuffix}</span>
        ) : null}
      </div>

      {/* subtle separator */}
      <span className="text-gray-400 shrink-0">·</span>

      {/* Role (title) — truncates, sits right after company */}
      <span className="text-sm text-gray-500 w-0 flex-1 min-w-0 truncate [overflow-wrap:anywhere]">
        {job.area}
      </span>
    </div>

    {/* Year — pinned to far right */}
    <div className="ml-auto shrink-0 pl-2 text-sm text-gray-800">{job.year}</div>
  </a>
</div>


    );
}

// --- Example data (optional): remove in production ---
// You can import this where you render <WorkSection jobs={defaultJobs} /> to see it live.
export const work: Job[] = [
    {
        company: "Google",
        href: "https://google.com",
        logoSrc: "https://media.licdn.com/dms/image/v2/D4E0BAQGv3cqOuUMY7g/company-logo_200_200/B4EZmhegXHGcAM-/0/1759350753990/google_logo?e=1763596800&v=beta&t=Fdsr4Iq3N7IudCCzZQgOQrwOHSPx3TXROdsKFFqNd-E",
        area: "Software Engineer",
        year: "2025",
    },
    {
        company: "Bloomberg",
        href: "https://bloomberg.com",
        logoSrc: "https://media.licdn.com/dms/image/v2/C4D0BAQF0uyE7RGKDGg/company-logo_200_200/company-logo_200_200/0/1631374698859/bloomberg_lp_logo?e=1763596800&v=beta&t=ywumzUWXZlBZwsnRV_U-UiCDNbzjkRTBIph99XigJjE",
        area: "Software Engineer",
        year: "2026",
    },
]


export const internships: Job[] = [
    {
        company: "Amazon",
        href: "https://amazon.com",
        logoSrc: "https://i.pinimg.com/736x/29/f6/41/29f641b507ccb60bb7a62a830b988736.jpg",
        area: "Software Engineer Intern",
        year: "2025",
    },
    {
        company: "Google",
        href: "https://google.com",
        logoSrc: "https://media.licdn.com/dms/image/v2/D4E0BAQGv3cqOuUMY7g/company-logo_200_200/B4EZmhegXHGcAM-/0/1759350753990/google_logo?e=1763596800&v=beta&t=Fdsr4Iq3N7IudCCzZQgOQrwOHSPx3TXROdsKFFqNd-E",
        area: "Software Engineer Intern",
        year: "2025",
    },
    {
        company: "State Farm",
        href: "https://statefarm.com",
        logoSrc: "https://freepnglogo.com/images/all_img/1713117769state-farm-icon.png",
        area: "Software Engineer Intern",
        year: "2024 - 2025",
    },
    {
        company: "FIU: Applied Research Center",
        href: "https://arc.fiu.edu/research/information-technology/applied-artificial-intelligence/",
        logoSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Florida_Internation_University_seal.svg/250px-Florida_Internation_University_seal.svg.png",
        area: "Software Engineer Intern",
        year: "2024 - 2025",
    },
    {
        company: "National Science Foundation",
        href: "",
        logoSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/NSF_logo.png/1019px-NSF_logo.png",
        area: "Undergraduate Research Intern",
        year: "2024"
    },
    {
        company: "MDC: School of Eng. and Technology",
        href: "",
        logoSrc: "https://aefschools.com/wp-content/uploads/2025/02/Seal-of-Miami-Dade-College.svg.png",
        area: "CS Tutor",
        year: "2022-2023"
    }
];
