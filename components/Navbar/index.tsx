import { ThemeSwitcher } from "@/components/ThemeSwitcher"
import { FaGithub } from "react-icons/fa"

export const Navbar = () => {
  return (
    <header className="antialiased bg-white dark:bg-slate-900 top-0 w-full">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800">
            {/* Eric Koh */}
          </a>
          <div className="flex items-center space-x-4">
            {/* <a href="#" className="text-gray-800 hover:text-blue-600"> */}
            {/*   Home */}
            {/* </a> */}
            {/* <a href="#" className="text-gray-800 hover:text-blue-600"> */}
            {/*   About */}
            {/* </a> */}
            {/* <a href="#" className="text-gray-800 hover:text-blue-600"> */}
            {/*   Services */}
            {/* </a> */}
            <a
              href="https://github.com/iEricKoh"
              target="_blank"
              className="hover:text-blue-600 text-2xl"
            >
              <FaGithub />
            </a>
            {/* <a */}
            {/*   href="#" */}
            {/*   className="bg-blue-600 text-white px-4 py-2 rounded-md" */}
            {/* > */}
            {/*   Sign Up */}
            {/* </a> */}
            <ThemeSwitcher />
          </div>
        </div>
      </nav>
    </header>
  )
}
