'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Dancing_Script } from 'next/font/google'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing',
})

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('aboutme')
  const [menuOpen, setMenuOpen] = useState(false)

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
    <header
      className="
      fixed top-0 left-0
      w-full
      h-[80px]
      bg-white/90
      backdrop-blur-md
      border-b border-gray-200
      z-50
      shadow-sm
      "
    >
      <div
        className="
        max-w-7xl mx-auto
        h-full
        flex items-center justify-between
        px-4 sm:px-6 lg:px-10
        "
      >
        {/* LOGO */}
        <h1
          className={`
            text-3xl sm:text-4xl
            font-bold
            text-[#FAA23E]
            ${dancingScript.className}
          `}
        >
          Betty
        </h1>

        {/* DESKTOP NAV */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-3 lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={`#${link.id}`}
                  className={`
                    px-4 py-2 rounded-xl
                    font-medium text-sm lg:text-base
                    transition-all duration-300
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

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
          md:hidden
          text-[#FAA23E]
          text-3xl
          transition duration-300
          "
        >
          {menuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`
          md:hidden
          absolute top-[80px] left-0
          w-full
          bg-white
          border-b border-gray-200
          shadow-md
          transition-all duration-300 overflow-hidden
          ${
            menuOpen
              ? 'max-h-[400px] opacity-100'
              : 'max-h-0 opacity-0'
          }
        `}
      >
        <ul className="flex flex-col items-center py-6 gap-4">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                onClick={() => setMenuOpen(false)}
                className={`
                  block px-6 py-3 rounded-xl
                  font-medium transition duration-300
                  ${
                    activeSection === link.id
                      ? 'bg-[#FAA23E] text-white'
                      : 'text-[#FAA23E] hover:bg-gray-100'
                  }
                `}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar