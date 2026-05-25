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
      <div className="w-full min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-10 py-6 backdrop-blur-md overflow-x-hidden">
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