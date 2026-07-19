"use client";

import { projectsData } from "@/data/projectsData";
import { Container } from "../layout/Container";
import { FadeIn } from "../motion/FadeIn";
import { ProjectCard } from "../ProjectCard";
import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import { useIsMounted } from "@/hooks/useIsMounted";
import { createPortal } from "react-dom";
import { ProjectModal } from "../ProjectModal";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projectsData)[0] | null
  >(null);
  const isMounted = useIsMounted();

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden"; // Bloqueia o scroll do body
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section id="projects" className="w-full py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <FadeIn direction="up">
            <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
              03. Portfólio
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Trabalhos recentes.
            </h3>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <FadeIn key={project.id} direction="up" delay={0.2 + index * 0.1}>
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </FadeIn>
          ))}
        </div>
      </Container>

      {isMounted &&
        createPortal(
          <AnimatePresence>
            {selectedProject && (
              <ProjectModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
              />
            )}
          </AnimatePresence>,
          document.body,
        )}
    </section>
  );
}
