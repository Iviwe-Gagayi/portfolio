import React from 'react';
import { TfiServer } from "react-icons/tfi";
import { IoCodeSharp } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import  { forwardRef } from "react";



const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full flex flex-col items-center justify-center bg-orange-50 gap-5 overflow-hidden p-8 ">

      {/* Title */}
      <h1 className="text-black text-6xl font-bold text-center">
        About{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
          Me
        </span>
      </h1>

      {/* Subtitle */}
      <div className="text-center">
        <h2 className="text-black text-xl font-bold">
          Full-stack developer with 3+ years of experience building scalable web
        </h2>
        <h3 className="text-black text-xl font-bold">
          applications using modern technologies and frameworks.
        </h3>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-1">

        {/* Frontend */}
        <div
          className="flex flex-col w-100 h-auto bg-white rounded-xl p-8 items-center gap-4 
          border-2 border-transparent shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
          style={{
            background:
              "linear-gradient(white, white) padding-box, linear-gradient(to right, red, orange) border-box",
          }}
        >
          <CiGlobe className="h-12 w-12 text-orange-400" />
          <h2 className="font-bold text-black text-2xl text-center">
            Frontend Development
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {["React", "Next.js",  "Bootstrap", "Charts.js", "D3", "Recharts","Tailwind CSS"].map((tech) => (
              <h4
                key={tech}
                className="flex items-center justify-center 
                           text-orange-600 font-bold text-sm md:text-lg 
                           bg-orange-100 px-4 py-2 rounded-xl text-center leading-normal"
              >
                {tech}
              </h4>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div
          className="flex flex-col w-100 h-auto bg-white rounded-xl p-8 items-center gap-4 
          border-2 border-transparent shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
          style={{
            background:
              "linear-gradient(white, white) padding-box, linear-gradient(to right, orange, orange) border-box",
          }}
        >
          <TfiServer className="h-12 w-12 text-orange-400" />
          <h2 className="font-bold text-black text-2xl text-center">
            Backend Development
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {["Node.js", "Python", "MongoDB", "Firebase", "PostgreSQL", "Recharts", "Flask", "FastAPI"].map((tech) => (
              <h4
                key={tech}
                className="flex items-center justify-center 
                           text-orange-600 font-bold text-sm md:text-lg 
                           bg-orange-100 px-4 py-2 rounded-xl text-center leading-normal"
              >
                {tech}
              </h4>
            ))}
          </div>
        </div>

        {/* DevOps & Tools */}
        <div
          className="flex flex-col w-100 h-auto bg-white rounded-xl p-8 items-center gap-4 
          border-2 border-transparent shadow-md transition-transform transform hover:scale-105 hover:shadow-xl"
          style={{
            background:
              "linear-gradient(white, white) padding-box, linear-gradient(to right, orange, red) border-box",
          }}
        >
          <IoCodeSharp className="h-12 w-12 text-orange-400" />
          <h2 className="font-bold text-black text-2xl text-center">
            DevOps & Tools
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {["Docker", "Git", "AWS", "Heroku", "Firebase","Vercel"].map((tech) => (
              <h4
                key={tech}
                className="flex items-center justify-center 
                           text-orange-600 font-bold text-sm md:text-lg 
                           bg-orange-100 px-4 py-2 rounded-xl text-center leading-normal"
              >
                {tech}
              </h4>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
