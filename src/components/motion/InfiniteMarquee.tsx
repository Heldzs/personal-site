import { marqueeTechs } from "@/data/stackData";
import { motion, useAnimationFrame, useMotionValue } from "motion/react";

export function InfiniteMarquee() {
  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    // moveBy ajusta a velocidade do carrossel
    const moveBy = -1;
    x.set(x.get() + moveBy * (delta / 16));

    if (x.get() < -1000) {
      x.set(0);
    }
  });

  return (
    <div className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing py-10">
      <motion.div
        drag="x"
        dragConstraints={{ left: -2000, right: 0 }}
        dragElastic={0.1}
        dragMomentum={true}
        style={{ x }}
        className="flex gap-16 items-center w-max"
      >
        {[...marqueeTechs, ...marqueeTechs, ...marqueeTechs].map((tech, i) => (
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
      </motion.div>
    </div>
  );
}
