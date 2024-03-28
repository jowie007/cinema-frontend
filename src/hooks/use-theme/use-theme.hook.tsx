import { PaletteMode, createTheme, useMediaQuery } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";

export const useTheme = () => {
  const storedTheme = localStorage.getItem("theme") as PaletteMode | null;
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [activeTheme, setActiveTheme] = useState<PaletteMode>(
    storedTheme ?? (prefersDarkMode ? "dark" : "light")
  );

  useEffect(() => {
    localStorage.setItem("theme", activeTheme);
  }, [activeTheme]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: activeTheme,
        },
      }),
    [activeTheme]
  );

  const isDarkTheme = useMemo(() => activeTheme === "dark", [activeTheme]);

  const toggleTheme = useCallback(() => {
    setActiveTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  }, []);

  return { theme, isDarkTheme, toggleTheme };
};
