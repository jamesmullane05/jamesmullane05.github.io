import Image from "next/image";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { projects } from "@/src/data/site";
import { withBasePath } from "@/site.config";

const defaultProjectImage = withBasePath("/projects/project-default.webp");

export default function ProjectsExplorer() {
  return (
    <section>
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
        {projects.length} selected projects
      </p>

      <div className="border-b border-slate-200">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group grid gap-7 border-t border-slate-200 py-10 first:border-slate-300 sm:py-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16"
          >
            <div className={project.imageFit === "contain" ? "" : "lg:h-full"}>
              <div
                className={`relative aspect-[16/10] overflow-hidden border border-slate-200 bg-slate-100 ${
                  project.imageFit === "contain" ? "" : "lg:h-full lg:aspect-auto"
                }`}
                style={
                  project.imageAspectRatio
                    ? { aspectRatio: project.imageAspectRatio }
                    : undefined
                }
              >
                <Image
                  src={project.image ?? defaultProjectImage}
                  alt={project.imageAlt ?? ""}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className={`${
                    project.imageFit === "contain"
                      ? "object-contain"
                      : "object-cover group-hover:scale-[1.015]"
                  } transition duration-500`}
                />
              </div>
            </div>

            <div className="flex min-w-0 flex-col">
              <p className="max-w-sm text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-slate-500">
                {project.eyebrow}
              </p>
              <h2 className="mt-4 max-w-md text-3xl font-normal leading-tight text-slate-950 sm:text-4xl">
                {project.title}
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                {project.description}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                {project.impact}
              </p>

              <div className="mt-8 flex flex-col gap-5 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <ul
                  className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium text-slate-500"
                  aria-label={`${project.title} technologies`}
                >
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="flex items-center gap-4 after:h-1 after:w-1 after:rounded-full after:bg-slate-300 last:after:hidden"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-slate-950 transition hover:text-slate-500"
                  >
                    {project.link.includes("github") ? (
                      <FaGithub />
                    ) : (
                      <FaArrowUpRightFromSquare />
                    )}
                    Open project
                  </a>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
