import Hero from "@/Components/Home/Hero";
import Skills from "@/Components/Home/Skills";

type Props = {
  dict: any;
};

const HomePage = ({ dict }: Props) => {
  return (
    <main>
      <Hero dict={dict} />
      <Skills dict={dict} />
    </main>
  );
};

export default HomePage;
