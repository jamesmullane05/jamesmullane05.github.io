import React from 'react'
import { FaGithub } from 'react-icons/fa' // Using react-icons for GitHub logo

type ProjectCardProps = {
    title: string;
    description: string;
    link?: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="
        border
        border-gray-200
        rounded-xl
        p-6
        shadow-lg
        transition-all
        duration-300
        hover:shadow-2xl
        hover:-translate-y-1
        mb-6
        mx-auto
        max-w-xl
        bg-white
    ">
      <h3 className="text-2xl font-semibold text-gray-900 hover:text-black transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mt-2">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="
            inline-flex items-center gap-2 mt-4 rounded-md border border-black px-4 py-2 text-sm font-medium text-black
            hover:bg-gray-200 transition-colors"
        >
          <FaGithub className="text-xl text-black" />
          View on GitHub
        </a>
      )}
    </div>
  )
}