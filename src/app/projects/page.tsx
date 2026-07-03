import ProjectsExplorer from "./ProjectsExplorer";

export const metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-36 sm:px-6 sm:pt-40">
      <section data-reveal className="mb-12 border-b border-slate-200 pb-14">
        <h1 className="text-6xl font-normal leading-none text-slate-950 sm:text-8xl">
          Projects
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-500 sm:text-xl">
          A collection of software, automation, and web work shaped around real problems and practical outcomes.
        </p>
      </section>

      <ProjectsExplorer />
    </main>
  );
}
