import React, { useRef, useState, useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [darkMode, setDarkMode] = useState(() => {
    // Persist user preference
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const scrollToSection = (ref) => {
    if (ref.current) {
      const yOffset = -50; // header offset
      const y =
        ref.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen transition-colors duration-300">
        {/* Header */}
        <Header
          scrollToSection={scrollToSection}
          refs={{ homeRef, aboutRef, projectsRef, contactRef }}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Sections */}
       <Home ref={homeRef} scrollToSection={scrollToSection} projectsRef={projectsRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <Contact ref={contactRef} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
