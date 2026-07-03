import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { experience } from "@/src/data/site";

export default function Experience() {
  return (
    <section data-reveal>
      <div className="mb-10">
        <p className="text-sm font-medium text-slate-500">Experience</p>
        <h2 className="mt-4 text-3xl font-normal text-slate-950 sm:text-4xl">
          Commercial and technical background
        </h2>
      </div>

      <div className="divide-y divide-slate-200 border-y border-slate-200">
        {experience.map((item, index) => (
          <article
            key={`${item.company}-${item.role}`}
            data-reveal
            style={{ transitionDelay: `${index * 90}ms` }}
            className="py-9"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex min-w-0 gap-4">
                <div className="experience-logo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.logo} alt={item.logoAlt} loading="lazy" />
                </div>

                <div>
                  <h3 className="text-2xl font-normal text-slate-950">{item.role}</h3>
                  <div className="mt-1 flex flex-wrap items-center gap-2">
                    <p className="font-medium text-slate-600">{item.company}</p>
                    {item.website && (
                      <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${item.company} website`}
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-950"
                      >
                        Website <FaArrowUpRightFromSquare className="text-[10px]" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <p className="w-fit text-sm font-medium text-slate-500">{item.date}</p>
            </div>

            <p className="mt-4 leading-7 text-slate-600">{item.description}</p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-700">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400" />
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
