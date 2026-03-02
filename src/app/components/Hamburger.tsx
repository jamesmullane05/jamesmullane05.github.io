import React from 'react'

interface HamburgerProps {
  className?: string
}

function Hamburger({ className }: HamburgerProps) {
  return (
    <button className={className}>
      <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  )
}

export default Hamburger

