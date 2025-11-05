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
  const sectionBaseDelay = 0.1;      // first element delay
  const sectionStep = 0.05;           // stagger between siblings
  const introStep = 0.02;             // tighter stagger for intro lines

  const intro = [
    "I'm a fourth-year Computer Science student at Florida International University, passionate about building solutions to complex problems.",
    "Currently, I'm a Software Development Engineering Intern at Amazon, where I’m building an internal MCP server that leverages AI and knowledge bases to improve the internal chatbot experience used company-wide.",
    "Previously, I interned at Google, where I helped build a new sharing library that will soon be used on almost every Google product.",
    "Beyond coding, I love design, basketball, biking, and exploring the intersection of AI, systems, and learning — lately, I’ve been focused on building tools that make complex information more intuitive.",
  ];


  return (
    <>
      {/* <div className="h-5 w-full absolute top-0">
        <Background />
      </div> */}
      <div className="relative flex justify-center min-h-screen justify-between mih-h-dvh w-full font-sans px-2">
        <div className="flex z-20 flex-col w-full max-w-2xl items-center justify-between space-y-10">
          <div className="flex flex-col space-y-10">
            {/* Header */}
            <BlurFade className="w-full px-3" delay={sectionBaseDelay}>
              <Header />
            </BlurFade>

            {/* Intro copy (each paragraph staggered) */}
            <div className="px-3 space-y-3 text-gray-700 text-lg w-full">
              {intro.map((line, i) => (
                <BlurFade key={i} delay={sectionBaseDelay + sectionStep + i * introStep}>
                  <p>{line}</p>
                </BlurFade>
              ))}
              <BlurFade delay={sectionBaseDelay + sectionStep + intro.length * introStep}>
                <p>
                  I&apos;m always interested in meeting new people and learning new things. Feel free to
                  {" "}
                  <Link className="border-b border-dashed border-[#bbb] " href="mailto:anthony@anthonymham.com">email me</Link>
                  {" "}
                  or connect with me on
                  {" "}
                  <Link className="border-b border-dashed border-[#bbb]" href="https://linkedin.com/in/xnthiny">LinkedIn</Link>.
                </p>
              </BlurFade>
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
            {/* <BlurFade className="w-full px-3" delay={sectionBaseDelay + 4 * sectionStep + intro.length * introStep}>
          <AcademicSection title="Education" academics={defaultAcademics} />
        </BlurFade> */}
          </div>

          {/* Footer */}
          <Link className="w-full" href="mailto:mail@anthonymham.com">
            <BlurFade className="w-full" delay={sectionBaseDelay + 5 * sectionStep + intro.length * introStep}>
              <Footer />
            </BlurFade>
          </Link>
        </div>

        {/* Optional background */}
        {/* <Background /> */}
      </div>
    </>
  );
}
