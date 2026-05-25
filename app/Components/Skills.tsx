'use client';

import React, { useEffect, useRef, useState } from 'react'
import Techskill from './Techskill'
import Techstack from './Techstack'

const Skills = () => {
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
      id="myskills"
      ref={targetRef}
      className={`
        flex flex-col items-center py-12 px-6
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
        className="relative w-fit text-center text-4xl text-[#111D4A] tracking-[2px] mb-10
        after:content-['']
        after:absolute
        after:left-0
        after:bottom-[-5px]
        after:w-full
        after:h-[3px]
        after:bg-[#FFCF99]"
      >
        My Skills
      </h1>

      {/* Main Container */}
      <div
        className={`
          flex flex-col lg:flex-row gap-10 w-full max-w-7xl
          transition-all duration-1000 delay-200
          ${
            isVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
          }
        `}
      >
        {/* Left Side */}
        <div
          className={`
            flex-1 transition-all duration-1000 delay-300
            ${
              isVisible
                ? 'opacity-100 -translate-x-0'
                : 'opacity-0 -translate-x-10'
            }
          `}
        >
          <Techskill />
        </div>

        {/* Right Side */}
        <div
          className={`
            flex-1 transition-all duration-1000 delay-500
            ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-10'
            }
          `}
        >
          <Techstack />
        </div>
      </div>
    </section>
  )
}

export default Skills