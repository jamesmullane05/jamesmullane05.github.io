import Education from "./Education";
import Experience from "./Experience";
import Introduction from "./Introduction";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-20 px-5 pb-24 pt-36 sm:px-6 sm:pt-40">
      <Introduction />
      <Education />
      <Experience />
    </main>
  );
}
