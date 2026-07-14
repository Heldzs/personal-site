import { ThemeButton } from "../ThemeButton";

export function Navbar() {
  return (
    <header className="w-full border-b border-zinc-200 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <span className="font-bold text-lg">Meu Portfólio</span>

        {/* O botão aparece aqui, no canto direito */}
        <ThemeButton />
      </div>
    </header>
  );
}
