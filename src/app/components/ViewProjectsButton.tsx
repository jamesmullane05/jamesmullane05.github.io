import { FaArrowRight } from "react-icons/fa";
import AnimatedLink from "./AnimatedLink";

export default function ViewProjectsButton() {
  return (
    <AnimatedLink
      href="/projects"
      className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:-translate-y-0.5 hover:border-slate-400"
    >
      View Work
      <FaArrowRight className="text-xs transition duration-300 group-hover:translate-x-1" />
    </AnimatedLink>
  );
}
