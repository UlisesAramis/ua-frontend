import UlisesAramis from "@/Images/Aramis.webp";
import Image from "next/image";

type props = {
  dict: any;
};

const AboutMe = ({ dict }: props) => {
  return (
    <section className="flex justify-center items-center w-full md:h-screen">
      <div className="w-5/6 mx-auto flex flex-col items-center gap-y-5 mt-20 lg:mt-0">
        <Image
          src={UlisesAramis}
          priority
          alt="Frontend Developer Ulises Aramis with a laptop, surrounded by green holographic tech icons and web mockups"
          className="rounded-full border-6 border-emerald-500 p-1 lg:w-80 lg:h-80 object-cover object-top shadow-[0_0_15px_rgba(16,185,129,0.5)]"
        />
        <p className="text-left text-lg md:text-xl text-gray-400">
          {" "}
          {dict.aboutme.description}
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
