import { useColorScheme } from "@mui/material";
import { PageLayoutProps } from ".";
import { useTheme } from "../../../hooks/use-theme";
import { BasicThemeTogle } from "../../basic/basic-theme-toggle";
import "./page-layout.styles.scss";
import { useEffect } from "react";
import { Header } from "../../specific/header/header.component";

export function PageLayout({ children }: PageLayoutProps) {
  const { isDarkTheme, toggleTheme } = useTheme();
  const { setMode } = useColorScheme();

  useEffect(() => {
    setMode(isDarkTheme ? "dark" : "light");
  }, [isDarkTheme, setMode]);

  return (
    <div className="pageLayout">
      <Header />
      <div className="pageLayoutThemeToggle">
        <BasicThemeTogle checked={isDarkTheme} onChange={toggleTheme} />
      </div>
      <div className="pageLayoutContent">{children}</div>
    </div>
  );
}
