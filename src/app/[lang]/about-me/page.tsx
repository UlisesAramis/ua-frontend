import AboutMe from "@/Components/AboutMe/AboutMe";
import { getDictionary } from "@/lib/dictionary";

type Props = {
  params: Promise<{
    lang: "es" | "en";
  }>;
};

export default async function Page({ params }: Props) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <AboutMe dict={dict} />;
}
