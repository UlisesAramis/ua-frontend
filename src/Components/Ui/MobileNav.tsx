"use client";

import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
};

const MobileNav: React.FC<MobileNavProps> = ({ open, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black z-50 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-emerald-500">
        <h1 className="text-emerald-500 font-bold text-2xl">
          <span className="text-white">U</span>A
        </h1>

        {/* Close button */}
        <button
          className="text-emerald-500"
          onClick={onClose}
          aria-label="Close menu"
          type="button"
        >
          <IoCloseSharp />
        </button>
      </div>

      {/* Navigation */}
      <nav className="w-full flex justify-center items-center mt-10">
        <ul className="flex flex-col gap-4  font-medium text-white">
          <li className="group">
            <Link
              href="/"
              className="relative  text-gray-300 transition-colors duration-300 hover:text-emerald-500 "
            >
              Habilidades
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li className="group">
            <Link
              href="/"
              className="relative  text-gray-300 transition-colors duration-300 hover:text-emerald-500"
            >
              Proyectos
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li className="group">
            <Link
              href="/"
              className="relative  text-gray-300 transition-colors duration-300 hover:text-emerald-500"
            >
              Sobre mí
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>

          <li className="group">
            <Link
              href="/"
              className="relative  text-gray-300 transition-colors duration-300 hover:text-emerald-500"
            >
              Contacto
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
