
import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import DownloadCVButton from "./DownloadCVButton"
import ViewProjectsButton from "./ViewProjectsButton"
//mt-10 mb-30 px-25 py-30
function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center'>
        <div className="flex flex-col"> 
            <span className="font-medium text-6xl uppercase md:text-7xl xs:text-5xl">James</span>
            <span className="font-black text-[60px] uppercase leading-none md:text-[120px] xs:text-[45px]">Mullane</span>
            <p className="text-gray-700 text-lg md:text-2xl xs:text-sm">Computer Science Student at University of Auckland</p>

            <div className="flex gap-6 mt-6 text-3xl">
                <a href="https://www.linkedin.com/in/james-mullane-95a526252/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="text-blue-600"/>
                </a>
                <a href="https://github.com/Jamesmullane05" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="text-black"/>
                </a>
                <a href="mailto:jamesmullane05@gmail.com" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope className="text-black"/>
                </a>
            </div>
            <div className='flex flex-row gap-3'>
              <DownloadCVButton/>
              <ViewProjectsButton/>
            </div>
        </div>
    </section>
  )
}

export default Hero

