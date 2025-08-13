import React from 'react';

function Home() {
  return (
    <div className="flex  flex-col items-center justify-center h-screen bg-white gab-4">
     <h1 className="text-7xl font-bold">
    Hi, I'm{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
      Iviwe
    </span>
  </h1>
       <h2 className="text-2xl font-bold black">
       Full-stack developer building web applications with React,
      </h2>
        <h3 className="text-2xl font-bold black">
        Node.js, and modern technologies.
      </h3>
    </div>
  );
}

export default Home;
