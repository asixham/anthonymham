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
<div className="flex items-center py-2.5 overflow-hidden first:border-t border-b border-dashed border-muted-foreground/35">
  <a
    id="no-style"
    href={job.href}
    target="_blank"
    rel="noreferrer"
    className="flex w-full items-center min-w-0 overflow-hidden"
  >
    {/* Logo — fixed slot so layout is stable; image scales inside without stretching */}
    <span className="flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-sm">
      <img
        alt={job.logoAlt || job.company}
        loading="lazy"
        decoding="async"
        className="max-h-6 max-w-6 h-auto w-auto object-contain"
        style={{ color: "transparent" }}
        src={job.logoSrc}
      />
    </span>

    {/* Left text cluster: Company · Role (stays together) */}
    <div className="flex items-center gap-1.5 w-0 flex-1 min-w-0 overflow-hidden ml-3">
      {/* Company + optional suffix */}
      <div className="flex items-center gap-1.5 min-w-0">
        <span className="truncate text-foreground text-md">{job.company}</span>
        {job.companySuffix ? (
          <span className="text-md text-muted-foreground shrink-0">{job.companySuffix}</span>
        ) : null}
      </div>

      {/* Role (title) — truncates, sits right after company */}
      <span className="text-sm text-muted-foreground w-0 flex-1 min-w-0 truncate [overflow-wrap:anywhere]">
        {job.area}
      </span>
    </div>

    {/* Year — pinned to far right */}
    <div className="ml-auto shrink-0 pl-2 text-sm text-muted-foreground">{job.year}</div>
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
        logoSrc: "https://images.seeklogo.com/logo-png/27/1/google-logo-png_seeklogo-273191.png",
        area: "Software Engineer",
        year: "Incoming 2026",
    },
]


export const education: Job[] = [
    {
        company: "Florida International University",
        href: "https://www.fiu.edu",
        logoSrc:
            "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Florida_Internation_University_seal.svg/250px-Florida_Internation_University_seal.svg.png",
        area: "B.S. Computer Science",
        year: "2026",
    },
    {
        company: "Georgia Institute of Technology",
        href: "https://www.gatech.edu",
        logoSrc:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Georgia_Tech_Yellow_Jackets_logo.svg/250px-Georgia_Tech_Yellow_Jackets_logo.svg.png",
        area: "M.S. Computer Science",
        year: "2028",
    },
];

export const internships: Job[] = [
    {
        company: "Amazon",
        href: "https://amazon.com",
        logoSrc: "https://www.svgrepo.com/show/112049/amazon-logo.svg",
        area: "Engineering",
        year: "2025",
    },
    {
        company: "Google",
        href: "https://google.com",
        logoSrc: "https://images.seeklogo.com/logo-png/27/1/google-logo-png_seeklogo-273191.png",
        area: "Engineering",
        year: "2025",
    },
    {
        company: "State Farm",
        href: "https://statefarm.com",
        logoSrc: "https://logos-world.net/wp-content/uploads/2021/10/State-Farm-Symbol.png",
        area: "Software Engineer Intern",
        year: "2024",
    },
    {
        company: "FIU: Applied Research Center",
        href: "https://arc.fiu.edu/research/information-technology/applied-artificial-intelligence/",
        logoSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Florida_Internation_University_seal.svg/250px-Florida_Internation_University_seal.svg.png",
        area: "Applied Research",
        year: "2023-24",
    },
    {
        company: "MDC: School of Science",
        href: "https://www.nsf.gov",
        logoSrc:
            "https://scontent-mia3-1.xx.fbcdn.net/v/t1.6435-9/210304790_456144652401774_8110878663974250044_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=0GFEQ8J3g9QQ7kNvwEomqGU&_nc_oc=AdoQjwKI-fftrd6bVKrACZTQcL70Gbqg7mDp7QmVN6X0dmXdBnlvtvUEoN2MR7QUG_k&_nc_zt=23&_nc_ht=scontent-mia3-1.xx&_nc_gid=x4H9RxVFediB46727ebk-g&_nc_ss=7a3a8&oh=00_Af0cWk6v8ANmTF6zU54jkWcqxZ3I4T4faDaZHGVlY17HPQ&oe=6A0CBAF7",
        area: "Research",
        year: "2023"
    },
    {
        company: "MDC: School of Eng. and Technology",
        href: "https://www.mdc.edu/entec/",
        logoSrc: "https://aefschools.com/wp-content/uploads/2025/02/Seal-of-Miami-Dade-College.svg.png",
        area: "Tutor",
        year: "2022-23"
    }
];
