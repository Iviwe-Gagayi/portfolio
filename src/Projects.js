import React from "react";
import { FaGithub } from "react-icons/fa";

const projectData = [
  {
    title: "Task Manager App",
    description: "A fullstack app to manage tasks with authentication and CRUD features.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    image: "/images/coming_soon.jpeg",
    live: "https://your-task-manager-demo.com",
    github: "https://github.com/yourusername/task-manager"
  },
  {
    title: "Firebase Chat App",
    description: "Real-time chat application using Firebase Auth and Firestore.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: "/images/coming_soon.jpeg",
    live: "https://your-chat-app-demo.com",
    github: "https://github.com/yourusername/firebase-chat"
  },
  {
    title: "Data Dashboard",
    description: "Dashboard displaying charts and tables with interactive filtering.",
    tech: ["React", "Chart.js", "FastAPI", "PostgreSQL"],
    image: "/images/coming_soon.jpeg",
    live: "https://your-dashboard-demo.com",
    github: "https://github.com/yourusername/data-dashboard"
  }
];

function Projects() {
  return (
    <div className="w-full bg-white flex flex-col justify-center py-10 gap-10">
      {/* Title */}
      <h1 className="text-black text-6xl font-bold text-center">
        Featured{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
          Projects
        </span>
      </h1>



      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20">
        {projectData.map((project) => (
          <div
            key={project.title}
            className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex flex-col gap-4">
              <h3 className="text-2xl font-bold text-black">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-orange-600 font-bold text-sm bg-orange-100 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                {/* Live Demo - rectangular gradient */}
               <a
  href={project.live}
  target="_blank"
  rel="noopener noreferrer"
  className="relative flex-1 text-center font-bold py-2 px-4 rounded overflow-hidden"
>
  <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 transition-opacity duration-300 opacity-100 hover:opacity-0"></span>
  <span className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-400 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
  <span className="relative text-white">Live Demo</span>
              </a>

                {/* GitHub - small square grey */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                 
                >
                  <FaGithub  className="w-11 h-11 flex items-center justify-center bg-white text-gray-800 rounded transition-colors hover:text-gray-900 duration-300"/>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
