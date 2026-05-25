'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Dancing_Script } from 'next/font/google'


const dancingScript = Dancing_Script ({
  subsets: ['latin'],
  variable: '--font-dancing'
})
  


const Navbar = () => {
  const [activeSection, setActiveSection] = useState('aboutme')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        threshold: 0.4,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  const navLinks = [
    { id: 'aboutme', label: 'About Me' },
    { id: 'myskills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contactme', label: 'Contact Me' },
  ]

  return (
    <header className="fixed top-0 left-0 w-full h-[10vh] bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-8">
        
        {/* Logo */}
        <h1 className={`text-3xl font-bold text-[#FAA23E] ${dancingScript.className} `}>
          Portfolio
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  className={`
                    px-4 py-2 rounded-lg font-medium transition-all duration-300
                    ${
                      activeSection === link.id
                        ? 'bg-[#FAA23E] text-white shadow-md'
                        : 'text-[#FAA23E] hover:bg-gray-100'
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
      </div>
    </header>
  )
}

export default Navbar
