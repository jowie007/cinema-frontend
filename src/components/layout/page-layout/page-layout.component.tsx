import { useColorScheme } from "@mui/material";
import { PageLayoutProps } from ".";
import { useTheme } from "../../../hooks/use-theme";
import { BasicThemeTogle } from "../../basic/basic-theme-toggle";
import "./page-layout.styles.scss";
import { useEffect } from "react";

export function PageLayout({ children }: PageLayoutProps) {
  const { isDarkTheme, toggleTheme } = useTheme();
  const { setMode } = useColorScheme();

  useEffect(() => {
    setMode(isDarkTheme ? "dark" : "light");
  }, [isDarkTheme, setMode]);

  return (
    <div className="pageLayout">
      <BasicThemeTogle checked={isDarkTheme} onChange={toggleTheme} />
      {children}
    </div>
  );
}
