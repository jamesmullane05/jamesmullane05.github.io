import AnimatedLink from "./components/AnimatedLink";
import { FaArrowRight } from "react-icons/fa";
import Hero from "./components/Hero";
import FeaturedProjectsCarousel from "./components/FeaturedProjectsCarousel";
import { projects, skillGroups, techIcons } from "@/src/data/site";

export default function Home() {
  const featuredProjects = projects.slice(0, 5);

  return (
    <main>
      <Hero />

      <section data-reveal className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-3xl border border-slate-200 bg-white/80 p-8 shadow-sm">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Development focus</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
              Building full-stack tools, APIs, and automation systems.
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              My strongest work is practical software: web applications, backend services, data-processing tools, and automation that turns messy workflows into reliable systems.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Full-stack development",
                text: "React, Next.js, TypeScript, and Tailwind interfaces with clean, maintainable component structure.",
              },
              {
                title: "Backend & APIs",
                text: "Python, Flask, Node.js, SQL, Prisma, and API integrations for real application workflows.",
              },
              {
                title: "Automation systems",
                text: "Shopify tools, CSV processing, marketplace listing workflows, and label-printing software.",
              },
              {
                title: "Team engineering",
                text: "Capstone and WDCC experience across Git workflows, CI/CD, backend planning, and delivery.",
              },
            ].map((item) => (
              <article key={item.title} data-reveal className="capability-card rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-700">{item.title}</p>
                <p className="mt-4 leading-7 text-slate-700">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-reveal className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Featured projects</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Selected technical work</h2>
          </div>
          <AnimatedLink href="/projects" className="group inline-flex items-center gap-2 font-bold text-slate-950 transition hover:text-sky-700">
            See all projects <FaArrowRight className="text-xs transition duration-300 group-hover:translate-x-1" />
          </AnimatedLink>
        </div>

        <FeaturedProjectsCarousel projects={featuredProjects} />
      </section>

      <section data-reveal className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl shadow-slate-300/40 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Tech stack</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">Tools I use to build</h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techIcons.map(({ name, Icon }) => (
              <div key={name} data-reveal className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-300 hover:-translate-y-1 hover:bg-white/10">
                <Icon className="text-2xl text-sky-200" />
                <span className="font-semibold text-slate-100">{name}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-3xl border border-white/10 bg-white/5 p-5">
                <h3 className="font-bold text-white">{group.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{group.skills.join(" · ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
