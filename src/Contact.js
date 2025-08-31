import { EnvelopeIcon, PhoneIcon, MapPinIcon, LinkIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import  { forwardRef } from "react";



const Contact = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full flex flex-col items-center justify-center bg-orange-500/5 p-8 gap-8 dark:bg-dark1 duration-300">
      {/* Title */}
      <h1 className="text-black text-6xl font-bold text-center dark:text-white">
        Let's{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
          Connect
        </span>
      </h1>

      {/* Container for both blocks */}
      <div className="flex flex-col md:flex-row w-full max-w-5xl gap-6 justify-center pb-10">

        {/* Contact Block */}
        <div   className="
    flex flex-col w-full md:w-1/2 rounded-xl p-8 gap-6
    border-2 border-transparent shadow-md transition-transform transform
    hover:scale-105 hover:shadow-xl
    bg-white dark:bg-dark1
    [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,red,orange)_border-box]
    dark:[background:linear-gradient(theme(colors.dark3),theme(colors.dark3))_padding-box,linear-gradient(to_right,red,orange)_border-box]
  ">

          {/* Email */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-orange-500 font-bold text-lg">
              <EnvelopeIcon className="w-6 h-6" />
              <span>Email</span>
            </div>
            <a href="mailto:iviwegag@gmail.com" className="text-gray-700 font-medium ml-8 dark:text-white">
              iviwegag@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-orange-500 font-bold text-lg">
              <PhoneIcon className="w-6 h-6" />
              <span>Phone</span>
            </div>
            <a href="tel:+27725802688" className="text-gray-700 font-medium ml-8 dark:text-white">
              +27 72 580 2688
            </a>
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-orange-500 font-bold text-lg">
              <MapPinIcon className="w-6 h-6" />
              <span>Location</span>
            </div>
            <p className="text-gray-700 font-medium ml-8 dark:text-white">
              Cape Town, South Africa</p>
          </div>

        </div>

        {/* Follow Me Block*/}
        <div   className="
    flex flex-col w-full md:w-1/2 rounded-xl p-8 gap-6
    border-2 border-transparent shadow-md transition-transform transform
    hover:scale-105 hover:shadow-xl
    bg-white dark:bg-dark1
    [background:linear-gradient(white,white)_padding-box,linear-gradient(to_right,orange,red)_border-box]
    dark:[background:linear-gradient(theme(colors.dark3),theme(colors.dark3))_padding-box,linear-gradient(to_right,orange,red)_border-box]
  ">

          {/* LinkedIn */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-orange-500 font-bold text-lg">
              <LinkIcon className="w-6 h-6" />
              <span>LinkedIn</span>
            </div>
            <a href="https://www.linkedin.com/in/iviwe-gagayi-0309a5252/" target="_blank" rel="noopener noreferrer" className="text-gray-700 font-medium ml-8 dark:text-white">
              linkedin.com/Iviwe Gagayi
            </a>
          </div>

          {/* GitHub */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-orange-500 font-bold text-lg">
              <CodeBracketIcon className="w-6 h-6" />
              <span>GitHub</span>
            </div>
            <a href="https://github.com/Iviwe-Gagayi" target="_blank" rel="noopener noreferrer" className="text-gray-700 font-medium ml-8 dark:text-white">
              github.com/Iviwe Gagayi
            </a>
          </div>

        </div>

      </div>
    </div>
  );
});

export default Contact;
