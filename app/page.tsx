import React from 'react'
import Navbar from './Components/Navbar'
import Homecontent from './Components/Homecontent'
import Aboutme from './Components/Aboutme'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Experience from './Components/Experience'

const page = () => {
  return (
    <div>
      <Navbar />   
      <div className='w-full h-screen flex flex-col backdrop-blur-md'>
        <div className='flex justify-center my-[10vh]'>
          <Homecontent />
        </div>
        <Aboutme />
        <Skills />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

export default page