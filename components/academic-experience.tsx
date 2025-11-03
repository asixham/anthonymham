import React from "react";

export type Academic = {
    institution: string;
    href: string;
    logoSrc?: string;
    logoAlt?: string;
    degree: string; // e.g., "B.S. in Computer Science"
    year: string; // e.g., "2021 - 2025"
    details?: string; // e.g., "Honors: Phi Kappa Phi | GPA: 3.9"
};

interface AcademicSectionProps {
    title?: string;
    academics: Academic[];
    sectionDelaySec?: number;
    itemStartDelaySec?: number;
    itemStepDelaySec?: number;
    className?: string;
}

export default function AcademicSection({
    title = "Academics",
    academics,
    sectionDelaySec = 0.65,
    itemStartDelaySec = 0.4,
    itemStepDelaySec = 0.07,
    className = "",
}: AcademicSectionProps) {
    return (
        <section
            className={`section-animate z-10 w-full hide ${className}`}
            style={{ animationDelay: `${sectionDelaySec}s` }}
            aria-label={title}
        >
            <h3 className="mb-3 block text-lg">{title}</h3>

            <div className="border-t border-dashed border-border">
                {academics.map((academic, i) => (
                    <AcademicRow
                        key={`${academic.institution}-${academic.year}-${i}`}
                        academic={academic}
                        delaySec={itemStartDelaySec + i * itemStepDelaySec}
                    />
                ))}
            </div>
        </section>
    );
}

function AcademicRow({ academic, delaySec }: { academic: Academic; delaySec: number }) {
    return (
        <div className="work-animate hide" style={{ animationDelay: `${delaySec}s` }}>
            <div className="flex flex-row items-center justify-between border-b border-dashed border-border py-2">
                <a id="no-style" href={academic.href} target="_blank" rel="noreferrer" className="min-w-0">
                    <div className="flex flex-row items-center space-x-3 min-w-0">
                        {academic.logoSrc && (
                            <img
                                alt={academic.logoAlt || academic.institution}
                                loading="lazy"
                                width={24}
                                height={24}
                                decoding="async"
                                className="rounded-xs shrink-0"
                                style={{ color: "transparent" }}
                                src={academic.logoSrc}
                            />
                        )}
                        <div className="flex flex-col min-w-0">
                            <span className="text-md truncate text-foreground">{academic.institution}</span>
                            <span className="text-sm text-muted-foreground truncate">{academic.degree}</span>
                            {academic.details && (
                                <span className="text-sm text-muted-foreground truncate">{academic.details}</span>
                            )}
                        </div>
                    </div>
                </a>
                <div className="text-sm text-foreground">{academic.year}</div>
            </div>
        </div>
    );
}

// --- Example data ---
export const defaultAcademics: Academic[] = [
    {
        institution: "Florida International University",
        href: "https://fiu.edu",
        logoSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Florida_Internation_University_seal.svg/250px-Florida_Internation_University_seal.svg.png",
        degree: "B.S. in Computer Science",
        details: "GPA: 3.9 | Honors: Phi Kappa Phi",
        year: "2022 – 2026",
    },
];
