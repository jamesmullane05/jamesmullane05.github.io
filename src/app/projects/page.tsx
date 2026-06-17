import ProjectCard from "../components/ProjectCard";
import { projects } from "@/src/data/site";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
      <section data-reveal className="mb-10 rounded-[2rem] border border-slate-200 bg-white/85 p-8 shadow-sm sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Projects</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          A curated set of software projects with practical impact.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          These projects show the kind of work I want to do in a software engineering internship: building reliable tools, integrating APIs, automating workflows, and contributing to team-based web applications.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </main>
  );
}
