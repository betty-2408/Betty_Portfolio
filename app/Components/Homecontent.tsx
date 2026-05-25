'use client';
import React, { useState } from 'react'
import FloatingCircles from './FloatingCircles'


const Homecontent = () => {
  const [openWork, setOpenWork] = useState(false);

  const handleButton = () => {
    setOpenWork(prev => openWork)
  }


  return (
    <div className="flex mt-[2vh] h-[80vh] w-[90vw] bg-[#111D4A] backdrop-blur-md border-solid border-[#FFCF99] border-[1px] rounded-[35px] shadow-[0_4px_25px_rgba(0,0,0,0.4)]" >
      <div className="flex flex-col items-start pt-[10vh] pl-[10vw] ">
        <h3 className='text-left text-[1.8rem] text-[#FFCF99]'>Hello,</h3>
        <h2 className='text-left text-[2.4rem] text-[#FFCF99]'>I'm Betty Wilson</h2>
        <h1 className='text-left text-[2rem] text-[#FFCF99]'>Frontend Web Developer</h1>
        <a 
          href="#experience"
          className='z-10'
        >
          <button
            className='mt-[12vh] px-[25px] py-[8px] bg-[#FFCF99] rounded-2xl text-[#111D4A] cursor-pointer border-solid border-[2px] border-transparent
            hover:border-[#FFCF99] hover:bg-gray-100 hover:text-[#111D4A] z-10'
          >
            See My Work
          </button>
        </a>
      </div>
      <FloatingCircles />
    </div>
  )
}

export default Homecontent