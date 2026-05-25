import React from 'react'

const techSkills = [
  { id: 1, skill: "UI / UX" },
  { id: 2, skill: "Responsive Web Design" },
  { id: 3, skill: "Performance Optimization" },
  { id: 4, skill: "Version Control" },
  { id: 5, skill: "Testing & Debugging" },
]

const Techskill = () => {
  return (
    <div>
    <div className="flex-1 bg-gray-100 rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-semibold text-[#111D4A] mb-6">
            Professional Skills
          </h2>

          <div className="space-y-4">
            {techSkills.map((techskill) => (
              <div
                key={techskill.id}
                className="bg-white shadow-md rounded-xl p-4"
              >
                <p className="text-[#111D4A] text-lg">
                  {techskill.skill}
                </p>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Techskill