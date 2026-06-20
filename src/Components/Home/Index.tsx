import Hero from "@/Components/Home/Hero";
import Skills from "@/Components/Home/Skills";
import Projects from "./Projects";

type Props = {
  dict: any;
  lang: "es" | "en";
};

const HomePage = ({ dict, lang }: Props) => {
  return (
    <main>
      <Hero dict={dict} lang={lang} />
      <Skills dict={dict} />
      <Projects dict={dict} />
    </main>
  );
};

export default HomePage;
