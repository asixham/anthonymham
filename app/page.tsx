import { Footer } from "@/components/footer";
import WorkSection, { internships, work } from "@/components/work-experience";
import Header from "@/components/header";
import AcademicSection, { defaultAcademics } from "@/components/academic-experience";
import ProjectsSection, { defaultProjects } from "@/components/projects";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import { Background } from "@/components/background";

export default function Home() {
  // Tweak these to your taste
  const sectionBaseDelay = 0.3;      // first element delay
  const sectionStep = 0.15;           // stagger between siblings
  const introStep = 0.08;             // tighter stagger for intro lines

  const intro = [
    "I'm a senior at Florida International University, majoring in Computer Science. Currently, I am an SDE Intern at Amazon.",
    "I’ve previously interned at Google on the Sharing & Connections team in Seattle, State Farm building AI/ML infrastructure on AWS, and at FIU’s Applied Research Center, where I developed ML-driven prototypes for the U.S. Department of Defense.",
    "Outside of internships, I’ve built several full-stack projects, including FIU Rooms, a platform for students to find empty classroms on FIU's campus, and Scout, a web app that scrapes and aggregates software internship listings.",
    "Beyond coding, I love design, basketball, biking, and exploring the intersection of AI, systems, and learning — lately I’ve been focused on how to build tools that make complex information more intuitive.",
  ];

  return (
    <div className="relative flex justify-center min-h-screen justify-between mih-h-dvh w-full font-sans md:px-3">
      <div className="flex z-20 flex-col w-full max-w-2xl items-center justify-between space-y-10 md:border-x border-gray-600 border-dashed backdrop-blur-xs">
        <div className="flex flex-col space-y-10">
        {/* Header */}
        <BlurFade className="w-full px-3" delay={sectionBaseDelay}>
          <Header />
        </BlurFade>

        {/* Intro copy (each paragraph staggered) */}
        <div className="text-md px-3 space-y-3 text-sm w-full">
          {intro.map((line, i) => (
            <BlurFade key={i} delay={sectionBaseDelay + sectionStep + i * introStep}>
              <p>{line}</p>
            </BlurFade>
          ))}
        </div>
        
        {/* Full Time */}
        {/* <BlurFade className="w-full px-3" delay={sectionBaseDelay + 2 * sectionStep + intro.length * introStep}>
          <WorkSection title="Work" jobs={work} />
        </BlurFade> */}

        {/* Internships */}
        <BlurFade className="w-full px-3" delay={sectionBaseDelay + 2 * sectionStep + intro.length * introStep}>
          <WorkSection title="Undergraduate Internships" jobs={internships} />
        </BlurFade>

        {/* Projects */}
        <BlurFade className="px-3 w-full" delay={sectionBaseDelay + 3 * sectionStep + intro.length * introStep}>
          <ProjectsSection projects={defaultProjects} />
        </BlurFade>

        {/* Academics */}
        <BlurFade className="w-full px-3" delay={sectionBaseDelay + 4 * sectionStep + intro.length * introStep}>
          <AcademicSection title="Education" academics={defaultAcademics} />
        </BlurFade>
        </div>

        {/* Footer */}
        <Link className="w-full" href="mailto:mail@anthonymham.com">
        <BlurFade className="w-full" delay={sectionBaseDelay + 5 * sectionStep + intro.length * introStep}>
          <Footer />
        </BlurFade>
        </Link>
      </div>

      {/* Optional background */}
      <Background />
    </div>
  );
}
