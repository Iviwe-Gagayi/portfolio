import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import LavaBlobs from './LavaBlobs'; 

function Home() {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen bg-white gap-5 overflow-hidden">
      <LavaBlobs count={6} />

      <h1 className="text-7xl font-bold relative z-10">
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
          Iviwe
        </span>
      </h1>

      <div className="relative z-10 text-center">
        <h2 className="text-2xl font-bold text-black">
          Full-stack developer building web applications with React,
        </h2>
        <h3 className="text-2xl font-bold text-black">
          Node.js, and modern technologies.
        </h3>
      </div>

      <div className="flex gap-4 relative z-10">
        <button className="font-semibold bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-md px-6 py-3">
          View My Work
        </button>
        <button className="font-semibold shadow-md bg-gray-50 text-black rounded-md px-6 py-3">
          Get In Touch
        </button>
      </div>

      <div className="flex gap-4 relative z-10">
        <a href="https://github.com/Iviwe-Gagayi" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-6 w-6 text-gray-700 hover:text-orange-500 transition-colors duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/iviwe-gagayi-0309a5252/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="h-6 w-6 text-gray-700 hover:text-orange-500 transition-colors duration-300" />
        </a>
        <a href="mailto:iviwegag@gmail.com">
          <HiOutlineMail className="h-6 w-6 text-gray-700 hover:text-orange-500 transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
}

export default Home;
