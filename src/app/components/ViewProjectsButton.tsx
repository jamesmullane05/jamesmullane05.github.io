import { FaArrowRight } from "react-icons/fa";
import AnimatedLink from "./AnimatedLink";

export default function ViewProjectsButton() {
  return (
    <AnimatedLink
      href="/projects"
      className="group inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-bold text-slate-950 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-white hover:shadow-md"
    >
      View Projects
      <FaArrowRight className="text-xs transition duration-300 group-hover:translate-x-1" />
    </AnimatedLink>
  );
}
