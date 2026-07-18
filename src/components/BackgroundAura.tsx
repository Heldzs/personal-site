export function BackgroundAura() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Aura Violeta/Roxa no topo à esquerda */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-500/20 dark:bg-violet-800/20 blur-[120px] md:blur-[150px]" />

      {/* Aura Ciano/Azul no meio/fundo à direita */}
      <div className="absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-400/20 dark:bg-cyan-900/20 blur-[120px] md:blur-[150px]" />
    </div>
  );
}
