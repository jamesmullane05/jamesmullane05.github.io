import { ProjectGrid } from "../components/FeaturedWork";
import { projects } from "@/src/data/site";

export default function ProjectsExplorer() {
  return (
    <section aria-labelledby="all-projects-heading">
      <div className="mb-7 flex items-end justify-between gap-6">
        <h2 id="all-projects-heading" className="text-2xl font-semibold tracking-[-0.025em] text-slate-950">
          All projects
        </h2>
        <p className="text-sm text-slate-500">{projects.length} projects</p>
      </div>

      <ProjectGrid
        items={projects}
        className="sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      />
    </section>
  );
}
