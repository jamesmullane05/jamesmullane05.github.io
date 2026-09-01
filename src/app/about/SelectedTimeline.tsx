import { FaArrowRight } from "react-icons/fa6";
import AnimatedLink from "../components/AnimatedLink";

const milestones = [
  {
    year: "Dec 2022",
    title: "Graduated from Rutherford College",
    description: "Completed high school and began considering where technology and economics could take me next.",
  },
  {
    year: "Feb 2023",
    title: "Computer Science + Economics",
    description: "Began a conjoint degree at the University of Auckland, driven by an interest in building useful things and understanding economics.",
  },
  {
    year: "Jun 2023",
    title: "Nuttall Henderson Jewellers",
    description: "Designed and built a new Shopify website for Nuttall Henderson Jewellers, migrating its existing store and product catalogue onto the platform.",
  },
  {
    year: "Jul 2023",
    title: "Co-founded Cosmoshop",
    description: "Started an online watch retailer on Facebook Marketplace and Trade Me, building a reputation on established platforms before directing customers to our own website.",
  },
  {
    year: "Feb 2024",
    title: "Learning beyond university",
    description: "Began exploring React frameworks through smaller builds and Frontend Mentor challenges, expanding my programming knowledge beyond my coursework.",
  },
  {
    year: "Oct 2024",
    title: "Automating business operations",
    description: "Started building larger productivity tools for Cosmoshop, including AI listing optimisers, marketplace integrations, and a postage-label printing application.",
  },
  {
    year: "Jul 2025",
    title: "Cosmoshop became a company",
    description: "Registered Cosmoshop as an official company and established an office in the Auckland CBD.",
  },
  {
    year: "Mar 2026",
    title: "WDCC × Linux User Group",
    description: "Joined a team of eleven developers creating a new website for the University of Auckland Linux User Group.",
  },
  {
    year: "Mar–Jun 2026",
    title: "Human Nutrition Unit capstone",
    description: "Worked in a six-person team to redesign and build a CMS-powered website for a University of Auckland-affiliated research unit.",
  },
  {
    year: "Jun 2027",
    title: "Graduation",
    description: "Expected to graduate with degrees in Computer Science and Economics.",
  },
];

export default function SelectedTimeline() {
  return (
    <section data-reveal>
      <ol className="relative ml-3 border-l border-slate-950 py-2 sm:mx-auto sm:max-w-5xl sm:border-l-0">
        <span aria-hidden="true" className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-slate-950 sm:block dark:bg-slate-200" />

        {milestones.map((milestone, index) => {
          const appearsLeft = index % 2 === 1;
          return (
            <li
              key={`${milestone.year}-${milestone.title}`}
              data-reveal
              style={{ transitionDelay: `${index * 70}ms` }}
              className="relative grid min-h-36 gap-3 pb-16 pl-8 last:pb-0 sm:grid-cols-2 sm:gap-20 sm:pl-0"
            >
              <span aria-hidden="true" className="absolute -left-[11px] top-1 z-10 flex h-[21px] w-[21px] items-center justify-center rounded-full border-2 border-sky-600 bg-background shadow-[0_0_0_4px_var(--background)] sm:left-1/2 sm:-translate-x-1/2">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-600" />
              </span>

              <div className={appearsLeft ? "sm:col-start-1 sm:row-start-1 sm:text-right" : "sm:col-start-2"}>
                <p className="text-2xl font-semibold tracking-[-0.02em] text-sky-700 dark:text-sky-400">{milestone.year}</p>
                <h3 className="mt-2 text-xl font-semibold text-slate-950">{milestone.title}</h3>
                <p className="mt-2 leading-7 text-slate-500">{milestone.description}</p>
              </div>
            </li>
          );
        })}
      </ol>

      <div className="mt-20 flex flex-wrap gap-3 border-t border-slate-200 pt-8">
        <AnimatedLink href="/projects" className="group inline-flex items-center gap-3 rounded-lg bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700">
          View projects
          <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
        </AnimatedLink>
        <AnimatedLink href="/contact" className="group inline-flex items-center gap-3 rounded-lg border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-100">
          Get in touch
          <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
        </AnimatedLink>
      </div>
    </section>
  );
}
