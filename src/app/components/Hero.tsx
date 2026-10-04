import { profile } from "@/src/data/site";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[54svh] max-w-6xl items-center justify-center px-5 pb-14 pt-32 text-center sm:px-6 sm:pb-20 sm:pt-36 lg:min-h-[58svh]">
      <div data-reveal>
        <h1 className="text-5xl font-bold leading-none tracking-[-0.055em] text-slate-950 sm:text-7xl lg:text-8xl">
          {profile.name}
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-xl font-medium leading-tight tracking-[-0.025em] text-slate-800 sm:text-3xl">
          Computer Science &amp; Economics Student
        </p>
      </div>
    </section>
  );
}
