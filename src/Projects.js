import React from "react";
import { FaGithub } from "react-icons/fa";

const projectData = [
  {
    title: "Task Manager App",
    description: "A fullstack app to manage tasks with authentication and CRUD features.",
    tech: ["React", "Node.js", "MongoDB", "JWT"],
    image: "/images/task-manager.png",
    live: "https://your-task-manager-demo.com",
    github: "https://github.com/yourusername/task-manager"
  },
  {
    title: "Firebase Chat App",
    description: "Real-time chat application using Firebase Auth and Firestore.",
    tech: ["React", "Firebase", "Tailwind CSS"],
    image: "/images/firebase-chat.png",
    live: "https://your-chat-app-demo.com",
    github: "https://github.com/yourusername/firebase-chat"
  },
  {
    title: "Data Dashboard",
    description: "Dashboard displaying charts and tables with interactive filtering.",
    tech: ["React", "Chart.js", "FastAPI", "PostgreSQL"],
    image: "/images/data-dashboard.png",
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

      {/* Subtitle */}
      <div className="text-center">
        <h2 className="text-black text-xl font-bold">
          Projects built using React, Node.js, Python
        </h2>
        <h3 className="text-black text-xl font-bold">
          and other technologies I work with.
        </h3>
      </div>

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
                  className="flex-1 text-center font-bold py-2 px-4 rounded bg-gradient-to-r from-orange-400 to-red-500 text-white hover:from-red-500 hover:to-orange-400 transition-colors"
                >
                  Live Demo
                </a>

                {/* GitHub - small square grey */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-gray-800 text-white rounded transition-colors hover:bg-gray-900"
                >
                  <FaGithub/>
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
