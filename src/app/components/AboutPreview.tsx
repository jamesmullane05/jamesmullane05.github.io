import { FaArrowRight } from "react-icons/fa6";
import AnimatedLink from "./AnimatedLink";

export default function AboutPreview() {
  return (
    <section aria-labelledby="about-preview-heading" className="mx-auto max-w-6xl px-5 pb-24 sm:px-6 lg:pb-32">
      <div className="grid gap-8 border-t border-slate-200 pt-10 dark:border-slate-800 md:grid-cols-[0.75fr_1.25fr] md:gap-16 md:pt-14">
        <h2 id="about-preview-heading" className="text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">
          About me
        </h2>

        <div>
          <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
            I’m a Computer Science and Economics student at the University of Auckland. I enjoy building practical software, automating operational work, and creating focused digital experiences.
          </p>
          <AnimatedLink
            href="/about"
            className="group mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-slate-500 dark:text-white dark:hover:text-slate-300"
          >
            More about me
            <FaArrowRight className="motion-arrow text-xs" aria-hidden="true" />
          </AnimatedLink>
        </div>
      </div>
    </section>
  );
}
