import { profile } from "@/src/data/site";

export default function Introduction() {
  return (
    <section data-reveal className="rounded-[2rem] border border-slate-200 bg-white/85 p-8 shadow-sm sm:p-10">
      <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">About me</p>
      <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
        Computer Science & Economics student focused on building useful, reliable software.
      </h1>
      <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-600">
        {profile.summary}
      </p>
      <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-600">
        I’m especially interested in software engineering internships where I can work on backend systems, full-stack applications, automation, data pipelines, and products with real operational impact.
      </p>
    </section>
  );
}
