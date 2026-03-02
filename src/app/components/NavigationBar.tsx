import React from 'react'
import Link from 'next/link'
import NavigationLink from './NavigationLink'
import Hamburger from './Hamburger'

export default function NavigationBar() {
  return (
    <nav className='flex items-center justify-between border-b border-gray-300 h-15 px-10'>
        <p className=''> James Mullane </p>
        <ul className='gap-9 hidden sm:flex'>
          <NavigationLink name={"Home"} link={"/"}/>
          <NavigationLink name={"Leetcode"} link={"/leetcode"}/>
          <NavigationLink name={"Projects"} link={"/projects"}/>
        </ul>

        <Hamburger className={"sm:hidden "}/>
    </nav>
  )
}

