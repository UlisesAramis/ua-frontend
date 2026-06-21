"use client";

import Image from "next/image";
import LottieLoading from "@/Components/Animation/LottieLoading";

type Project = {
  title: string;
  stack: string;
  image: any;
  demo: string;
  code: string;
  isLottie?: boolean;
};

type Props = {
  project: Project;
  dict: any;
};

const ProjectCard = ({ project, dict }: Props) => {
  return (
    <div className="rounded-xl overflow-hidden border-2 border-emerald-500/30 shadow-md hover:shadow-emerald-500/80 transition-all duration-300 w-72">
      <div className="relative w-full h-60 flex items-center justify-center">
        {project.isLottie ? (
          <div className="w-16 h-16 flex items-center justify-center">
            <LottieLoading />
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
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-emerald-500 text-black rounded-md text-sm hover:bg-emerald-400 transition"
          >
            {dict.demo?.WatchDemo || "View Demo"}
          </a>

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
