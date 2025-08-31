import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function Header({ scrollToSection, refs, darkMode, setDarkMode }) {
  return (
    <nav className="bg-white/80 dark:bg-dark1 backdrop-blur-md p-4 fixed w-full top-0 z-50 transition-colors duration-300">
      <div className="w-full flex justify-between items-center">
        <button
          onClick={() => scrollToSection(refs.homeRef)}
          className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-2xl font-bold px-2"
        >
          Portfolio
        </button>

        {/* Navigation */}
        <div className="flex items-center gap-4 hidden md:flex">
          <button
            onClick={() => scrollToSection(refs.homeRef)}
            className="px-2 py-2 text-gray-700 dark:text-white hover:text-orange-500 dark:hover:text-orange-500 transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(refs.aboutRef)}
            className="px-2 py-2 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(refs.projectsRef)}
            className="px-2 py-2 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection(refs.contactRef)}
            className="px-2 py-2 text-gray-700 dark:text-gray-200 hover:text-orange-500 dark:hover:text-orange-400 transition duration-300"
          >
            Contact
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-1"
          >
            {darkMode ? (
              <MoonIcon className="h-6 w-6 text-gray-700 dark:text-gray-200 dark:hover:text-orange-500 transition-colors duration-300" />
            
            ) : (
               <SunIcon className="h-6 w-6 text-orange-500 hover:text-orange-700 transition-colors duration-300" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
