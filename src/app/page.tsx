import dynamic from "next/dynamic";

import { BackgroundAura } from "@/components/BackgroundAura";
import { HeaderSection } from "@/components/sections/HeaderSection";
const AboutSection = dynamic(() =>
  import("@/components/sections/AboutSection").then((mod) => mod.AboutSection),
);
const StackSection = dynamic(() =>
  import("@/components/sections/StackSection").then((mod) => mod.StackSection),
);
const ProjectsSection = dynamic(() =>
  import("@/components/sections/ProjectsSection").then(
    (mod) => mod.ProjectsSection,
  ),
);
const ContactSection = dynamic(() =>
  import("@/components/sections/ContactSection").then(
    (mod) => mod.ContactSection,
  ),
);

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col text-zinc-900 dark:text-zinc-50">
      <BackgroundAura />

      <div className="relative w-full">
        <div className="sticky top-0 h-screen w-full -z-10">
          <HeaderSection />
        </div>
        <div className="relative z-10 w-full bg-zinc-50/90 dark:bg-zinc-950/90 backdrop-blur-2xl border-t border-zinc-200 dark:border-zinc-800 shadow-2xl">
          <AboutSection />
          <StackSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
