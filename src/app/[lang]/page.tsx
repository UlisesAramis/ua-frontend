import { getDictionary } from "@/lib/dictionary";
import HomePage from "@/Components/Home/Index";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const validLang = lang === "en" ? "en" : "es";

  const dict = await getDictionary(validLang);

  return <HomePage dict={dict} />;
}
