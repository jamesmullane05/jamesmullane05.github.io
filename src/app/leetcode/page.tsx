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
      <section data-reveal className="border-b border-slate-200 pb-10">
        <p className="text-sm font-bold uppercase text-sky-700">LeetCode</p>
        <h1 className="mt-3 max-w-4xl text-4xl font-black text-slate-950 sm:text-5xl">
          Practising problem solving for technical interviews.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          I use LeetCode to strengthen algorithmic thinking, coding speed, and interview fundamentals alongside project-based software development.
        </p>
        <a
          href={profile.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
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
            className="rounded-xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300"
          >
            <FaCode className="text-sky-700" />
            <h2 className="mt-4 font-black text-slate-950">{area}</h2>
          </article>
        ))}
      </section>
    </main>
  );
}
