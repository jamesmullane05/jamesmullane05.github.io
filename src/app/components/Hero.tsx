import { FaArrowRight, FaFileArrowDown } from "react-icons/fa6";
import AnimatedLink from "./AnimatedLink";
import { profile } from "@/src/data/site";

export default function Hero() {
  return (
    <section>
      <div className="mx-auto flex min-h-svh max-w-6xl flex-col px-5 pt-24 sm:px-6">
        <div className="flex flex-1 items-center py-16">
          <div data-reveal className="w-full">
            <h1 className="text-6xl font-normal leading-none text-slate-950 sm:text-8xl">
              James Mullane
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-500 sm:text-xl">
              I build practical software that connects APIs, automates operational work, and turns complex data into focused web experiences.
            </p>

            <div className="mt-12 grid border-y border-slate-200 sm:grid-cols-[1fr_1fr_auto]">
              <div className="py-5 sm:pr-8">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Based in
                </p>
                <p className="mt-2 text-sm font-medium text-slate-800">
                  Auckland, New Zealand
                </p>
              </div>
              <div className="border-t border-slate-200 py-5 sm:border-l sm:border-t-0 sm:px-8">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Studying
                </p>
                <p className="mt-2 text-sm font-medium text-slate-800">
                  University of Auckland · Graduating July 2027
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-200 py-5 sm:border-l sm:border-t-0 sm:pl-8">
                <AnimatedLink
                  href="/projects"
                  className="group inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700"
                >
                  View projects
                  <FaArrowRight className="text-xs transition duration-300 group-hover:translate-x-1" />
                </AnimatedLink>
                <AnimatedLink
                  href="/contact"
                  className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-100"
                >
                  Contact
                </AnimatedLink>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-2 py-2.5 text-sm font-semibold text-slate-600 transition hover:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-500 dark:text-slate-300 dark:hover:text-white"
                >
                  <FaFileArrowDown aria-hidden="true" /> Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
