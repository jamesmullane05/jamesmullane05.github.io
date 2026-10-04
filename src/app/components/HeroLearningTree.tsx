import { FaArrowRight } from "react-icons/fa6";
import AnimatedLink from "./AnimatedLink";

export default function HeroLearningTree() {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-6xl px-5 pb-10 pt-24 sm:px-6 lg:pb-6">
        <div className="grid items-center gap-8 py-10 lg:grid-cols-[0.78fr_1.22fr] lg:gap-10 lg:py-8">
          <div data-reveal className="relative z-10">
            <h1 className="page-intro text-6xl font-normal leading-none text-slate-950 sm:text-8xl lg:text-7xl">
              James Mullane
            </h1>
            <p className="page-intro page-intro-delay mt-7 max-w-xl text-lg leading-8 text-slate-500">
              Computer Science and Economics student learning by building, breaking, fixing, and trying again.
            </p>
            <div className="page-intro page-intro-late mt-8 flex items-center gap-3">
              <AnimatedLink href="/projects" className="group inline-flex items-center gap-2 rounded-lg bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200">
                Explore projects <FaArrowRight className="motion-arrow text-xs" />
              </AnimatedLink>
              <AnimatedLink href="/about" className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:bg-slate-100">
                About me
              </AnimatedLink>
            </div>
          </div>

          <div className="learning-tree relative mx-auto h-[470px] w-full max-w-[650px]" aria-label={"An interactive map of James Mullane's learning journey"}>
            <svg className="absolute inset-0 h-full w-full" viewBox="0 0 650 470" role="img" aria-labelledby="learning-tree-title learning-tree-description">
              <title id="learning-tree-title">Learning journey tree</title>
              <desc id="learning-tree-description">Branches connect university study, early web work, experiments, Cosmoshop, and team projects.</desc>
              <path className="tree-trunk" d="M325 455 C318 395 335 345 322 286 C310 230 327 177 322 106" />
              <path className="tree-branch branch-first" d="M323 289 C247 281 196 245 104 190" />
              <path className="tree-branch branch-university" d="M319 210 C272 168 268 111 277 53" />
              <path className="tree-branch branch-cosmoshop" d="M322 177 C393 168 448 132 533 92" />
              <path className="tree-branch branch-experiments" d="M326 363 C250 353 196 377 105 405" />
              <path className="tree-branch branch-capstone" d="M329 321 C399 326 439 365 489 412" />
              <path className="tree-branch branch-next" d="M326 267 C407 262 492 271 585 240" />
              <circle className="tree-ring" cx="325" cy="286" r="7" />
              <circle className="tree-ring" cx="322" cy="177" r="5" />
              <circle className="tree-ring" cx="329" cy="321" r="5" />
            </svg>

            <div className="tree-node tree-core left-[50%] top-[56%] -translate-x-1/2 -translate-y-1/2">
              <span className="tree-node-kicker">Now</span>
              <strong>Learning by building</strong>
            </div>
            <AnimatedLink href="/about" className="tree-node node-university left-[35%] top-[2%] -translate-x-1/2">
              <span className="tree-node-kicker">2023</span>
              <strong>Started university</strong>
            </AnimatedLink>
            <AnimatedLink href="/projects" className="tree-node node-first left-[4%] top-[31%]">
              <span className="tree-node-kicker">2021</span>
              <strong>First client website</strong>
            </AnimatedLink>
            <AnimatedLink href="/projects" className="tree-node node-cosmoshop right-[1%] top-[13%]">
              <span className="tree-node-kicker">2023</span>
              <strong>Built Cosmoshop</strong>
            </AnimatedLink>
            <AnimatedLink href="/projects" className="tree-node node-experiments bottom-[1%] left-[3%]">
              <span className="tree-node-kicker">Along the way</span>
              <strong>Tiny tools and experiments</strong>
            </AnimatedLink>
            <AnimatedLink href="/projects" className="tree-node node-capstone bottom-0 right-[17%]">
              <span className="tree-node-kicker">2026</span>
              <strong>Team capstone</strong>
            </AnimatedLink>
            <div className="tree-node node-next right-0 top-[47%]">
              <span className="tree-node-kicker">Next</span>
              <strong>Still figuring that out</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
