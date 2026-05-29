import { useEffect, useState } from "react";

const storageKey = "vaahan-theme";

function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  return localStorage.getItem(storageKey) || "light";
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem(storageKey, theme);
  }, [theme]);

  return {
    theme,
    toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark"))
  };
}
