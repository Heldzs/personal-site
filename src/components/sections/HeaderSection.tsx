"use client";

import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/motion/FadeIn";
import {
  ArrowDownIcon,
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/lib/icons";

export function HeaderSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center py-32 overflow-x-hidden">
      <aside className="hidden md:flex absolute left-4 lg:left-8 xl:left-12 top-1/2 -translate-y-1/2 flex-col gap-6 z-40">
        <FadeIn direction="right" delay={0.8}>
          <a
            href="https://www.github.com/Heldzs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <GithubIcon className="w-6 h-6" />
          </a>
        </FadeIn>
        <FadeIn direction="right" delay={0.9}>
          <a
            href="https://linkedin.com/in/helder-júnior"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </FadeIn>
        <FadeIn direction="right" delay={1.0}>
          <a
            href="mailto:helderjjobs@gmail.com"
            className="text-zinc-400 hover:text-red-500 transition-colors"
            aria-label="Email"
          >
            <EmailIcon className="w-6 h-6" />
          </a>
        </FadeIn>
      </aside>

      <Container className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full relative z-10 md:pl-20 lg:pl-28 xl:pl-32 2xl:pl-8">
        <div className="flex flex-col select-none">
          <FadeIn direction="up" delay={0.1}>
            <h1 className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-black tracking-tighter leading-[0.9] text-zinc-900 dark:text-zinc-50">
              Desenvolvedor
            </h1>
          </FadeIn>
          <FadeIn direction="up" delay={0.2}>
            <h2 className="text-5xl sm:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-black tracking-tighter leading-[0.9] text-transparent bg-clip-text bg-linear-to-r from-zinc-500 to-zinc-800 dark:from-zinc-400 dark:to-zinc-100">
              Frontend
            </h2>
          </FadeIn>
        </div>
        <div className="flex flex-col gap-8 lg:pl-8">
          <FadeIn direction="up" delay={0.3}>
            <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg">
              Olá, eu sou o <strong>Helder Junior</strong>. Especialista em
              React, Next.js e na construção de interfaces web de alta
              performance. Transformo ideias complexas em produtos digitais
              acessíveis, escaláveis e esteticamente perfeitos.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4} className="flex flex-wrap gap-4">
            <button className="group relative px-8 py-4 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95">
              <div className="absolute inset-0 w-full h-full bg-white/20 dark:bg-black/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative">Ver Projetos</span>
            </button>

            <button className="px-8 py-4 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-50 font-semibold rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors active:scale-95">
              Entrar em Contato
            </button>
          </FadeIn>
        </div>
      </Container>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-auto md:right-8 xl:right-12 md:translate-x-0 z-40">
        <FadeIn direction="up" delay={1.2}>
          <ArrowDownIcon className="w-8 h-8 text-zinc-400 dark:text-zinc-600 animate-bounce" />
        </FadeIn>
      </div>
    </section>
  );
}
