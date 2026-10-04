"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FaArrowRight, FaArrowUpRightFromSquare, FaGithub, FaXmark } from "react-icons/fa6";
import { projects, type Project } from "@/src/data/site";
import AnimatedLink from "./AnimatedLink";

function ProjectDrawer({ project, isOpen, onClose }: { project: Project; isOpen: boolean; onClose: () => void }) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    if (isOpen) closeButtonRef.current?.focus();
  }, [isOpen]);

  return createPortal(
    <div
      className={`fixed inset-0 z-[80] transition ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Close project details"
        onClick={onClose}
        className={`absolute inset-0 bg-slate-950/30 backdrop-blur-[2px] transition-opacity duration-500 dark:bg-black/60 ${isOpen ? "opacity-100" : "opacity-0"}`}
        tabIndex={isOpen ? 0 : -1}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-drawer-title"
        className={`absolute inset-y-0 right-0 h-dvh w-full max-w-[720px] overflow-hidden bg-[#fafafa] shadow-[-24px_0_70px_rgba(15,23,42,0.16)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] dark:bg-slate-950 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-full min-h-0 flex-col px-5 py-5 sm:px-9 sm:py-7 lg:px-11">
            <div className="flex flex-none justify-end">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-lg text-slate-950 transition hover:rotate-90 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                aria-label="Close project details"
              >
                <FaXmark aria-hidden="true" />
              </button>
            </div>

            <header className="flex-none pr-12 sm:-mt-5">
              <h2 id="project-drawer-title" className="max-w-lg text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-slate-950 sm:text-4xl">
                {project.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">{project.description}</p>
            </header>

            {project.image ? (
              <div className="relative mt-4 h-[clamp(110px,24vh,220px)] min-h-0 flex-none overflow-hidden rounded-sm border border-slate-200 bg-slate-100 dark:border-slate-800 dark:bg-slate-900 sm:mt-5">
                <Image
                  src={project.image}
                  alt={project.imageAlt ?? ""}
                  fill
                  unoptimized
                  sizes="(min-width: 768px) 680px, 100vw"
                  className={project.imageFit === "contain" ? "object-contain" : "object-cover"}
                />
              </div>
            ) : null}

            <div className="mt-4 grid min-h-0 flex-1 content-start gap-4 border-y border-slate-200 py-4 dark:border-slate-800 sm:mt-5 sm:grid-cols-[0.7fr_1.3fr] sm:gap-6">
              <section>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-500">Project type</p>
                <span className="mt-2 inline-flex rounded-full border border-slate-300 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                  {project.projectType}
                </span>
              </section>

              <section>
                <h3 className="text-sm font-semibold text-slate-950">What I did</h3>
                <p className="mt-1.5 text-sm leading-5 text-slate-600">{project.impact}</p>
              </section>
            </div>

            <div className="flex flex-none items-end justify-between gap-4 pt-4 sm:pt-5">
              <section className="min-w-0">
                <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate-500">Technologies</h3>
                <ul className="mt-2 flex flex-wrap gap-1.5" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded-full border border-slate-300 bg-white px-2.5 py-1 text-[0.7rem] font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
                      {tag}
                    </li>
                  ))}
                </ul>
              </section>

              {project.repository || project.liveUrl ? (
                <div className="flex shrink-0 flex-wrap justify-end gap-2">
                  {project.repository ? (
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-slate-500"
                    >
                      Repository
                      <FaGithub className="text-sm" aria-hidden="true" />
                    </a>
                  ) : null}
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
                    >
                      Open
                      <FaArrowUpRightFromSquare className="motion-arrow-diagonal text-xs" aria-hidden="true" />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </div>
        </div>
      </aside>
    </div>,
    document.body,
  );
}

export default function FeaturedWork() {
  const featured = projects.filter((project) => project.featured).slice(0, 3);

  return (
    <section id="featured-work" aria-labelledby="featured-work-heading" className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 lg:pb-32">
      <div className="mb-7 flex items-end justify-between gap-6">
        <h2 id="featured-work-heading" className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
          Featured Projects
        </h2>
        <AnimatedLink href="/projects" className="hidden items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-950 sm:inline-flex">
          View all <FaArrowRight className="motion-arrow text-xs" aria-hidden="true" />
        </AnimatedLink>
      </div>

      <ProjectGrid items={featured} className="md:grid-cols-3" />

      <div className="mt-8 flex justify-center">
        <AnimatedLink href="/projects" className="inline-flex items-center gap-2 rounded-md bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
          View More Projects
          <FaArrowRight className="motion-arrow text-xs" aria-hidden="true" />
        </AnimatedLink>
      </div>
    </section>
  );
}

export function ProjectGrid({ items, className = "" }: { items: Project[]; className?: string }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeTimerRef = useRef<number | null>(null);
  const openFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
      if (openFrameRef.current) window.cancelAnimationFrame(openFrameRef.current);
    };
  }, []);

  const openProject = useCallback((project: Project, trigger: HTMLButtonElement) => {
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    triggerRef.current = trigger;
    setSelectedProject(project);
    setIsDrawerOpen(false);
    openFrameRef.current = window.requestAnimationFrame(() => {
      openFrameRef.current = window.requestAnimationFrame(() => setIsDrawerOpen(true));
    });
  }, []);

  const closeProject = useCallback(() => {
    setIsDrawerOpen(false);
    closeTimerRef.current = window.setTimeout(() => {
      setSelectedProject(null);
      triggerRef.current?.focus();
    }, 500);
  }, []);

  return (
    <>
      <div className={`grid grid-cols-1 gap-7 ${className}`}>
          {items.map((project) => (
            <button
              type="button"
              key={project.title}
              onClick={(event) => {
                openProject(project, event.currentTarget);
              }}
              className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white text-left transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-950 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-slate-700 dark:hover:shadow-black/20"
              aria-label={`Open details for ${project.title}`}
            >
              <div className="relative aspect-[16/8] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.imageAlt ?? ""}
                    fill
                    unoptimized
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className={`${project.imageFit === "contain" ? "object-contain" : "object-cover"} transition duration-500 group-hover:scale-[1.025]`}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm font-medium text-slate-400">Project preview</div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-medium tracking-[-0.02em] text-slate-950">{project.title}</h3>
                <p className="mt-3 line-clamp-3 text-sm leading-5 text-slate-600">{project.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-950 opacity-0 transition group-hover:opacity-100 group-focus-visible:opacity-100">
                  View case study <FaArrowRight className="motion-arrow" aria-hidden="true" />
                </span>
              </div>
            </button>
          ))}
      </div>

      {selectedProject ? (
        <ProjectDrawer project={selectedProject} isOpen={isDrawerOpen} onClose={closeProject} />
      ) : null}
    </>
  );
}
