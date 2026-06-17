import Image from "next/image";
import Ocelotl from "@/Images/Ocelotl.webp";

type Props = {
  dict: any;
};

const Hero = ({ dict }: Props) => {
  return (
    <section className="w-full min-h-[90vh] flex justify-center items-center px-20">
      <div className="flex flex-col-reverse items-center lg:flex-row md:gap-12 lg:gap-24">
        <div className="text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-emerald-600">
            Ulises Aramis
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mt-2">
            {dict.hero.role}
          </p>

          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <button className="px-6 py-2 bg-emerald-500 rounded-full font-medium hover:bg-emerald-600 transition-colors">
              {dict.hero.projects}
            </button>

            <button className="px-6 py-2 border border-emerald-500 rounded-full font-medium hover:bg-emerald-500/10 transition-colors">
              {dict.hero.contact}
            </button>
          </div>
        </div>

        <Image
          src={Ocelotl}
          priority
          alt="Hero Image"
          className="rounded-full border-6 border-emerald-500 p-1 lg:w-96 lg:h-96 object-cover object-top shadow-[0_0_15px_rgba(16,185,129,0.5)]"
        />
      </div>
    </section>
  );
};

export default Hero;
