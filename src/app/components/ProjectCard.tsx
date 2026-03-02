import React from 'react'
import GithubLogo from './GithubLogo'

type ProjectCardProps = {
    title: string;
    description: string;
    link?: string;
}

export default function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="border border-gray-300 rounded-lg p-4">
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
      {link && ( <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border px-3 py-2 text-sm font-medium hover:bg-muted">
        <GithubLogo/>
        View on GitHub
        </a>
      )}
    </div>
  )
}

