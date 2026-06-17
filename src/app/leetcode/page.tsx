import { FaCode, FaExternalLinkAlt } from "react-icons/fa";
import { profile } from "@/src/data/site";

export const metadata = {
  title: "LeetCode",
};

const focusAreas = [
  "Arrays and strings",
  "Hash maps and sets",
  "Two pointers",
  "Stacks and queues",
  "Trees and recursion",
  "Dynamic programming basics",
];

export default function LeetcodePage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
      <section data-reveal className="rounded-[2rem] border border-slate-200 bg-white/85 p-8 shadow-sm sm:p-10">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-sky-700">LeetCode</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
          Practising problem solving for technical interviews.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          I use LeetCode to strengthen algorithmic thinking, coding speed, and interview fundamentals alongside project-based software development.
        </p>
        <a
          href={profile.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-slate-800"
        >
          Open LeetCode profile <FaExternalLinkAlt className="text-xs" />
        </a>
      </section>

      <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {focusAreas.map((area, index) => (
          <article
            key={area}
            data-reveal
            style={{ transitionDelay: `${index * 70}ms` }}
            className="rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <FaCode className="text-sky-700" />
            <h2 className="mt-4 font-black text-slate-950">{area}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
