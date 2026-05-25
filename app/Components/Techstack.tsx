import React from 'react'
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss } from 'react-icons/si'

const techStack = [
  { id: 1, icon: FaHtml5, name: "HTML5", textColor: "#E34F26" },
  { id: 2, icon: FaCss3Alt, name: "CSS3", textColor: "#1572B6" },
  { id: 3, icon: SiTailwindcss, name: "Tailwind CSS", textColor: "#06B6D4" },
  { id: 4, icon: FaJs, name: "JavaScript", textColor: "#F7DF1E" },
  { id: 5, icon: FaReact, name: "React JS", textColor: "#61DAFB" },
  { id: 6, icon: SiNextdotjs, name: "Next JS", textColor: "#000000" },
]

const Techstack = () => {
  return (
    <div>
        <h2 className="text-2xl font-semibold text-[#111D4A] bg-[#FFCF99] inline-block px-4 py-2 rounded-lg mb-6">
            My Tech Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {techStack.map((stack) => {
              const Icon = stack.icon

              return (
                <div
                  key={stack.id}
                  className="flex flex-col items-center justify-center h-[180px] rounded-2xl bg-white shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:scale-105 transition duration-300"
                >
                  <Icon
                    className="text-6xl mb-4"
                    style={{ color: stack.textColor }}
                  />

                  <p className="text-lg font-medium text-[#111D4A]">
                    {stack.name}
                  </p>
                </div>
              )
            })}
          </div>
    </div>
  )
}

export default Techstack