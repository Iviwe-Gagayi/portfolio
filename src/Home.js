import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import LavaBlobs from './LavaBlobs'; 
import  { forwardRef } from "react";

const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="relative flex flex-col items-center justify-center h-screen bg-white gap-5 overflow-hidden dark:bg-black duration-300">
      <LavaBlobs count={5} />

      <h1 className="text-7xl font-bold relative z-10 text-center">
        Hi, I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
          Iviwe
        </span>
      </h1>

      <div className="relative z-10 text-center ">
        <h2 className="text-2xl font-bold text-black dark:text-white duration-300">
          Full-stack developer, building web applications with React,
        </h2>
        <h3 className="text-2xl font-bold text-black dark:text-white duration-300">
          Node.js, and modern technologies.
        </h3>
      </div>

      <div className="flex gap-4 relative z-10">
        <button className="font-semibold bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-md px-6 py-3">
          View My Work
        </button>
   

      <button
  className="
    relative font-semibold shadow-md px-6 py-3 rounded-md
    border-2 border-transparent
    text-black dark:text-white
    bg-white dark:bg-black
    [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,orange,red)_border-box]
    dark:[background:linear-gradient(black,black)_padding-box,linear-gradient(to_right,orange,red)_border-box]
  "
>
  <span className="relative z-10 hover:bg-gradient-to-r hover:from-orange-400 hover:to-red-500 hover:bg-clip-text hover:text-transparent">
    Get In Touch
  </span>
</button>


      </div>

      <div className="flex gap-4 relative z-10">
        <a href="https://github.com/Iviwe-Gagayi" target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-6 w-6 text-gray-700 hover:text-orange-500 transition-colors duration-300 dark:text-white dark:hover:text-orange-500 transition-colors duration-300" />
        </a>
        <a href="https://www.linkedin.com/in/iviwe-gagayi-0309a5252/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="h-6 w-6 text-gray-700 hover:text-orange-500 transition-colors duration-300 dark:text-white dark:hover:text-orange-500 transition-colors duration-300" />
        </a>
        <a href="mailto:iviwegag@gmail.com">
          <HiOutlineMail className="h-6 w-6 text-gray-700 hover:text-orange-500 transition-colors duration-300 dark:text-white dark:hover:text-orange-500 transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
});

export default Home;
