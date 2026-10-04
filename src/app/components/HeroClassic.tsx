import { FaArrowRight } from "react-icons/fa6";
import AnimatedLink from "./AnimatedLink";

export default function HeroClassic() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-5 pt-24 sm:px-6">
        <div className="py-16">
          <div data-reveal className="w-full">
            <h1 className="page-intro text-6xl font-normal leading-none text-slate-950 sm:text-8xl">
              James Mullane
            </h1>
            <p className="page-intro page-intro-delay mt-8 max-w-3xl text-lg leading-8 text-slate-500 sm:text-xl">
              Computer Science and Economics student learning by building projects, exploring new ideas, and figuring out how software works in the real world.
            </p>
            <div className="page-intro page-intro-late mt-12 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-12">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Based in</p>
                  <p className="mt-2 text-sm font-medium text-slate-800">Auckland, New Zealand</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">Studying</p>
                  <p className="mt-2 text-sm font-medium text-slate-800">University of Auckland, graduating 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <AnimatedLink href="/projects" className="group inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
                  View projects <FaArrowRight className="motion-arrow text-xs" />
                </AnimatedLink>
                <AnimatedLink href="/contact" className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-100">
                  Contact
                </AnimatedLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
