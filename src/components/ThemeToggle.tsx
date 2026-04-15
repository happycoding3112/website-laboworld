import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background/80 backdrop-blur-sm transition-all hover:bg-muted hover:border-primary"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <Sun
        size={18}
        className={`absolute transition-all duration-300 ${
          theme === "light"
            ? "rotate-0 scale-100 text-primary"
            : "rotate-90 scale-0"
        }`}
      />
      <Moon
        size={18}
        className={`absolute transition-all duration-300 ${
          theme === "dark"
            ? "rotate-0 scale-100 text-primary"
            : "-rotate-90 scale-0"
        }`}
      />
    </button>
  );
}
