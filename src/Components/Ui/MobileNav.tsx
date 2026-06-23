"use client";

import { useEffect } from "react"; // 1. Importamos useEffect
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";

type MobileNavProps = {
  open: boolean;
  lang: "es" | "en";
  onClose: () => void;
};

const MobileNav: React.FC<MobileNavProps> = ({ lang, open, onClose }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

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
    // {
    //   href: `/${lang}#contact`,
    //   label: lang === "es" ? "Contacto" : "Contact",
    // },
  ];

  return (
    <div className="fixed inset-0 h-screen w-screen bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-20 z-50">
      <div className="bg-white/80  rounded-xl shadow-lg p-6 w-11/12 max-w-xs relative text-center">
        <button
          className="absolute top-4 right-4 text-emerald-500 cursor-pointer"
          onClick={onClose}
          aria-label="Close menu"
          type="button"
        >
          <IoCloseSharp size={24} />
        </button>

        <div className="mb-4">
          <h1 className="text-emerald-500 font-bold text-2xl">
            <span className="text-slate-800">U</span>A
          </h1>
        </div>

        <nav className="space-y-4 pt-2">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="block text-slate-700 text-xl font-medium hover:text-emerald-500 transition-colors duration-200"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
