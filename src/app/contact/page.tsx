import { FaEnvelope, FaGithub, FaLinkedin, FaLocationDot, FaPhone } from "react-icons/fa6";
import { profile } from "@/src/data/site";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
      <section data-reveal className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-xl shadow-slate-300/40 sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-300">Contact</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Let’s talk about software internships.</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            I’m based in Auckland and interested in software engineering, automation, backend systems, full-stack applications, and data-driven products.
          </p>

          <div className="mt-8 space-y-4 text-slate-200">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <FaEnvelope className="text-sky-300" /> {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10">
              <FaPhone className="text-sky-300" /> {profile.phone}
            </a>
            <p className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
              <FaLocationDot className="text-sky-300" /> {profile.location}
            </p>
          </div>
        </div>

        <div data-reveal className="rounded-[2rem] border border-slate-200 bg-white/85 p-8 shadow-sm sm:p-10">
          <h2 className="text-2xl font-black text-slate-950">Quick links</h2>
          <p className="mt-3 leading-7 text-slate-600">
            The best way to reach me is by email. You can also review my code and professional profile below.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <FaLinkedin className="text-3xl text-sky-700" />
              <h3 className="mt-4 font-black text-slate-950">LinkedIn</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">View my professional profile and background.</p>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-3xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg"
            >
              <FaGithub className="text-3xl text-slate-950" />
              <h3 className="mt-4 font-black text-slate-950">GitHub</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">Browse repositories, projects, and code examples.</p>
            </a>
          </div>

          <a
            href={`mailto:${profile.email}?subject=Software%20Internship%20Opportunity`}
            className="mt-8 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
          >
            Email me
          </a>
        </div>
      </section>
    </main>
  );
}
