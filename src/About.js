import React from 'react';
import { useState } from 'react';
import { TfiServer } from "react-icons/tfi";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoCodeSharp } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { DivideIcon } from '@heroicons/react/16/solid';

function About(){
return(
<div className = 'w-full flex flex-col items-center justify-center bg-orange-50 gap-4 overflow-hidden p-8'>

<h1 className='text-black text-6xl font-bold text-center justify-center' >
    About {" "}
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
            Me
        </span>
</h1>

<div>
<h2 className='text-black text-xl font-bold text-center'>
    Full-stack developer with 3+ years of experience building scalable web
</h2>
<h3 className='text-black text-xl font-bold text-center'>
applications using modern technologies and frameworks.
</h3>
</div>
  {/* Skills squares*/}
  {/* frontend*/}
  <div className='flex flex-row gap-1 '> 
<div className='flex flex-col w-70 h-35 bg-white rounded bg-white p-8 items-center gap-1'
style={{
    border: "2px solid transparent",
    borderRadius: "7px",
    background:
      "linear-gradient(white, white) padding-box, linear-gradient(to right, red, orange) border-box",
  }}>
  <CiGlobe className="h-12 w-12 text-orange-400" />  
<h2 className='font-bold text-black text-2xl'>     
Frontend Development
</h2>

<div class="grid grid-cols-3 gap-3">
 <h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
React
</h4>
<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
Next.js
</h4>
<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
Tailwind CSS
</h4>

<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
    Bootstrap
</h4>

<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
    Charts.js
</h4>

<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
    react-router-dom
</h4>


<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
    D3
</h4>

<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
    Recharts
</h4>
</div>
</div>
 {/* backend*/}
<div className='flex flex-col w-70 h-35 bg-white rounded bg-white p-8 items-center gap-3'
style={{
    border: "2px solid transparent",
    borderRadius: "7px",
    background:
      "linear-gradient(white, white) padding-box, linear-gradient(to right, orange, orange) border-box",
  }}>
  < TfiServer className="h-12 w-12 text-orange-400" />  
<h2 className='font-bold text-black text-2xl'>     
Backend Development
</h2>

<div class="grid grid-cols-3 gap-4  ">
 <h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
Node.js
</h4>
<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
Python 
</h4>
<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
MongoDB
</h4>

<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
    FireBase Auth
</h4>

<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
    PostgreSQL
</h4>

<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
    Recharts
</h4>
</div>


</div>
 {/* DevOps & Tools*/}
<div className='flex flex-col w-70 h-35 bg-white rounded bg-white p-8 items-center gap-3'
style={{
    border: "2px solid transparent",
    borderRadius: "7px",
    background:
      "linear-gradient(white, white) padding-box, linear-gradient(to right, orange, red) border-box",
  }}>
  < TfiServer className="h-12 w-12 text-orange-400" />  
<h2 className='font-bold text-black text-2xl'>     
Backend Development
</h2>

<div class="grid grid-cols-3 gap-4  ">
 <h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
Docker
</h4>
<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
Git
</h4>
<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
AWS
</h4>

<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
Heroku
</h4>

<h4 className='text-orange-600 font-bold text-lg bg-orange-100 px-3 rounded-xl text-center'>
    Firebase
</h4>
</div>


</div>
</div>


  {/* End */}
</div>

);
}

export default About;