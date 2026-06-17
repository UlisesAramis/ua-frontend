"use client";

import { useState } from "react";
import Link from "next/link";

import { GiHamburgerMenu } from "react-icons/gi";

import MobileNav from "@/Components/Ui/MobileNav";
import LanguageSwitcher from "@/Components/Ui/LanguageSwitcher";

type Props = {
  dict: any;
  lang: "es" | "en";
};

const Header: React.FC<Props> = ({ dict, lang }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <header className="w-full  bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href={`/${lang}`}>
          <div className="flex items-center gap-1 cursor-pointer">
            <h1 className="text-emerald-500 font-bold text-2xl">
              <span className="text-black">U</span>A
            </h1>
            <p className="font-bold text-2xl text-black">|</p>
            <p className="font-bold text-sm md:text-base text-black">
              {dict.header.role}
            </p>
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium">
            <li className="group">
              <Link
                href={`/${lang}#skills`}
                className="relative text-black hover:text-emerald-500 transition"
              >
                {dict.header.nav.skills}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>

            <li className="group">
              <Link
                href={`/${lang}#projects`}
                className="relative text-black hover:text-emerald-500 transition"
              >
                {dict.header.nav.projects}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>

            <li className="group">
              <Link
                href={`/${lang}/about-me`}
                className="relative text-black hover:text-emerald-500 transition"
              >
                {dict.header.nav.about}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>

            <li className="group">
              <Link
                href={`/${lang}#contact`}
                className="relative text-black hover:text-emerald-500 transition"
              >
                {dict.header.nav.contact}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block text-black">
          <LanguageSwitcher lang={lang} />
        </div>

        <button
          className="md:hidden text-emerald-500 text-2xl"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          type="button"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} lang={lang} />
    </header>
  );
};

export default Header;
