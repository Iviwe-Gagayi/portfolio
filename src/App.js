import React, { useRef } from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer"

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

const scrollToSection = (ref) => {
  if (ref.current) {
    const yOffset = -50; // adjust this to your header height
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

  return (
    <div>
      {/* Pass refs and scroll function to Header */}
      <Header
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, projectsRef, contactRef }}
      />

      {/* Sections */}
      <Home ref={homeRef} />
      <About ref={aboutRef} />
      <Projects ref={projectsRef} />
      <Contact ref={contactRef} />
      <Footer/>
    </div>
  );
}

export default App;