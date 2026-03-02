import React from 'react'
import Link from 'next/link'

type NavigationLinkProps = {
    name : string, 
    link: string
}
export default function NavigationLink({name, link}: NavigationLinkProps) {
  return (
    <li className='hover:font-black font-medium drop-shadow-md uppercase'>
      <Link href={link} className=''> 
        {name} 
      </Link> 
    </li>
  )
}
/*
  <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100" />
*/


/*
import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import DownloadCVButton from "./DownloadCVButton"
//mt-10 mb-30 px-25 py-30
function Hero() {
  return (
    <section className='min-h-screen flex items-center justify-center'>
        <div className="flex flex-col"> 
            <span className="font-medium text-7xl uppercase">James</span>
            <span className="font-black text-[120px] uppercase leading-none">Mullane</span>
            <p className="text-gray-700 text-2xl">Computer Science Student at University of Auckland</p>

            <div className="flex gap-6 mt-6 text-3xl">
                <a href="https://www.linkedin.com/in/james-mullane-95a526252/">
                    <FaLinkedin className="text-blue-600"/>
                </a>
                <a href="https://github.com/Jamesmullane05">
                    <FaGithub className="text-black"/>
                </a>
                <a href="mailto:jamesmullane05@gmail.com">
                    <FaEnvelope className="text-black"/>
                </a>
            </div>
            <div>
              <DownloadCVButton/>
            </div>
        </div>
    </section>
  )
}*/