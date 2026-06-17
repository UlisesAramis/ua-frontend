import ProjectCard from "@/Components/Home/ProjectCard";
import Gif from "@/Images/gift.png";
import Bee from "@/Images/BeeLogo.webp";
import CanelaLogo from "@/Images/Logo.svg";

type Props = {
  dict: any;
};

const Projects = ({ dict }: Props) => {
  const projects = [
    {
      title: "Fluent-bee",
      stack: "Next.js, Tailwind, Node",
      image: Bee,
      isLottie: false,
      demo: "https://fluent-bee.vercel.app/",
      code: "https://github.com",
    },
    {
      title: "Canela Kitchen Design",
      stack: "React, Firebase",
      image: CanelaLogo,
      isLottie: false,
      demo: "https://canela-kitchen-design.vercel.app/",
      code: "https://github.com",
    },
    {
      title: "GIF Expert App",
      stack: "React, JavaScript, CSS",
      image: Gif,
      isLottie: false,
      demo: "https://ulisesaramis.github.io/react-gifexpertapp",
      code: "https://github.com",
    },
    {
      title: "COVID-19 Tracker",
      stack: "React, API",
      image: null,
      isLottie: true,
      demo: "https://vercel.app",
      code: "jnvelfn",
    },
  ];

  return (
    <section
      id="projects"
      className="w-full px-6 py-20 flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold text-white mb-10 text-center">
        {dict.projects.title}
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
