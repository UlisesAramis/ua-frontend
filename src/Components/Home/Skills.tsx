"use client";

import Image, { StaticImageData } from "next/image";

import Html from "@/Images/Html.svg";
import Css from "@/Images/Css.svg";
import JavaScript from "@/Images/Js.svg";
import NextJs from "@/Images/NextJs.svg";
import Tailwind from "@/Images/Tailwind.svg";
import Rive from "@/Images/Rive.svg";

type Props = {
  dict: {
    skills: {
      title: string;
      subtitle: string;
    };
  };
};

type Skill = {
  icon: StaticImageData;
  alt: string;
  invert?: boolean;
};

const skills: Skill[] = [
  { icon: Html, alt: "HTML" },
  { icon: Css, alt: "CSS" },
  { icon: JavaScript, alt: "JavaScript" },
  { icon: NextJs, alt: "Next.js", invert: true },
  { icon: Tailwind, alt: "Tailwind" },
  { icon: Rive, alt: "Rive", invert: true },
];

export default function Skills({ dict }: Props) {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-black  sm:text-5xl md:text-6xl text-emerald-600">
            {dict.skills.title}
          </h2>

          <p className="mt-4 text-neutral-400 text-lg md:text-xl">
            {dict.skills.subtitle}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill) => (
            <article
              key={skill.alt}
              className="group flex aspect-square items-center justify-center rounded-3xl border-4 border-white/10 transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/40 hover:bg-emerald-500/5 hover:shadow-[0_0_30px_rgba(16,185,129,0.12)]"
            >
              <div className="relative h-20 w-20 transition-transform duration-300 group-hover:scale-110 md:h-24 md:w-24">
                <Image
                  src={skill.icon}
                  alt={skill.alt}
                  fill
                  draggable={false}
                  className={`object-contain ${
                    skill.invert ? "invert brightness-200" : ""
                  }`}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
