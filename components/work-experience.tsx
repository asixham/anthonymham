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
        <div className="work-animate hide" style={{ animationDelay: `${delaySec}s` }}>
            <div className="flex flex-row items-center justify-between border-b border-dashed border-gray-600 py-2">
                <a id="no-style" href={job.href} target="_blank" rel="noreferrer" className="min-w-0">
                    <div className="flex flex-row items-center space-x-2">
                        <div className="flex flex-row items-center space-x-3 min-w-0">
                            {/* Logo */}
                            <img
                                alt={job.logoAlt || job.company}
                                loading="lazy"
                                width={24}
                                height={24}
                                decoding="async"
                                className="rounded-xs shrink-0"
                                style={{ color: "transparent" }}
                                src={job.logoSrc}
                            />

                            {/* Company + optional suffix */}
                            <div className="text-md flex flex-row items-center space-x-1.5 text-gray-700 min-w-0">
                                <span className="truncate">{job.company}</span>
                                {job.companySuffix ? (
                                    <span className="text-sm text-gray-600 shrink-0">{job.companySuffix}</span>
                                ) : null}
                            </div>
                        </div>

                        {/* Area / Role */}
                        <div className="text-sm truncate text-gray-500">{job.area}</div>
                    </div>
                </a>

                {/* Year(s) */}
                <div className="flex flex-row items-center space-x-2">
                    <div className="text-sm text-gray-800">{job.year}</div>
                </div>
            </div>
        </div>
    );
}

// --- Example data (optional): remove in production ---
// You can import this where you render <WorkSection jobs={defaultJobs} /> to see it live.
export const defaultJobs: Job[] = [
    // {
    //     company: "Bloomberg",
    //     href: "https://bloomberg.com",
    //     logoSrc: "https://media.licdn.com/dms/image/v2/C4D0BAQF0uyE7RGKDGg/company-logo_200_200/company-logo_200_200/0/1631374698859/bloomberg_lp_logo?e=1763596800&v=beta&t=ywumzUWXZlBZwsnRV_U-UiCDNbzjkRTBIph99XigJjE",
    //     area: "Software Engineer",
    //     year: "2026",
    // },
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
        logoSrc: "https://www.svgrepo.com/show/519453/state-farm.svg",
        area: "Software Engineer Intern",
        year: "2024 - 2025",
    },
    {
        company: "FIU: Applied Research Center",
        href: "https://statefarm.com",
        logoSrc: "https://media.licdn.com/dms/image/v2/C4E0BAQGJx9gWD93LvA/company-logo_200_200/company-logo_200_200/0/1630603177841/florida_international_university_applied_research_center_logo?e=1763596800&v=beta&t=_15gbJ0I9Pl3gYGo5xaDOJz5iEHY4LwAI4-_-WQxEfo",
        area: "Software Engineer Intern",
        year: "2023 - 2025",
    },
];
