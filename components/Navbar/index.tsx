import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { IoLanguageOutline } from "react-icons/io5"
import LanguageChanger from "../LanguageChanger"

const links = [
  { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/in/ierickoh" },
  { icon: <FaGithub />, url: "https://github.com/iEricKoh" },
]

export const Navbar = () => {
  return (
    <header className="antialiased bg-white dark:bg-slate-900 top-0 w-full">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800">
            {/* Eric Koh */}
          </a>
          <div className="flex items-center space-x-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-teal-400 transition-all text-2xl"
              >
                {link.icon}
              </a>
            ))}
            {/* <a */}
            {/*   href="#" */}
            {/*   className="bg-blue-600 text-white px-4 py-2 rounded-md" */}
            {/* > */}
            {/*   Sign Up */}
            {/* </a> */}
            <ThemeSwitcher />
            <LanguageChanger />
          </div>
        </div>
      </nav>
    </header>
  )
}
