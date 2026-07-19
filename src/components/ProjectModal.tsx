"use client";

import { Fragment, useEffect } from "react";
import { motion } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { projectsData } from "@/data/projectsData";

interface ProjectModalProps {
  project: (typeof projectsData)[0];
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const formatInlineText = (text: string) => {
    const segments = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).filter(Boolean);

    return segments.map((segment, index) => {
      if (segment.startsWith("**") && segment.endsWith("**")) {
        return (
          <strong key={`${segment}-${index}`}>{segment.slice(2, -2)}</strong>
        );
      }

      if (segment.startsWith("*") && segment.endsWith("*")) {
        return <em key={`${segment}-${index}`}>{segment.slice(1, -1)}</em>;
      }

      return <Fragment key={`${segment}-${index}`}>{segment}</Fragment>;
    });
  };

  const renderDescriptionContent = (content: string) => {
    const lines = content.split("\n").map((line) => line.trim());
    const blocks: React.ReactNode[] = [];
    let paragraphLines: string[] = [];
    let listItems: string[] = [];

    const flushParagraph = () => {
      if (paragraphLines.length > 0) {
        blocks.push(
          <p
            key={`paragraph-${blocks.length}`}
            className="text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            {formatInlineText(paragraphLines.join(" "))}
          </p>,
        );
        paragraphLines = [];
      }
    };

    const flushList = () => {
      if (listItems.length > 0) {
        blocks.push(
          <ul
            key={`list-${blocks.length}`}
            className="list-disc pl-5 space-y-2 text-zinc-600 dark:text-zinc-400 leading-relaxed"
          >
            {listItems.map((item, index) => (
              <li key={`${item}-${index}`}>{formatInlineText(item)}</li>
            ))}
          </ul>,
        );
        listItems = [];
      }
    };

    lines.forEach((line) => {
      if (!line) {
        flushParagraph();
        flushList();
        return;
      }

      if (line.startsWith("- ")) {
        flushParagraph();
        listItems.push(line.slice(2));
        return;
      }

      paragraphLines.push(line);
    });

    flushParagraph();
    flushList();

    return blocks;
  };

  // Fecha o modal se o utilizador pressionar a tecla ESC no teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop com desfoque */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-zinc-900/60 dark:bg-black/80 backdrop-blur-sm cursor-pointer"
      />

      {/* Container Principal do Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-5xl max-h-[90vh] bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row z-10"
      >
        {/* Botão Fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 flex items-center justify-center w-10 h-10 bg-zinc-200/80 hover:bg-zinc-300 dark:bg-zinc-800/80 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 rounded-full backdrop-blur-md transition-colors"
          aria-label="Fechar detalhes"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Esquerda: Imagem/Ícone */}
        <div
          className={`lg:w-1/2 relative bg-linear-to-br ${project.gradient} flex items-center justify-center min-h-62.5 lg:min-h-full shrink-0`}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {project.icon}
          </motion.div>
        </div>

        {/* Direita: Conteúdo */}
        <div className="lg:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
          <h4 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 mb-4 pr-8">
            {project.title}
          </h4>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.techs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-medium bg-zinc-200 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-300 dark:border-zinc-800 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="prose prose-zinc dark:prose-invert max-w-none mb-10 flex-1">
            <div className="space-y-4">
              {renderDescriptionContent(
                project.fullDescription || project.description,
              )}
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-wrap items-center gap-4 mt-auto pt-6 border-t border-zinc-200 dark:border-zinc-800">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-50 dark:hover:bg-zinc-200 text-zinc-50 dark:text-zinc-900 font-semibold rounded-xl transition-colors flex-1 sm:flex-none"
            >
              Ver Projeto
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-2 px-6 py-3 bg-zinc-200 hover:bg-zinc-300 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-50 font-semibold rounded-xl transition-colors flex-1 sm:flex-none"
            >
              <FaGithub className="w-5 h-5" />
              Código
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
