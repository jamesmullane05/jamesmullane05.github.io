"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { profile } from "@/src/data/site";
import ThemeToggle from "./ThemeToggle";
import AnimatedLink from "./AnimatedLink";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "LeetCode", href: "/leetcode" },
  { name: "Contact", href: "/contact" },
];

export default function NavigationBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl transition-colors duration-300 dark:border-slate-800/80 dark:bg-slate-950/85">
      <nav className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3 sm:px-6 lg:py-4">
        <AnimatedLink href="/" className="group flex min-w-0 shrink-0 items-center gap-3" ariaLabel="Go to home page">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-sm transition duration-300 group-hover:-translate-y-0.5 group-hover:rotate-3 dark:bg-white dark:text-slate-950">
            {profile.initials}
          </span>
          <span className="hidden min-w-0 leading-tight sm:block">
            <span className="block truncate text-sm font-bold text-slate-950 dark:text-white">{profile.name}</span>
            <span className="block truncate text-xs text-slate-500 dark:text-slate-400">{profile.navbarSubtitle}</span>
          </span>
        </AnimatedLink>

        <div className="hidden items-center gap-2 md:flex">
          <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 text-sm shadow-sm transition-colors dark:border-slate-700 dark:bg-slate-900">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <AnimatedLink
                  key={item.href}
                  href={item.href}
                  ariaCurrent={isActive ? "page" : undefined}
                  className={`nav-pill whitespace-nowrap rounded-full px-4 py-2 font-medium transition duration-200 ${
                    isActive
                      ? "bg-slate-950 text-white shadow-sm dark:bg-white dark:text-slate-950"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </AnimatedLink>
              );
            })}
          </div>
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 dark:focus:ring-offset-slate-950"
          >
            <span className="relative h-4 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                  isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                  isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={`absolute left-5 right-5 top-[calc(100%+0.5rem)] origin-top rounded-3xl border border-slate-200 bg-white/95 p-2 shadow-xl shadow-slate-200/60 backdrop-blur-xl transition duration-200 dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-slate-950/40 md:hidden ${
            isMenuOpen
              ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
              : "pointer-events-none -translate-y-2 scale-95 opacity-0"
          }`}
        >
          <div className="grid gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <AnimatedLink
                  key={item.href}
                  href={item.href}
                  ariaCurrent={isActive ? "page" : undefined}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold transition duration-200 ${
                    isActive
                      ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </AnimatedLink>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
