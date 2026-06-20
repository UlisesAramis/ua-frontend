import { getDictionary } from "@/lib/dictionary";
import "./globals.css";
import Header from "@/Components/Ui/Header";
import Footer from "@/Components/Ui/Footer";

export const metadata = {
  title: "Ulises Aramis",
  description: "Professional Frontend Development Portfolio",
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  const validLang = lang === "en" ? "en" : "es";

  const dict = await getDictionary(validLang);

  return (
    <>
      <Header dict={dict} lang={validLang} />
      {children}
      <Footer />
    </>
  );
}
