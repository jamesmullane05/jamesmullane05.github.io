import Image from "next/image";
import { FaArrowRight, FaGithub } from "react-icons/fa6";
import { projects } from "@/src/data/site";
import AnimatedLink from "./AnimatedLink";

export default function FeaturedWork() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section aria-labelledby="featured-work-heading" className="mx-auto max-w-6xl px-5 pb-24 sm:px-6">
      <div className="flex items-end justify-between gap-6 border-b border-slate-200 pb-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Selected work</p>
          <h2 id="featured-work-heading" className="mt-3 text-4xl font-normal text-slate-950 sm:text-5xl">Engineering with practical outcomes.</h2>
        </div>
        <AnimatedLink href="/projects" className="hidden shrink-0 items-center gap-2 text-sm font-semibold text-slate-950 hover:text-sky-700 sm:inline-flex">
          All projects <FaArrowRight aria-hidden="true" />
        </AnimatedLink>
      </div>

      <div className="grid gap-6 py-8 lg:grid-cols-3">
        {featured.map((project) => (
          <article key={project.title} className="flex flex-col border border-slate-200 bg-white dark:bg-slate-900">
            {project.image ? (
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image src={project.image} alt={project.imageAlt ?? ""} fill unoptimized sizes="(min-width: 1024px) 31vw, 100vw" className="object-cover" />
              </div>
            ) : null}
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-slate-500">{project.eyebrow}</p>
              <h3 className="mt-3 text-2xl font-medium text-slate-950">{project.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-600">{project.description}</p>
              {project.link ? (
                <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-sky-700">
                  {project.link.includes("github") ? <FaGithub aria-hidden="true" /> : null}{project.linkLabel ?? "View project"}
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
      <AnimatedLink href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 hover:text-sky-700 sm:hidden">All projects <FaArrowRight aria-hidden="true" /></AnimatedLink>
    </section>
  );
}
