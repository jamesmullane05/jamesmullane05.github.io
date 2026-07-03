import { education } from "@/src/data/site";

export default function Education() {
  return (
    <section data-reveal>
      <div className="mb-10">
        <p className="text-sm font-medium text-slate-500">Education</p>
        <h2 className="mt-4 text-3xl font-normal text-slate-950 sm:text-4xl">
          Academic background
        </h2>
      </div>

      <div className="divide-y divide-slate-200 border-y border-slate-200">
        {education.map((item) => (
          <article
            key={item.institution}
            className="grid gap-3 py-8 sm:grid-cols-[1fr_auto] sm:gap-8"
          >
            <div>
              <h3 className="text-xl font-normal text-slate-950 sm:text-2xl">
                {item.qualification}
              </h3>
              <p className="mt-1 font-medium text-slate-600">
                {item.institution}
              </p>
              {item.details && (
                <p className="mt-3 text-sm leading-6 text-slate-500">
                  {item.details}
                </p>
              )}
            </div>
            <p className="w-fit text-sm font-medium text-slate-500">
              {item.date}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
