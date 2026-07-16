import { HeaderSection } from "@/components/sections/HeaderSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StackSection } from "@/components/sections/StackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { BackgroundAura } from "@/components/BackgroundAura";

export default function HomePage() {
  return (
    <main className="relative flex min-h-screen flex-col text-zinc-900 dark:text-zinc-50">
      <BackgroundAura />

      <HeaderSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
