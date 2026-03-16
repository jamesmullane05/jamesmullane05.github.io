import React from 'react'
import ProjectCard from '../components/ProjectCard'
import { safeFetch, SafeFetchResult } from '@/src/lib/safeFetch'
import { Project } from '@/src/services/repo';

export default async function Projects() {
  const projects: Project[] | null = await loadProjects();
  if (!projects) {
    return <p>Failed to load Projects.</p>;
  }

  return (
    <div className='flex flex-col items-center py-16 '>
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Projects
      </h2>
      <div className="flex flex-wrap justify-center gap-6 py-8">
        
        {projects.map(p => (
          <ProjectCard 
            key={p.name}
            title={p.name}
            description={p.description}
            link={p.link}
          />
        ))}
      </div>
    </div>
  )
}


async function loadProjects(): Promise<Project[] | null>  {
  const { data, error }: SafeFetchResult<Project[]> = await safeFetch<Project[]>(
    "http://localhost:3000/api/github/projects",
    { cache: "no-store" }
  );
  if (error) {
    return null;
  }
  return data;
}



