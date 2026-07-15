"use client";

import { useIsMounted } from "@/hooks/useIsMounted";
import { useTheme } from "next-themes";

export function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const ismounted = useIsMounted();

  if (!ismounted) {
    return <div className="w-9 h-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-9 h-9 rounded-full bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors text-sm"
      aria-label="Alternar tema"
    >
      {theme === "dark" ? "🌙" : "☀️"}
    </button>
  );
}
