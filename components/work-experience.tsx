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

            <div className="">
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
<div className="flex items-center py-2 overflow-hidden">
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
        <span className="truncate text-gray-700 text-md">{job.company}</span>
        {job.companySuffix ? (
          <span className="text-md text-gray-400 shrink-0">{job.companySuffix}</span>
        ) : null}
      </div>

      {/* Role (title) — truncates, sits right after company */}
      <span className="text-sm text-gray-400 w-0 flex-1 min-w-0 truncate [overflow-wrap:anywhere]">
        {job.area}
      </span>
    </div>

    {/* Year — pinned to far right */}
    <div className="ml-auto shrink-0 pl-2 text-sm text-gray-400">{job.year}</div>
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
        logoSrc: "https://www.svgrepo.com/show/112049/amazon-logo.svg",
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
        logoSrc: "https://media.licdn.com/dms/image/v2/D4E0BAQGe3IHsGr7hjQ/company-logo_200_200/company-logo_200_200/0/1686247139310/state_farm_logo?e=1763596800&v=beta&t=iZmvmameiGC1hlFuuoXabWRzSgl82T8FNJwXIy-rI2k",
        area: "Software Engineer Intern",
        year: "2024",
    },
    {
        company: "FIU: Applied Research Center",
        href: "https://arc.fiu.edu/research/information-technology/applied-artificial-intelligence/",
        logoSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Florida_Internation_University_seal.svg/250px-Florida_Internation_University_seal.svg.png",
        area: "Applied Research Intern",
        year: "2024",
    },
    {
        company: "MDC School of Science",
        href: "https://www.nsf.gov",
        logoSrc: "https://scontent-sea1-1.xx.fbcdn.net/v/t1.6435-1/210304790_456144652401774_8110878663974250044_n.jpg?stp=c0.0.809.809a_dst-jpg_s480x480_tt6&_nc_cat=106&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=bqAA_BeX4cAQ7kNvwE0Yat2&_nc_oc=AdnWD5bEQ803KOIhsswLG-KLRIV3xZJsk3ng0C3TqzvZVydRG45v233fawbF9VH4YPWqd_t8OP7OW4LV08SGSONL&_nc_zt=24&_nc_ht=scontent-sea1-1.xx&_nc_gid=MRMXRa3CczmGvqNPMTLJeA&oh=00_AficpHhwTTx-ilLGUWswrRgkezCyl0jerSMyPHkHcWzOWw&oe=692F863D",
        area: "Undergraduate Research Intern",
        year: "2024"
    },
    {
        company: "MDC: School of Eng. and Technology",
        href: "https://www.mdc.edu/entec/",
        logoSrc: "https://aefschools.com/wp-content/uploads/2025/02/Seal-of-Miami-Dade-College.svg.png",
        area: "Tutor",
        year: "2022-2023"
    }
];
