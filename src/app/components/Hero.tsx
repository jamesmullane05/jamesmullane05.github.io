import Image from "next/image";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import DownloadCVButton from "./DownloadCVButton";
import ViewProjectsButton from "./ViewProjectsButton";
import { profile } from "@/src/data/site";

const stats = [
  { value: "6+", label: "software projects shipped" },
  { value: "4+", label: "developer tools built" },
  { value: "2026", label: "expected graduation" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 py-20 sm:px-6 lg:py-28">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-sky-100/80 to-transparent" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div data-reveal>
          <div className="mb-6 inline-flex items-center rounded-full border border-sky-200 bg-white/70 px-4 py-2 text-sm font-semibold text-sky-800 shadow-sm">
            Open to NZ software engineering internships
          </div>

          <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            I build practical software for real-world workflows.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <DownloadCVButton />
            <ViewProjectsButton />
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
            >
              <FaLinkedin className="text-sky-700" /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
            >
              <FaEnvelope /> {profile.email}
            </a>
          </div>
        </div>

        <div data-reveal className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-6 top-12 h-40 w-40 rounded-full bg-emerald-200/70 blur-3xl" />
          <div className="absolute -right-4 bottom-10 h-48 w-48 rounded-full bg-sky-200/80 blur-3xl" />
          <div className="animate-float relative overflow-hidden rounded-[2rem] border border-white bg-white/70 p-4 shadow-2xl shadow-slate-300/60 backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-100">
              <Image
                src={profile.image}
                alt={profile.imageAlt}
                width={1071}
                height={1428}
                priority
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div className="mt-4 rounded-3xl bg-slate-950 p-5 text-white">
              <p className="text-sm font-semibold text-sky-200">{profile.name}</p>
              <p className="mt-2 text-2xl font-black">{profile.headline}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-14 grid max-w-6xl gap-4 sm:grid-cols-3">
        {stats.map((stat) => (
          <div key={stat.label} data-reveal className="rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-sm">
            <p className="text-4xl font-black text-slate-950">{stat.value}</p>
            <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
