import { Container } from "@/components/layout/Container";

export function HeaderSection() {
  return (
    <section className="w-full bg-zinc-950 py-20 text-white">
      <Container className="flex flex-col gap-6">
        <h1 className="text-4xl font-bold">Welcome to My Personal Site</h1>
        <p className="text-lg text-zinc-400">
          Bem-vindo ao meu portfólio! Sou um desenvolvedor full stack com
          experiência em criar aplicações web modernas e de alta performance.
        </p>
      </Container>
    </section>
  );
}
