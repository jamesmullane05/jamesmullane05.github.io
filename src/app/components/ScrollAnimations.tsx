"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const REVEAL_SELECTOR = "[data-reveal]";

function isElementInView(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.94 && rect.bottom > 0;
}

export default function ScrollAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const supportsIntersectionObserver = "IntersectionObserver" in window;

    root.classList.add("reveal-ready");

    if (prefersReducedMotion || !supportsIntersectionObserver) {
      document
        .querySelectorAll<HTMLElement>(REVEAL_SELECTOR)
        .forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      },
    );

    const initialiseReveals = () => {
      const elements = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));

      elements.forEach((element) => {
        if (element.dataset.revealPath === pathname) return;

        element.dataset.revealPath = pathname;
        element.classList.remove("is-visible");

        if (isElementInView(element)) {
          window.requestAnimationFrame(() => element.classList.add("is-visible"));
          return;
        }

        observer.observe(element);
      });
    };

    initialiseReveals();

    const mutationObserver = new MutationObserver(() => initialiseReveals());
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
