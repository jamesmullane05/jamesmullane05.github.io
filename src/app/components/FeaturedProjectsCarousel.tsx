"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import ProjectCard from "./ProjectCard";
import type { Project } from "@/src/data/site";

type FeaturedProjectsCarouselProps = {
  projects: Project[];
};

export default function FeaturedProjectsCarousel({ projects }: FeaturedProjectsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    loop: false,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const frame = window.requestAnimationFrame(updateButtons);
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      window.cancelAnimationFrame(frame);
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi, updateButtons]);

  return (
    <div className="project-carousel" data-reveal>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="project-carousel-track">
          {projects.map((project) => (
            <div className="project-carousel-slide" key={project.title}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm font-semibold text-slate-500">
          Drag or use the arrows to browse the project highlights.
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous project"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
          >
            <FaArrowLeft className="text-sm" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next project"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-950 text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
          >
            <FaArrowRight className="text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
