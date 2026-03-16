import React from 'react'
import Link from 'next/link'

type NavigationLinkProps = {
    name : string, 
    link: string
}
export default function NavigationLink({name, link}: NavigationLinkProps) {
  return (
    <li className='hover:font-semibold font-medium drop-shadow-md uppercase'>
      <Link href={link} className=''> 
        {name} 
      </Link> 
    </li>
  )
}