"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = () => {
    const newLang = lang === "es" ? "en" : "es";

    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);

    router.push(newPath);
  };

  return (
    <button
      onClick={changeLanguage}
      className="cursor-pointer border-2 p-2 rounded-2xl hover:text-emerald-500 "
    >
      {lang === "es" ? "English" : "Español"}
    </button>
  );
}
