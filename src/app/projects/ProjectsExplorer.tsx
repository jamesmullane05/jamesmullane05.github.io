"use client";

import { useMemo, useState } from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import { projects } from "@/src/data/site";

const filterGroups = [
  {
    title: "Languages",
    filters: ["TypeScript", "Python", "C#"],
  },
  {
    title: "Frameworks & APIs",
    filters: ["Next.js", "React", ".NET", "Shopify API", "APIs", "RSS"],
  },
  {
    title: "Tools & platforms",
    filters: ["Git", "CI/CD", "Databases", "Windows", "Excel", "Shopify"],
  },
  {
    title: "Focus areas",
    filters: [
      "Automation",
      "Data",
      "Frontend",
      "E-commerce",
      "Product",
      "Operations",
      "CSV",
      "Meta Ads",
    ],
  },
];

export default function ProjectsExplorer() {
  const [activeTag, setActiveTag] = useState("All projects");

  const filteredProjects = useMemo(
    () =>
      activeTag === "All projects"
        ? projects
        : projects.filter((project) => project.tags.includes(activeTag)),
    [activeTag],
  );

  const projectCount = (filter: string) =>
    filter === "All projects"
      ? projects.length
      : projects.filter((project) => project.tags.includes(filter)).length;

  return (
    <section>
      <div className="mb-16 border-y border-slate-200 py-8 sm:py-10">
        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-normal text-slate-950">Browse by</h2>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Filter projects by technology or area.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setActiveTag("All projects")}
            aria-pressed={activeTag === "All projects"}
            className={`flex w-fit items-center gap-3 rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeTag === "All projects"
                ? "border-slate-950 bg-slate-950 text-white"
                : "border-slate-300 text-slate-600 hover:border-slate-950 hover:text-slate-950"
            }`}
          >
            All projects
            <span className={activeTag === "All projects" ? "text-slate-300" : "text-slate-400"}>
              {projects.length}
            </span>
          </button>
        </div>

        <div className="grid gap-x-10 gap-y-8 lg:grid-cols-2">
          {filterGroups.map((group) => (
            <div
              key={group.title}
              className="grid gap-3 border-t border-slate-200 pt-5 sm:grid-cols-[8.5rem_1fr]"
            >
              <h3 className="pt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.filters.map((filter) => {
                  const isActive = activeTag === filter;

                  return (
                    <button
                      key={filter}
                      type="button"
                      onClick={() => setActiveTag(filter)}
                      aria-pressed={isActive}
                      className={`inline-flex h-7 items-center rounded-full border px-3 text-xs font-medium leading-none transition ${
                        isActive
                          ? "border-slate-950 bg-slate-950 text-white"
                          : "border-slate-200 bg-slate-50 text-slate-600 hover:border-slate-400 hover:bg-white hover:text-slate-950"
                      }`}
                    >
                      {filter}
                      <span className={`ml-2 ${isActive ? "text-slate-300" : "text-slate-400"}`}>
                        {projectCount(filter)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <div className="flex min-h-8 items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500" aria-live="polite">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "project" : "projects"}
            {activeTag === "All projects" ? "" : ` using ${activeTag}`}
          </p>
          {activeTag !== "All projects" && (
            <button
              type="button"
              onClick={() => setActiveTag("All projects")}
              className="text-sm font-medium text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950"
            >
              Clear filter
            </button>
          )}
        </div>

        <div className="mt-4 border-b border-slate-200">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="group grid gap-7 border-t border-slate-200 py-10 first:border-slate-300 sm:py-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16"
            >
              <div>
                <p className="max-w-sm text-xs font-semibold uppercase leading-5 tracking-[0.1em] text-slate-500">
                  {project.eyebrow}
                </p>
                <h2 className="mt-4 max-w-md text-3xl font-normal leading-tight text-slate-950 sm:text-4xl">
                  {project.title}
                </h2>
              </div>

              <div className="flex min-w-0 flex-col">
                <p className="max-w-2xl text-lg leading-8 text-slate-700">
                  {project.description}
                </p>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
                  {project.impact}
                </p>

                <div className="mt-8 flex flex-col gap-5 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => {
                      const isActive = activeTag === tag;

                      return (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setActiveTag(tag)}
                          aria-pressed={isActive}
                          className={`inline-flex h-7 items-center rounded-full px-3 text-xs font-medium leading-none transition ${
                            isActive
                              ? "bg-slate-950 text-white"
                              : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-950"
                          }`}
                        >
                          {tag}
                        </button>
                      );
                    })}
                  </div>

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
      </div>
    </section>
  );
}
