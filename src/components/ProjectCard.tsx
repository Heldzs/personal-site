import Image from "next/image";
import { projectsData } from "@/data/projectsData";
import { FaGithub } from "react-icons/fa";

export function ProjectCard({
  project,
  onClick,
}: {
  project: (typeof projectsData)[0];
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="group flex flex-col cursor-pointer bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl overflow-hidden"
    >
      {/* Imagem do Projeto */}
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-950 block">
        {project.image ? (
          <Image
            src={project.image}
            alt={`Imagem do projeto ${project.title}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`absolute inset-0 bg-linear-to-br ${project.gradient} transition-transform duration-500 group-hover:scale-105 flex items-center justify-center`}
          >
            {project.icon}
          </div>
        )}
      </div>

      {/* Conteúdo do Card */}
      <div className="flex flex-col flex-1 p-6 lg:p-8">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h4>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            aria-label="Ver código no GitHub"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="w-5 h-5" />
          </a>
        </div>

        <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-1">
          {project.description}
        </p>

        {/* Tags de Tecnologias */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
