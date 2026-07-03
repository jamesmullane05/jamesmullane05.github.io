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
      className={`group flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/70 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div>
        <p className="mb-3 text-xs font-bold uppercase text-sky-700">
          {eyebrow}
        </p>
        <h3 className="text-xl font-black text-slate-950">
          {title}
        </h3>
        <p className="mt-4 leading-7 text-slate-600">{description}</p>
        <p className="mt-4 border-l-2 border-sky-600 pl-4 text-sm leading-6 text-slate-700">
          <span className="font-bold text-slate-950">Result:</span> {impact}
        </p>
      </div>

      <div className="mt-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
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
            className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-950 transition hover:text-sky-700"
          >
            {link.includes("github") ? <FaGithub /> : <FaArrowUpRightFromSquare />}
            Open Project
          </a>
        )}
      </div>
    </article>
  );
}
