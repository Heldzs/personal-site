import { Container } from "../layout/Container";
import { FadeIn } from "../motion/FadeIn";

export function AboutSection() {
  return (
    <section id="about" className="w-full py-24 md:py-32">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Lado Esquerdo: Título da Secção */}
        <div className="lg:col-span-4 flex flex-col justify-start">
          <FadeIn direction="right">
            <h2 className="text-sm font-bold tracking-widest uppercase text-zinc-500 dark:text-zinc-400 mb-2">
              01. Sobre Mim
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Atrás do código.
            </h3>
          </FadeIn>
        </div>

        {/* Lado Direito: Conteúdo de Texto */}
        <div className="lg:col-span-8 flex flex-col gap-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed font-medium">
          <FadeIn direction="up" delay={0.2}>
            <p>
              Sou um desenvolvedor focado em criar experiências digitais que não
              apenas funcionam perfeitamente, mas que também encantam os
              utilizadores. A minha jornada no frontend começou com a
              curiosidade de entender como as coisas eram desenhadas na web.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.3}>
            <p>
              Com experiência em projetos desafiantes, especializei-me no
              ecossistema{" "}
              <strong className="text-zinc-900 dark:text-zinc-50">
                React e Next.js
              </strong>
              . Gosto de resolver problemas complexos de arquitetura e
              performance, mantendo o código limpo, escalável e acessível.
            </p>
          </FadeIn>

          <FadeIn direction="up" delay={0.4}>
            <p>
              Quando não estou a codar, provavelmente estou a explorar novas
              ferramentas de design, a estudar arquitetura de software ou a
              partilhar conhecimento com a comunidade.
            </p>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
