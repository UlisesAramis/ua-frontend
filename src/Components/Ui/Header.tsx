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
  console.log("HEADER:", dict.header);

  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link href={`/${lang}`}>
          <div className="flex items-center gap-1 cursor-pointer">
            <h1 className="text-emerald-500 font-bold text-2xl">
              <span className="text-white">U</span>A
            </h1>
            <p className="font-bold text-2xl">|</p>
            <p className="font-bold text-sm md:text-base">{dict.header.role}</p>
          </div>
        </Link>

        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm font-medium text-white">
            <li className="group">
              <Link
                href={`/${lang}`}
                className="relative text-gray-300 hover:text-emerald-500 transition"
              >
                {dict.header.nav.skills}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>

            <li className="group">
              <Link
                href={`/${lang}`}
                className="relative text-gray-300 hover:text-emerald-500 transition"
              >
                {dict.header.nav.projects}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>

            <li className="group">
              <Link
                href={`/${lang}`}
                className="relative text-gray-300 hover:text-emerald-500 transition"
              >
                {dict.header.nav.about}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>

            <li className="group">
              <Link
                href={`/${lang}`}
                className="relative text-gray-300 hover:text-emerald-500 transition"
              >
                {dict.header.nav.contact}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-500 transition-all group-hover:w-full"></span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden md:block">
          <LanguageSwitcher lang={lang} />
        </div>

        <button
          className="md:hidden text-emerald-500"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          type="button"
        >
          <GiHamburgerMenu />
        </button>
      </div>

      <MobileNav open={open} onClose={() => setOpen(false)} />
    </header>
  );
};

export default Header;
