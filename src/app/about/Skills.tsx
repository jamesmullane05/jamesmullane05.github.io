import { skillGroups } from "@/src/data/site";

export default function Skills() {
  return (
    <section data-reveal>
      <div className="mb-8">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">Skills</p>
        <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">Technical toolkit</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <article
            key={group.title}
            data-reveal
            style={{ transitionDelay: `${index * 80}ms` }}
            className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
          >
            <h3 className="font-black text-slate-950">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-semibold text-slate-700">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
