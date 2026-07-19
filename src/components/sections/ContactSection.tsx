import { Container } from "../layout/Container";
import { FadeIn } from "../motion/FadeIn";
import { GithubIcon, LinkedinIcon, EmailIcon } from "@/lib/icons";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full pt-24 pb-8 md:pt-32 md:pb-12 flex flex-col items-center justify-content text-center"
    >
      <Container className="flex flex-col items-center justify-center max-w-3xl">
        <FadeIn direction="right">
          <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-2">
            01. Qual é o próximo passo?
          </h2>
          <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Vamos Conversar.
          </h3>
        </FadeIn>
        <FadeIn direction="up" delay={0.2}>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-10 leading-relaxed">
            Atualmente estou aberto a novas oportunidades e desafios. Seja para
            uma proposta de trabalho, uma dúvida sobre código ou apenas para dar
            um olá, a minha caixa de entrada está sempre aberta e farei o
            possível para responder!
          </p>
        </FadeIn>
        <FadeIn direction="up" delay={0.3}>
          <a
            href="mailto:helderjjobs@gmail.com"
            className="inline-flex items-center justify-center gap-3 px-8 bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900 font-bold rounded-full hover:scale-105 active:scale-95 transition-transform duration-300 shadow-xl shadow-zinc-900/20 dark:shadow-white/10"
          >
            <EmailIcon className="w-5 h-5" />
            Dizer Olá
          </a>
        </FadeIn>
        <FadeIn direction="up" delay={0.4} className="mt-20">
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-4 text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 bg-zinc-200/50 hover:bg-zinc-200 dark:bg-zinc-900/50 dark:hover:bg-zinc-800 rounded-full transition-all duration-300 hover:-translate-y-1"
            >
              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/seu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-4 text-zinc-600 hover:text-blue-600 dark:text-zinc-400 dark:hover:text-blue-400 bg-zinc-200/50 hover:bg-blue-50 dark:bg-zinc-900/50 dark:hover:bg-blue-900/20 rounded-full transition-all duration-300 hover:-translate-y-1"
            >
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </FadeIn>
      </Container>

      <div className="w-full max-w-7xl mx-auto mt-24 border-t border-zinc-200 dark:border-zinc-800/80 pt-8 px-4 flex flex-col items-center">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Desenvolvido com muito foco e Next.js por{" "}
          <span className="text-zinc-900 dark:text-zinc-100">
            Helder Junior
          </span>
          .
        </p>
        <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2">
          © {new Date().getFullYear()} - Todos os direitos reservados.
        </p>
      </div>
    </section>
  );
}
