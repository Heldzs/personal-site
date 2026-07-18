import { marqueeTechs } from "@/data/stackData";

export function InfiniteMarquee() {
  const items = [...marqueeTechs, ...marqueeTechs, ...marqueeTechs];

  return (
    <div className="relative w-full overflow-hidden group py-10">
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-25%); } /* Desloca exatamente 1 das 4 cópias para criar o loop invisível */
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          width: max-content;
        }
        /* Pausa a animação quando o rato estiver por cima (hover) do grupo pai */
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>

      <div className="animate-marquee flex gap-16 items-center">
        {items.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-4 text-zinc-400 dark:text-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors select-none"
          >
            {tech.icon}
            <span className="text-2xl font-bold tracking-tight">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
