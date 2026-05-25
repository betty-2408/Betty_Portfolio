'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

const Contact = () => {
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

  const contactLinks = [
    {
      id: 1,
      href: 'mailto:bettykiguha@gmail.com',
      icon: SiGmail,
      bg: 'bg-red-50',
      hover: 'hover:bg-red-100',
      color: '#EA4335',
      label: 'Email',
    },
    {
      id: 2,
      href: 'https://wa.me/255679957702',
      icon: FaWhatsapp,
      bg: 'bg-green-50',
      hover: 'hover:bg-green-100',
      color: '#25D366',
      label: 'WhatsApp',
    },
    {
      id: 3,
      href: 'https://www.linkedin.com/in/betty-wilson-b34410329',
      icon: FaLinkedin,
      bg: 'bg-blue-50',
      hover: 'hover:bg-blue-100',
      color: '#0A66C2',
      label: 'LinkedIn',
    },
    {
      id: 4,
      href: 'https://www.instagram.com/pixeldreamer2408',
      icon: FaInstagram,
      bg: 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600',
      hover: '',
      color: '#FFFFFF',
      label: 'Instagram',
    },
  ]

  return (
    <section
      id="contactme"
      ref={targetRef}
      className={`
        flex flex-col items-center
        py-20 px-6
        bg-white
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
        className="
        relative
        text-[#111D4A]
        text-4xl
        tracking-[2px]
        mb-6
        after:absolute
        after:content-['']
        after:left-0
        after:bottom-[-6px]
        after:w-full
        after:h-[4px]
        after:bg-[#FFCF99]
        "
      >
        Contact Me
      </h1>

      {/* Text */}
      <p
        className="
        text-center
        text-gray-600
        leading-8
        max-w-2xl
        mb-14
        text-[1rem] sm:text-[1.05rem]
        "
      >
        Got an idea, opportunity, or just want to say hi?
        My inbox is always open.
      </p>

      {/* Contact Cards */}
      <div
        className="
        grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4
        gap-6
        w-full max-w-2xl
        "
      >
        {contactLinks.map((item, index) => {
          const Icon = item.icon

          return (
            <Link
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                transition-all duration-700
                ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }
              `}
              style={{
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <div
                className={`
                  flex flex-col items-center justify-center
                  h-[170px]
                  rounded-3xl
                  ${item.bg}
                  ${item.hover}
                  shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                  hover:-translate-y-2
                  hover:shadow-[0_12px_28px_rgba(0,0,0,0.12)]
                  transition duration-300
                  cursor-pointer
                `}
              >
                {/* Icon */}
                <Icon
                  className="text-5xl mb-4"
                  style={{ color: item.color }}
                />

                {/* Label */}
                <p className="font-medium text-[#111D4A]">
                  {item.label}
                </p>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Bottom Line */}
      <p className="text-gray-400 text-sm mt-16 text-center">
        Built with React, Next.js & Tailwind CSS.
      </p>
    </section>
  )
}

export default Contact