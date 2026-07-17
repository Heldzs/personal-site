"use client";

import { motion } from "motion/react";
import { Container } from "../layout/Container";
import { FadeIn } from "../motion/FadeIn";
import { stackCategories, marqueeTechs } from "@/data/stackData";

export function StackSection() {
  return (
    <section id="skills" className="relative w-full py-24 md:py-32">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-2">
          <FadeIn direction="up">
            <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400">
              02. Stack Tecnológica
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              O meu arsenal.
            </h3>
          </FadeIn>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {stackCategories.map((category, index) => (
            <FadeIn
              key={category.title}
              direction="up"
              delay={0.1 + index * 0.1}
              className={category.colSpan}
            >
              <div className="h-full flex flex-col gap-6 p-8 rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800/50 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors shadow-sm">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                    {category.title}
                  </h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mt-auto">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-sm font-medium rounded-full bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-700 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
      <FadeIn direction="up" delay={0.4} className="w-full mt-24">
        <div className="relative flex overflow-x-hidden">
          <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-zinc-50 dark:from-zinc-950 to-transparent z-10 pointer-events-none" />

          <motion.div
            className="flex gap-16 whitespace-nowrap items-center py-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[...marqueeTechs, ...marqueeTechs].map((tech, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors cursor-default"
              >
                {tech.icon}
                <span className="text-2xl font-bold tracking-tight">
                  {tech.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </FadeIn>
    </section>
  );
}
