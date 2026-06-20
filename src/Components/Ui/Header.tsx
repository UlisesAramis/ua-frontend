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

const navLinkClass =
  "relative text-gray-700 hover:text-emerald-500 transition-colors duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:content-[''] after:bg-emerald-500 after:transition-all after:duration-300 hover:after:w-full";

const mobileButtonClass =
  "md:hidden text-emerald-500 text-2xl transition-all duration-300 hover:scale-110 hover:rotate-12 cursor-pointer";

const Header: React.FC<Props> = ({ dict, lang }) => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: dict.header.nav.skills,
      href: `/${lang}#skills`,
    },
    {
      label: dict.header.nav.projects,
      href: `/${lang}#projects`,
    },
    {
      label: dict.header.nav.about,
      href: `/${lang}/about-me`,
    },
    // {
    //   label: dict.header.nav.contact,
    //   href: `/${lang}#contact`,
    // },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-emerald-500/10 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link href={`/${lang}`} className="group flex items-center gap-2">
            <h1 className="text-2xl font-bold transition-transform duration-300 group-hover:scale-110">
              <span className="text-black">U</span>
              <span className="text-emerald-500">A</span>
            </h1>

            <span className="text-gray-700">|</span>

            <p className="hidden text-sm font-medium text-gray-700 transition-colors duration-300 group-hover:text-black sm:block md:text-base">
              {dict.header.role}
            </p>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={navLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <LanguageSwitcher lang={lang} />
          </div>

          <button
            onClick={() => setOpen(true)}
            className={mobileButtonClass}
            aria-label="Open menu"
            type="button"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </header>

      <MobileNav open={open} onClose={() => setOpen(false)} lang={lang} />
    </>
  );
};

export default Header;
