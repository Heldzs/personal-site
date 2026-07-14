import { HeaderSection } from "@/components/sections/HeaderSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { StackSection } from "@/components/sections/StackSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col bg-zinc-950 text-zinc-50">
      <HeaderSection />
      <AboutSection />
      <StackSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
