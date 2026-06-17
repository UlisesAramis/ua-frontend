import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-20 flex flex-col justify-center items-center">
      <hr className="border-t-2 border-emerald-600 w-1/2 mx-auto" />
      <div className="w-5/6 mx-auto flex flex-col items-center pb-5">
        <p className="text-center text-gray-400 py-4">
          &copy; {new Date().getFullYear()} Ulises Aramis. All rights reserved.
        </p>

        <div className="flex gap-x-7">
          <Link href="https://github.com/UlisesAramis" target="_blank">
            <FaGithub className="text-green-400 text-3xl" />
          </Link>

          <Link href="https://www.instagram.com/ua_frontend" target="_blank">
            <FaInstagram className="text-green-400 text-3xl" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
