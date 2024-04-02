import { PaletteMode, useMediaQuery } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useTheme = () => {
  const storedTheme = localStorage.getItem("theme") as PaletteMode | null;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [activeTheme, setActiveTheme] = useState<PaletteMode>(
    storedTheme ?? (prefersDarkMode ? "dark" : "light")
  );

  const addBodyClass = useCallback((isDark: boolean) => {
    document.body.classList.add(isDark ? "dark" : "light");
    document.body.classList.remove(isDark ? "light" : "dark");
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", activeTheme);
    addBodyClass(activeTheme === "dark");
  }, [activeTheme, addBodyClass]);

  const isDarkTheme = useMemo(() => activeTheme === "dark", [activeTheme]);

  const toggleTheme = useCallback(() => {
    setActiveTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  return { isDarkTheme, toggleTheme };
};
