"use client";

import Image from "next/image";
import Html from "@/Images/Html.svg";
import Css from "@/Images/Css.svg";
import JavaScript from "@/Images/Js.svg";
import NextJs from "@/Images/NextJs.svg";
import Tailwind from "@/Images/Tailwind.svg";
import Rive from "@/Images/Rive.svg";

type Props = {
  dict: any;
};

const Skills = ({ dict }: Props) => {
  const skillsData = [
    { src: Html, alt: "html", invert: false },
    { src: Css, alt: "css", invert: false },
    { src: JavaScript, alt: "js", invert: false },
    { src: NextJs, alt: "nextjs", invert: true },
    { src: Tailwind, alt: "tailwind", invert: false },
    { src: Rive, alt: "rive", invert: true },
  ];

  const cardStyle = `
    bg-black flex justify-center items-center 
    border-[3px] border-emerald-500/50 rounded-[2.5rem]
    shadow-[inset_0_0_40px_rgba(16,185,129,0.3)] 
    w-40 h-40            /* Mobile: 160px */
    md:w-52 md:h-52      /* Tablet: 208px */
    lg:w-64 lg:h-64      /* Desktop: 256px */
    transition-all duration-300 hover:scale-105 
    hover:shadow-[inset_0_0_60px_rgba(16,185,129,0.5)]
    hover:border-emerald-400
  `;

  return (
    <section className="w-full min-h-screen flex flex-col justify-center items-center px-4 py-20 bg-[#0a0a0a]">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-20 text-white text-center tracking-tight">
        {dict.skills.title}
      </h1>

      <p>{dict.skills.subtitle}</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap justify-center gap-6 md:gap-10 lg:gap-14 max-w-7xl">
        {skillsData.map((skill, index) => (
          <div key={index} className={cardStyle}>
            <div className="relative w-24 h-24 md:w-36 md:h-36 lg:w-44 lg:h-44">
              <Image
                src={skill.src}
                alt={skill.alt}
                fill
                priority={index < 3}
                className={`object-contain p-4 ${
                  skill.invert ? "invert brightness-200" : ""
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
