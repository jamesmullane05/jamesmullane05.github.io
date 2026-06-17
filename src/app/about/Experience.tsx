import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { experience } from "@/src/data/site";

export default function Experience() {
  return (
    <section data-reveal>
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Experience</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Commercial and technical background</h2>
      </div>

      <div className="space-y-5">
        {experience.map((item, index) => (
          <article
            key={`${item.company}-${item.role}`}
            data-reveal
            style={{ transitionDelay: `${index * 90}ms` }}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/70"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-sky-400 via-emerald-400 to-sky-400 opacity-0 transition duration-300 group-hover:opacity-100" />

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 gap-4">
                <div className="experience-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.logo} alt={item.logoAlt} loading="lazy" />
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-950">{item.role}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <p className="font-semibold text-sky-700">{item.company}</p>
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${item.company} website`}
                        className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-1 text-xs font-bold text-slate-500 transition hover:border-sky-200 hover:text-sky-700"
                      >
                        Site <FaArrowUpRightFromSquare className="text-[10px]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <p className="w-fit rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-500">{item.date}</p>
            </div>

            <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-600" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
