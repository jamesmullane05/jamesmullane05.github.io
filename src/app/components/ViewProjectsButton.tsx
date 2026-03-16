import React from 'react'
import Link from 'next/link'

function ViewProjectsButton() {
  return (
    <button className="mt-8 rounded bg-black px-17 py-3 text-white border-black hover:bg-gray-900 ">
        <Link href="/projects" > View My Projects </Link>
    </button>
  )
}

export default ViewProjectsButton