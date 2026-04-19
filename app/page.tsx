import { Footer } from "@/components/footer";
import WorkSection, { education, internships, work } from "@/components/work-experience";
import Header from "@/components/header";
import ProjectsSection, { defaultProjects } from "@/components/projects";
import { BlurFade } from "@/components/ui/blur-fade";
import Link from "next/link";
import { Background } from "@/components/background";

export default function Home() {
  // Tweak these to your taste
  const sectionBaseDelay = 0.1;      // first element delay
  const sectionStep = 0.05;           // stagger between siblings
  const introStep = 0.02;             // tighter stagger for intro lines

  /** Toggle to show the biography paragraphs under the header. Delays still use `intro.length` so section timing stays the same when this is false. */
  const showIntro = false;

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

            {/* Intro copy (optional) + reach-out — shared `space-y-3` so spacing matches when intro is on. */}
            <div className="px-3 space-y-3 text-muted-foreground text-lg w-full">
              {showIntro
                ? intro.map((line, i) => (
                    <BlurFade key={i} delay={sectionBaseDelay + sectionStep + i * introStep}>
                      <p>{line}</p>
                    </BlurFade>
                  ))
                : null}
              <BlurFade delay={sectionBaseDelay + sectionStep + intro.length * introStep}>
                <p>
                  Reach out at{" "}
                  <Link
                    className="border-b border-dashed border-border hover:text-foreground"
                    href="mailto:mail@anthonymham.com"
                  >
                    mail@anthonymham.com
                  </Link>
                  .
                </p>
              </BlurFade>
            </div>

            {/* Full Time */}
            <BlurFade className="w-full px-3" delay={sectionBaseDelay + 2 * sectionStep + intro.length * introStep}>
              <WorkSection title="Work" jobs={work} />
            </BlurFade>

            {/* Internships */}
            <BlurFade className="w-full px-3" delay={sectionBaseDelay + 2 * sectionStep + intro.length * introStep}>
              <WorkSection title="Undergraduate Internships" jobs={internships} />
            </BlurFade>

            {/* Education */}
            <BlurFade className="w-full px-3" delay={sectionBaseDelay + 3 * sectionStep + intro.length * introStep}>
              <WorkSection title="Education" jobs={education} />
            </BlurFade>

            {/* Projects */}
            <BlurFade className="px-3 w-full" delay={sectionBaseDelay + 4 * sectionStep + intro.length * introStep}>
              <ProjectsSection projects={defaultProjects} />
            </BlurFade>
          </div>

          {/* Footer */}
          <Link className="w-full" href="mailto:mail@anthonymham.com">
            <BlurFade className="w-full" delay={sectionBaseDelay + 6 * sectionStep + intro.length * introStep}>
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
