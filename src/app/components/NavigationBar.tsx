"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import AnimatedLink from "./AnimatedLink";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
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
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 backdrop-blur-md transition-colors duration-300">
      <nav className="relative mx-auto grid max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 py-7 sm:px-6">
        <AnimatedLink href="/" className="justify-self-start text-sm font-medium tracking-normal text-slate-950 transition hover:text-slate-500 dark:text-white" ariaLabel="Go to home page">
          James Mullane
        </AnimatedLink>

        <div className="hidden items-center justify-self-center md:flex">
          <div className="flex items-center gap-10 text-sm transition-colors">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <AnimatedLink
                  key={item.href}
                  href={item.href}
                  ariaCurrent={isActive ? "page" : undefined}
                  className={`nav-link whitespace-nowrap font-medium transition duration-200 ${
                    isActive
                      ? "is-active text-slate-950 dark:text-white"
                      : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                  }`}
                >
                  {item.name}
                </AnimatedLink>
              );
            })}
          </div>
        </div>

        <div className="hidden items-center justify-self-end gap-5 md:flex">
          <AnimatedLink
            href="/contact"
            className="text-sm font-medium text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
          >
            Contact
          </AnimatedLink>
          <span className="h-4 w-px bg-slate-200 dark:bg-slate-700" aria-hidden="true" />
          <ThemeToggle />
        </div>

        <div className="col-start-3 flex items-center justify-end gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-950 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 focus:ring-offset-white dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 dark:focus:ring-offset-slate-950"
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
          className={`absolute left-5 right-5 top-[calc(100%+0.5rem)] origin-top rounded-xl border border-slate-200 bg-white/95 p-2 shadow-xl shadow-slate-200/60 backdrop-blur-xl transition duration-200 dark:border-slate-700 dark:bg-slate-900/95 dark:shadow-slate-950/40 md:hidden ${
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
                  className={`rounded-lg px-4 py-3 text-sm font-semibold transition duration-200 ${
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
