"use client";

import { useEffect } from "react";

export default function AmbientHighlight() {
  useEffect(() => {
    const root = document.documentElement;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = (event: PointerEvent) => {
      if (!finePointer.matches || reducedMotion.matches) return;

      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
        root.classList.add("pointer-highlight-active");
      });
    };

    const hide = () => root.classList.remove("pointer-highlight-active");

    window.addEventListener("pointermove", update, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", update);
      document.documentElement.removeEventListener("mouseleave", hide);
      root.classList.remove("pointer-highlight-active");
    };
  }, []);

  return <div className="site-pointer-highlight" aria-hidden="true" />;
}