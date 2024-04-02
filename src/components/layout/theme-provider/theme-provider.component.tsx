import CssBaseline from "@mui/material/CssBaseline";
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from "@mui/material/styles";
import { ThemeProviderProps } from ".";

// https://mui.com/material-ui/customization/dark-mode/
export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = extendTheme({
    cssVarPrefix: "cinema",
  });

  return (
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      {children}
    </CssVarsProvider>
  );
}
