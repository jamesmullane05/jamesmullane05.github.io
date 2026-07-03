import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/src/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-medium text-slate-950">James Mullane</p>
          <p>&copy; {new Date().getFullYear()} - Auckland, New Zealand</p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-slate-600 transition hover:text-slate-950"
          >
            <FaGithub /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-medium text-slate-600 transition hover:text-slate-950"
          >
            <FaLinkedin /> LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 font-medium text-slate-600 transition hover:text-slate-950"
          >
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}
