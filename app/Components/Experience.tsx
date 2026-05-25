'use client';

import React, { useEffect, useRef, useState } from 'react'
import {
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaArrowRight,
} from 'react-icons/fa'

const experience = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "WIKICHA Dev Real Estate Agency",
    period: "2025 - Present",
    description:
      "Worked on building modern, responsive, and user-friendly interfaces for a real estate platform. Focused on clean UI implementation, responsiveness, and improving user experience across devices.",
    responsibilities: [
      "Built responsive property listing interfaces",
      "Improved website UI / UX consistency",
      "Developed reusable frontend components",
      "Optimized layouts for mobile and desktop",
    ],
  },
]

const Experience = () => {
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
      id="experience"
      ref={targetRef}
      className={`
        flex flex-col items-center py-20 px-6 bg-[#F9FAFC]
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
        className="relative w-fit text-center text-4xl text-[#111D4A] tracking-[2px] mb-6
        after:content-['']
        after:absolute
        after:left-0
        after:bottom-[-6px]
        after:w-full
        after:h-[4px]
        after:bg-[#FFCF99]"
      >
        Work Experience
      </h1>

      {/* Intro */}
      <p className="max-w-3xl text-center text-gray-600 leading-8 mb-16">
        Real-world experience matters. Here’s where I’ve applied my frontend
        development skills to build responsive and modern web experiences.
      </p>

      {/* Experience Card */}
      <div className="w-full max-w-5xl">
        {experience.map((job) => (
          <div
            key={job.id}
            className="relative overflow-hidden rounded-3xl
            bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            hover:shadow-[0_14px_35px_rgba(0,0,0,0.12)]
            hover:-translate-y-2
            transition duration-500"
          >
            {/* Top Gradient Line */}
            <div className="h-2 bg-gradient-to-r from-[#111D4A] to-[#FFCF99]" />

            <div className="p-8">
              
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
                
                {/* Left Side */}
                <div className="flex items-start gap-5">
                  <div
                    className="w-16 h-16 rounded-2xl
                    bg-[#111D4A]
                    flex items-center justify-center
                    shadow-lg"
                  >
                    <FaBriefcase className="text-2xl text-[#FFCF99]" />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-[#111D4A]">
                      {job.role}
                    </h2>

                    <p className="text-lg text-gray-600 mt-1">
                      {job.company}
                    </p>
                  </div>
                </div>

                {/* Period */}
                <div
                  className="bg-[#FFCF99]/30 text-[#111D4A]
                  px-5 py-3 rounded-xl w-fit font-medium"
                >
                  {job.period}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-8 mb-10">
                {job.description}
              </p>

              {/* Contributions */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <FaLaptopCode className="text-[#111D4A]" />

                  <h3 className="text-xl font-semibold text-[#111D4A]">
                    Key Contributions
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {job.responsibilities.map((task, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4
                      bg-gray-50 rounded-2xl p-5
                      hover:-translate-y-1
                      hover:bg-[#111D4A]
                      group
                      transition duration-300"
                    >
                      {/* Icon */}
                      <div
                        className="min-w-[40px] h-[40px]
                        rounded-full bg-[#111D4A]
                        group-hover:bg-[#FFCF99]
                        flex items-center justify-center
                        transition duration-300"
                      >
                        <FaArrowRight
                          className="text-sm text-[#FFCF99]
                          group-hover:text-[#111D4A]
                          transition duration-300"
                        />
                      </div>

                      {/* Text */}
                      <p
                        className="text-gray-700 leading-7
                        group-hover:text-white
                        transition duration-300"
                      >
                        {task}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-4 mt-10">
                {[
                  "React",
                  "Next.js",
                  "Tailwind CSS",
                  "Responsive Design",
                  "UI / UX",
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2
                    px-4 py-2 rounded-full
                    bg-[#111D4A] text-white text-sm
                    hover:scale-105
                    transition duration-300"
                  >
                    <FaCode className="text-[#FFCF99]" />
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience