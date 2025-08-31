import React, { useState } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

function Header({ scrollToSection, refs }) {
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode toggle button component
  const DarkModeToggle = () => {
    return (
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-1"
      >
        {darkMode ? (
          <MoonIcon className="h-6 w-6 text-[rgb(18,18,31)] px-1 hover:text-purple-500 transition-colors duration-300" />
        ) : (
          <SunIcon className="h-6 w-6 text-gray-700 hover:text-orange-500 transition-colors duration-300" />
        )}
      </button>
    );
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md p-4 fixed w-full top-0 z-50">
      <div className="w-full flex justify-between items-center">
        <button  onClick={() => scrollToSection(refs.homeRef)} className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 text-2xl font-bold px-2">
          Portfolio
        </button>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={() => scrollToSection(refs.homeRef)}
            className="text-gray-700 px-2 py-2 hover:text-orange-500 transition duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection(refs.aboutRef)}
            className="text-gray-700 px-2 py-2 hover:text-orange-500 transition duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection(refs.projectsRef)}
            className="text-gray-700 px-2 py-2 hover:text-orange-500 transition duration-300"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection(refs.contactRef)}
            className="text-gray-700 px-2 py-2 hover:text-orange-500 transition duration-300"
          >
            Contact
          </button>

          <DarkModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Header;
