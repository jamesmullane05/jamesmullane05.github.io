import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";
import type { Project } from "@/src/data/site";

type ProjectCardProps = Project & {
  featured?: boolean;
};

export default function ProjectCard({
  title,
  eyebrow,
  description,
  impact,
  tags,
  link,
  featured = false,
}: ProjectCardProps) {
  return (
    <article
      data-reveal
      className={`group flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white/85 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/70 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-sky-700">
          {eyebrow}
        </p>
        <h3 className="text-2xl font-black tracking-tight text-slate-950">
          {title}
        </h3>
        <p className="mt-4 leading-7 text-slate-600">{description}</p>
        <p className="mt-4 rounded-2xl border border-slate-100 bg-slate-50 p-4 text-sm leading-6 text-slate-700">
          <span className="font-bold text-slate-950">Impact:</span> {impact}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {link && (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800"
          >
            {link.includes("github") ? <FaGithub /> : <FaArrowUpRightFromSquare />}
            Open Project
          </a>
        )}
      </div>
    </article>
  );
}
