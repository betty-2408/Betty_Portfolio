'use client'
import React from 'react'
import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import { SiGmail } from 'react-icons/si'

const Contact = () => {
  return (
    <section id='contactme' className='flex flex-col items-center my-[30px]'>
      <h1 className='relative text-[#111D4A] text-[2rem] tracking-[2px]
        after:absolute
        after:content=[""]
        after:left-0
        after:bottom-0
        after:w-full
        after:h-[3px]
        after:bg-[#FFCF99]
      '>
        Contact Me
      </h1>
      <p className='my-[20px]'>Got an idea, opportunity, or just want to say hi? My inbox is always open.</p>
      <div className="flex justify-center items-start gap-5 my-[20px]  h-[60vh] w-full">
        <Link 
          href='mailto:bettykiguha@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className="p-4 rounded-2xl bg-red-50 hover:bg-red-100 transition cursor-pointer">
            <SiGmail className="text-[#EA4335] text-3xl" />
          </div>
        </Link>
        <Link
          href='https://wa.me/255679957702'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className="p-4 rounded-2xl bg-green-50 hover:bg-green-100 transition cursor-pointer">
            <FaWhatsapp className="text-[#25D366] text-3xl" />
          </div>
        </Link>
        <Link
          href='https://www.linkedin.com/in/betty-wilson-b34410329'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className="p-4 rounded-2xl bg-blue-50 hover:bg-blue-100 transition cursor-pointer">
            <FaLinkedin className="text-[#0A66C2] text-3xl" />
          </div>
        </Link>
        <Link
          href='https://www.instagram.com/pixeldreamer2408?igsh=MXRzdzl4d3E4cjNzbg%3D%3D&utm_source=qr'
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className="p-2 rounded-xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 cursor-pointer">
            <FaInstagram className="text-white text-[32px]" />
          </div>
        </Link>
      </div>
    </section>
  )
}

export default Contact