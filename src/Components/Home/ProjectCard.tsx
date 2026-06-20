"use client";

import Image from "next/image";
import CreaitorLoading from "@/Components/Animation/CreaitorLoading";

type Project = {
  title: string;
  stack: string;
  image: any;
  demo: string;
  code: string;
  isLottie?: boolean;
};

// 1. Añadimos 'dict' al tipo de las Props
type Props = {
  project: Project;
  dict: any;
};

// 2. Desestructuramos 'dict' para poder usarlo en el componente
const ProjectCard = ({ project, dict }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden border-2 border-emerald-500/30 shadow-md hover:shadow-emerald-500/80 transition-all duration-300 w-72">
      <div className="relative w-full h-60 flex items-center justify-center">
        {project.isLottie ? (
          <div className="w-16 h-16 flex items-center justify-center">
            <CreaitorLoading />
          </div>
        ) : project.image && project.image !== "" ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="288px"
            className="object-contain"
          />
        ) : (
          <div className="text-gray-500 text-sm">Sin vista previa</div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-white font-semibold text-lg">{project.title}</h3>

        <p className="text-gray-400 text-sm">{project.stack}</p>

        <div className="flex gap-2 mt-3">
          {/* 3. Corregido: Ahora apunta al enlace correcto y usa el texto del JSON */}
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-emerald-500 text-black rounded-md text-sm hover:bg-emerald-400 transition"
          >
            {dict.demo?.WatchDemo || "View Demo"}
          </a>

          {/* 4. Corregido: Ahora el botón de código también es dinámico */}
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 border border-gray-500 rounded-md text-sm hover:border-emerald-400 transition"
          >
            {dict.demo?.ViewCode || "View Code"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
