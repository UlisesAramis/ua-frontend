import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

type SocialLink = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

const socialLinks: SocialLink[] = [
  {
    href: "https://github.com/UlisesAramis",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    href: "https://www.instagram.com/ua_frontend",
    label: "Instagram",
    icon: FaInstagram,
  },
  {
    href: "https://www.linkedin.com/in/ulises-aramis-p%C3%A9rez-zamarripa-79303631b/",
    label: "LinkedIn",
    icon: FaLinkedin,
  },
];

const Footer = () => {
  return (
    <footer className="w-full h-40 flex flex-col justify-center items-center">
      <hr className="border-t-2 border-emerald-600 w-5/6 mx-auto" />
      <div className="w-5/6 mx-auto flex flex-col items-center pb-5">
        <p className="text-center text-gray-400 py-4">
          &copy; {new Date().getFullYear()} Ulises Aramis. All rights reserved.
        </p>

        <div className="flex gap-x-7">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            return (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="transition-transform duration-300 hover:scale-110"
              >
                <Icon className="text-green-400 text-3xl" />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
