import { profile } from "@/src/data/site";
import { FaArrowRight } from "react-icons/fa6";

export default function Hero() {
  return (
    <section className="px-5 sm:px-6">
      <div className="mx-auto flex min-h-svh max-w-6xl flex-col pt-24">
        <div className="flex flex-1 items-center">
          <div data-reveal className="max-w-5xl pb-8">
            <p className="mb-7 text-base font-normal text-slate-500">
              Penultimate Computer Science student
            </p>

            <h1 className="text-6xl font-normal leading-none text-slate-950 sm:text-8xl lg:text-9xl">
              James Mullane
            </h1>

            <p className="mt-9 max-w-2xl text-xl leading-8 text-slate-500 sm:text-2xl sm:leading-9">
              I build practical software, automation tools, and web experiences.
            </p>

            <div className="mt-11 flex flex-wrap gap-x-8 gap-y-3 text-sm font-medium text-slate-950">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="transition hover:text-slate-500">
                GitHub
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="transition hover:text-slate-500">
                LinkedIn
              </a>
              <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="transition hover:text-slate-500">
                LeetCode
              </a>
              <a href={`mailto:${profile.email}`} className="transition hover:text-slate-500">
                Email
              </a>
              <a href={profile.resume} download="James_Mullane_Resume.pdf" className="transition hover:text-slate-500">
                CV
              </a>
            </div>
          </div>
        </div>

        <a
          href="/projects"
          className="group mb-10 inline-flex w-fit items-center gap-3 text-sm font-medium text-slate-500 transition hover:text-slate-950"
        >
          <span className="h-px w-10 bg-slate-300 transition-all duration-300 group-hover:w-14 group-hover:bg-slate-950" />
          View projects
          <FaArrowRight className="text-xs transition duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
