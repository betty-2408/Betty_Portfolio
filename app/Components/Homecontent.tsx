'use client';

import React from 'react'
import FloatingCircles from './FloatingCircles'

const Homecontent = () => {
  return (
    <div
      className="
      relative flex flex-col lg:flex-row
      items-center justify-between
      mt-[2vh]
      min-h-[80vh]
      w-[92vw]
      overflow-hidden
      bg-[#111D4A]
      border border-[#FFCF99]
      rounded-[35px]
      shadow-[0_4px_25px_rgba(0,0,0,0.4)]
      px-6 sm:px-10 lg:px-16
      py-12 lg:py-0
      "
    >
      {/* LEFT CONTENT */}
      <div
        className="
        flex flex-col
        items-center lg:items-start
        text-center lg:text-left
        z-10
        max-w-2xl
        "
      >
        <h3
          className="
          text-[1.4rem] sm:text-[1.6rem] lg:text-[1.8rem]
          text-[#FFCF99]
          mb-2
          "
        >
          Hello,
        </h3>

        <h2
          className="
          text-[1.6rem] sm:text-[1.5rem] lg:text-[2rem]
          font-bold
          leading-tight
          text-[#FFCF99]
          "
        >
          I'm Betty Wilson
        </h2>

        <h1
          className="
          text-[1.3rem] sm:text-[1.6rem] lg:text-[2rem]
          text-gray-200
          mt-3
          "
        >
          Frontend Web Developer
        </h1>

        <p
          className="
          text-gray-300
          leading-8
          mt-6
          max-w-xl
          text-[1rem] sm:text-[1.05rem]
          "
        >
          I build responsive, modern, and user-focused web
          applications with clean UI/UX and scalable frontend
          architecture.
        </p>

        {/* BUTTONS */}
        <div
          className="
          flex flex-col sm:flex-row
          gap-4
          mt-10
          w-full sm:w-auto
          "
        >
          <a href="#experience">
            <button
              className="
              w-full sm:w-auto
              px-8 py-3
              bg-[#FFCF99]
              rounded-2xl
              text-[#111D4A]
              font-medium
              cursor-pointer
              border-2 border-transparent
              hover:border-[#FFCF99]
              hover:bg-transparent
              hover:text-[#FFCF99]
              transition duration-300
              hover:-translate-y-1
              "
            >
              See My Work
            </button>
          </a>

          <a href="#contactme">
            <button
              className="
              w-full sm:w-auto
              px-8 py-3
              border-2 border-[#FFCF99]
              rounded-2xl
              text-[#FFCF99]
              font-medium
              cursor-pointer
              hover:bg-[#FFCF99]
              hover:text-[#111D4A]
              transition duration-300
              hover:-translate-y-1
              "
            >
              Contact Me
            </button>
          </a>
        </div>
      </div>

      {/* RIGHT SIDE VISUAL */}
      <div
        className="
        relative flex justify-center items-center
        w-full lg:w-[45%]
        h-[300px] sm:h-[400px] lg:h-full
        mt-10 lg:mt-0
        "
      >
        <FloatingCircles />
      </div>
    </div>
  )
}

export default Homecontent