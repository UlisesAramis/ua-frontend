import ProjectCard from "@/Components/Home/ProjectCard";
import Gif from "@/Images/gift.webp";
import Bee from "@/Images/BeeLogo.webp";
import CanelaLogo from "@/Images/Logo.svg";

type Props = {
  // Cambiado de any a un tipado más específico para mayor seguridad
  dict: {
    projects: {
      title: string;
      description: string;
    };
    demo: {
      WatchDemo: string;
      ViewCode: string;
    };
  };
};

const Projects = ({ dict }: Props) => {
  const projects = [
    {
      title: "Fluent-bee",
      stack: "Next.js, Tailwind",
      image: Bee,
      isLottie: false,
      demo: "https://fluent-bee.vercel.app/",
      code: "https://github.com/UlisesAramis/Fluent-bee",
    },
    {
      title: "Canela Kitchen Design",
      stack: "Next.js, Tailwind",
      image: CanelaLogo,
      isLottie: false,
      demo: "https://canela-kitchen-design.vercel.app/",
      code: "https://github.com/UlisesAramis/Canela-Kitchen-Design",
    },
    {
      title: "GIF Expert App",
      stack: "React.js, API",
      image: Gif,
      isLottie: false,
      demo: "https://ulisesaramis.github.io/react-gifexpertapp",
      code: "https://github.com/UlisesAramis/react-gifexpertapp",
    },
    {
      title: "COVID-19 Tracker",
      stack: "Next.js, API, Tailwind, Rive",
      image: null,
      isLottie: true,
      demo: "https://covid-stats-api-henna.vercel.app",
      code: "https://github.com/UlisesAramis/covid-stats-api",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-4xl font-black  sm:text-5xl md:text-6xl text-emerald-600 text-center">
        {dict.projects.title}
      </h2>

      <div className="w-3/4 my-10">
        <p className="text-center text-gray-400">{dict.projects.description}</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} dict={dict.demo} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
