import Introduction from "./Introduction";
import SelectedTimeline from "./SelectedTimeline";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-20 px-5 pb-24 pt-36 sm:space-y-28 sm:px-6 sm:pt-44">
      <Introduction />
      <SelectedTimeline />
    </main>
  );
}
