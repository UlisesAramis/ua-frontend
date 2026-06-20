"use client";

import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";

type MobileNavProps = {
  open: boolean;
  lang: "es" | "en";
  onClose: () => void;
};

const MobileNav: React.FC<MobileNavProps> = ({ lang, open, onClose }) => {
  const navLinks = [
    {
      href: `/${lang}#skills`,
      label: lang === "es" ? "Habilidades" : "Skills",
    },
    {
      href: `/${lang}#projects`,
      label: lang === "es" ? "Proyectos" : "Projects",
    },
    {
      href: `/${lang}/about-me`,
      label: lang === "es" ? "Sobre mí" : "About me",
    },
    { href: `/${lang}#contact`, label: lang === "es" ? "Contacto" : "Contact" },
  ];

  return (
    <div
      className={`fixed inset-0 bg-black z-50 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full hidden"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-500">
        <h1 className="text-emerald-500 font-bold text-2xl">
          <span className="text-white">U</span>A
        </h1>

        <button
          className="text-emerald-500 cursor-pointer"
          onClick={onClose}
          aria-label="Close menu"
          type="button"
        >
          <IoCloseSharp size={24} />
        </button>
      </div>

      <nav className="w-full flex justify-center items-center mt-10">
        <ul className="flex flex-col gap-6 font-medium text-white text-xl text-center">
          {navLinks.map(({ href, label }, index) => (
            <li key={index} className="group">
              <Link
                href={href}
                onClick={onClose}
                className="relative text-gray-300 transition-colors duration-300 hover:text-emerald-500"
              >
                {label}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
