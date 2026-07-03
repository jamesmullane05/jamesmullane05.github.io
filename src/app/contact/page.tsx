import {
  FaArrowUpRightFromSquare,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import { profile } from "@/src/data/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-36 sm:px-6 sm:pt-40">
      <section data-reveal className="border-b border-slate-200 pb-14">
        <p className="text-sm font-medium text-slate-500">Contact</p>
        <h1 className="mt-6 text-6xl font-normal leading-none text-slate-950 sm:text-8xl">
          Let&apos;s talk.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-500 sm:text-xl">
          I&apos;m based in Auckland and happy to chat about software, projects, internships, or practical tools worth building.
        </p>
      </section>

      <section data-reveal className="grid border-b border-slate-200 lg:grid-cols-2">
        <div className="py-12 lg:border-r lg:border-slate-200 lg:pr-12">
          <h2 className="text-3xl font-normal text-slate-950">Start a conversation</h2>
          <p className="mt-4 max-w-lg leading-7 text-slate-500">
            Email is the best way to reach me. I&apos;ll usually respond within a couple of days.
          </p>

          <div className="mt-8 text-slate-700">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 border-t border-slate-200 py-4 transition hover:text-slate-950"
            >
              <FaEnvelope className="text-slate-400" /> {profile.email}
            </a>
            <p className="flex items-center gap-3 border-y border-slate-200 py-4">
              <FaLocationDot className="text-slate-400" /> {profile.location}
            </p>
          </div>

          <a
            href={`mailto:${profile.email}?subject=Software%20Internship%20Opportunity`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-950 underline decoration-slate-300 underline-offset-4 transition hover:decoration-slate-950"
          >
            Email me <FaArrowUpRightFromSquare className="text-xs" />
          </a>
        </div>

        <div className="py-12 lg:pl-12">
          <h2 className="text-3xl font-normal text-slate-950">Elsewhere</h2>
          <p className="mt-4 max-w-lg leading-7 text-slate-500">
            Review my professional background and recent code before getting in touch.
          </p>

          <div className="mt-8 border-b border-slate-200">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border-t border-slate-200 py-5"
            >
              <FaLinkedin className="text-xl text-slate-400 transition group-hover:text-slate-950" />
              <div>
                <h3 className="font-medium text-slate-950">LinkedIn</h3>
                <p className="mt-1 text-sm text-slate-500">Professional profile and background</p>
              </div>
              <FaArrowUpRightFromSquare className="ml-auto text-xs text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-950" />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border-t border-slate-200 py-5"
            >
              <FaGithub className="text-xl text-slate-400 transition group-hover:text-slate-950" />
              <div>
                <h3 className="font-medium text-slate-950">GitHub</h3>
                <p className="mt-1 text-sm text-slate-500">Repositories and code examples</p>
              </div>
              <FaArrowUpRightFromSquare className="ml-auto text-xs text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-slate-950" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
