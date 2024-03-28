import { PageLayoutProps } from ".";
import { useTheme } from "../../../hooks/use-theme";
import { BasicThemeTogle } from "../../basic/basic-theme-toggle";
import { ThemeProvider } from "../theme-provider";
import "./page-layout.styles.scss";

export function PageLayout({ children }: PageLayoutProps) {
  const { isDarkTheme, toggleTheme, theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <div className="pageLayout">
        <BasicThemeTogle checked={isDarkTheme} onChange={toggleTheme} />
        {children}
      </div>
    </ThemeProvider>
  );
}
