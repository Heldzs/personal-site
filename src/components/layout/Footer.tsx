export function Footer() {
  return (
    <footer className="relative z-10 w-full bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800/80 py-8 px-4 flex flex-col items-center">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 text-center">
        Desenvolvido com muito foco e Next.js por{" "}
        <span className="text-zinc-900 dark:text-zinc-100">Helder Junior</span>.
      </p>
      <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-2 text-center">
        © {new Date().getFullYear()} - Todos os direitos reservados.
      </p>
    </footer>
  );
}
