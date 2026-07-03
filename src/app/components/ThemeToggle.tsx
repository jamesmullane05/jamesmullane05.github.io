"use client";

import { FaMoon, FaSun } from "react-icons/fa6";
import { useTheme } from "../context/themeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={isDark}
      className="theme-toggle"
    >
      {isDark ? (
        <FaSun className="text-[0.8rem]" aria-hidden="true" />
      ) : (
        <FaMoon className="text-[0.75rem]" aria-hidden="true" />
      )}
      <span>{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
