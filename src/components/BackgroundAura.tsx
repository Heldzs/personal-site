"use client";

import { motion } from "motion/react";

export function BackgroundAura() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Aura Violeta/Roxa no topo à esquerda */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-violet-500/20 dark:bg-violet-800/20 blur-[120px] md:blur-[150px]"
      />

      {/* Aura Ciano/Azul no meio/fundo à direita */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -50, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-[40%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-cyan-400/20 dark:bg-cyan-900/20 blur-[120px] md:blur-[150px]"
      />
    </div>
  );
}
