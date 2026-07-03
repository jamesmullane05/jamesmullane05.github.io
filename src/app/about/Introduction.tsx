import { profile } from "@/src/data/site";

export default function Introduction() {
  return (
    <section data-reveal className="border-b border-slate-200 pb-14">
      <h1 className="text-6xl font-normal leading-none text-slate-950 sm:text-8xl">
        About
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-500 sm:text-xl">
        {profile.summary}
      </p>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-500">
        I&apos;m drawn to projects where software has a clear job: simplify a workflow, connect systems together, or make a useful product feel easier to use.
      </p>
    </section>
  );
}
