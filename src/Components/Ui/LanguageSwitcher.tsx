"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ lang }: { lang: string }) {
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = () => {
    const newLang = lang === "es" ? "en" : "es";
    const newPath = pathname.replace(`/${lang}`, `/${newLang}`);

    router.push(newPath, { scroll: false });
  };

  return (
    <button
      onClick={changeLanguage}
      className="cursor-pointer px-5 py-2 rounded-full border border-emerald-500/30 bg-white text-gray-700 font-medium shadow-sm transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-lg hover:shadow-emerald-500/30 hover:-translate-y-0.5 active:scale-95"
    >
      {lang === "es" ? "🇺🇸 English" : "🇲🇽 Español"}
    </button>
  );
}
