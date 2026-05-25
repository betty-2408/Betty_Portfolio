'use client';

import React, { useEffect, useRef, useState } from 'react'
import {
  FaHtml5,
  FaReact,
  FaLaptopCode,
} from 'react-icons/fa'
import { SiJavascript, SiNextdotjs } from 'react-icons/si'

const journey = [
  {
    id: 1,
    year: "Started",
    title: "Learning the Basics",
    text: "Started with HTML & CSS and built simple web pages.",
    icon: FaHtml5,
    color: "#E34F26",
  },
  {
    id: 2,
    year: "Growth",
    title: "JavaScript & Interactivity",
    text: "Learned JavaScript and started creating dynamic websites.",
    icon: SiJavascript,
    color: "#F7DF1E",
  },
  {
    id: 3,
    year: "Frontend",
    title: "React Development",
    text: "Built reusable UI components and responsive applications.",
    icon: FaReact,
    color: "#61DAFB",
  },
  {
    id: 4,
    year: "Modern Stack",
    title: "Next.js & Performance",
    text: "Focused on scalable apps, optimization, and better UX.",
    icon: SiNextdotjs,
    color: "#111111",
  },
]

const Aboutme = () => {
  const targetRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.2,
      }
    )

    if (targetRef.current) {
      observer.observe(targetRef.current)
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current)
      }
    }
  }, [])

  return (
    <section
      id="aboutme"
      ref={targetRef}
      className={`
        flex flex-col items-center py-10 px-6 bg-white
        transition-all duration-1000 ease-out
        ${
          isVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-16'
        }
      `}
    >
      {/* Heading */}
      <h1
        className="relative w-fit text-center text-4xl text-[#111D4A] tracking-[2px] mb-8
        after:content-['']
        after:absolute
        after:left-0
        after:bottom-[-6px]
        after:w-full
        after:h-[4px]
        after:bg-[#FFCF99]"
      >
        About Me
      </h1>

      {/* Intro */}
      <div className="max-w-4xl mx-auto mb-16">
        <p className="text-center text-lg leading-8 text-gray-700">
          Hi again!
          <br />
          I am a self-taught frontend developer passionate
          about building responsive, accessible, and visually engaging web
          experiences using modern technologies.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 w-full max-w-7xl">
        
        {/* Journey Section */}
        <div
          className="flex-1 bg-gradient-to-br from-[#111D4A] to-[#1E2F6D]
          rounded-3xl p-8 text-white
          shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
        >
          <div className="flex items-center gap-3 mb-10">
            <FaLaptopCode className="text-3xl text-[#FFCF99]" />

            <h2 className="text-3xl font-semibold">
              My Journey
            </h2>
          </div>

          <div className="relative border-l-2 border-[#FFCF99] ml-6 space-y-10">
            {journey.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.id}
                  className="relative pl-10"
                >
                  {/* Circle */}
                  <div
                    className="absolute -left-[18px] top-1
                    w-8 h-8 rounded-full
                    flex items-center justify-center
                    bg-white shadow-lg"
                  >
                    <Icon
                      className="text-lg"
                      style={{ color: item.color }}
                    />
                  </div>

                  {/* Content */}
                  <div
                    className="bg-white/10 backdrop-blur-md
                    rounded-2xl p-5
                    hover:translate-x-2
                    hover:bg-white/20
                    transition duration-300"
                  >
                    <p className="text-sm text-[#FFCF99] mb-1">
                      {item.year}
                    </p>

                    <h3 className="text-xl font-semibold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-200 leading-7">
                      {item.text}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Skills Section */}
        <div
          className="flex-1 bg-gray-50 rounded-3xl p-8
          shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
        >
          <h2 className="text-3xl font-semibold text-[#111D4A] mb-8">
            What I Bring
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              "Responsive Design",
              "React & Next.js",
              "Clean UI / UX",
              "Performance Optimization",
              "Reusable Components",
              "Accessibility Focus",
              "Creative Problem Solving",
              "Continuous Learning",
            ].map((skill, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5
                shadow-md hover:-translate-y-1
                hover:shadow-lg
                transition duration-300"
              >
                <p className="text-[#111D4A] font-medium">
                  {skill}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Aboutme