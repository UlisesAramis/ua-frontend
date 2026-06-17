import Hero from "@/Components/Home/Hero";
import Skills from "@/Components/Home/Skills";
import ProjectCard from "@/Components/Home/ProjectCard";
import Projects from "./Projects";

type Props = {
  dict: any;
};

const HomePage = ({ dict }: Props) => {
  return (
    <main>
      <Hero dict={dict} />
      <Skills dict={dict} />
      <Projects dict={dict} />
    </main>
  );
};

export default HomePage;
