"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

type AnimationProviderProps = {
  children: ReactNode;
};

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();

    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return prefersReducedMotion;
}

function RouteTransitionController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove("route-entering");

    const frameId = window.requestAnimationFrame(() => {
      root.classList.add("route-entering");
    });

    const timeoutId = window.setTimeout(() => {
      root.classList.remove("route-entering");
    }, 520);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      root.classList.remove("route-entering");
    };
  }, [pathname]);

  return null;
}

function LenisRouteSync() {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const frameId = window.requestAnimationFrame(() => {
      lenis.resize();
      lenis.scrollTo(0, { immediate: true, force: true });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [lenis, pathname]);

  return null;
}

export default function AnimationProvider({ children }: AnimationProviderProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return (
      <>
        <RouteTransitionController />
        {children}
      </>
    );
  }

  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        smoothWheel: true,
        syncTouch: false,
        lerp: 0.085,
        wheelMultiplier: 0.95,
        touchMultiplier: 1.1,
        anchors: { offset: -96, duration: 0.9 },
        stopInertiaOnNavigate: true,
      }}
    >
      <RouteTransitionController />
      <LenisRouteSync />
      {children}
    </ReactLenis>
  );
}
