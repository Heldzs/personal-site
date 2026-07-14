"use client";

import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "next-themes";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      aria-label="Toggle theme"
      type="button"
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-700 bg-zinc-800 p-2 text-zinc-400 transition hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-300 dark:bg-zinc-200 dark:text-zinc-500 dark:hover:text-zinc-900 dark:focus:ring-zinc-900 dark:focus:ring-offset-zinc-900"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <LuSun className="h-5 w-5" />
      ) : (
        <LuMoon className="h-5 w-5" />
      )}
    </button>
  );
}
