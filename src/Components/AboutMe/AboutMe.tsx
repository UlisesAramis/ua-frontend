import React from "react";
import { DiCssTricks } from "react-icons/di";

import UlisesAramis from "@/Images/Aramis.webp";
import Image from "next/image";

type props = {
  dict: any;
};

const AboutMe = ({ dict }: props) => {
  return (
    <section className="flex justify-center items-center w-full h-screen">
      <div className="w-5/6 mx-auto flex flex-col items-center gap-y-5">
        <Image
          src={UlisesAramis}
          priority
          alt="Hero Image"
          className="rounded-full border-6 border-emerald-500 p-1 lg:w-80 lg:h-80 object-cover object-top shadow-[0_0_15px_rgba(16,185,129,0.5)]"
        />
        <p className="text-left"> {dict.aboutme.description}</p>
      </div>
    </section>
  );
};

export default AboutMe;
