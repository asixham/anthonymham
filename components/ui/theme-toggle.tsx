"use client";

import { useEffect, useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    try {
      const t = localStorage.getItem("theme");
      const initial = t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDark(initial);
    } catch {}
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      try { localStorage.setItem("theme", "dark"); } catch {}
    } else {
      root.classList.remove("dark");
      try { localStorage.setItem("theme", "light"); } catch {}
    }
  }, [isDark]);

  const toggle = useCallback(() => setIsDark((v) => !v), []);

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={toggle}
      className={`inline-flex cursor-pointer items-center justify-center outline-none focus:outline-none text-foreground/80 hover:text-foreground ${className}`}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </button>
  );
}
