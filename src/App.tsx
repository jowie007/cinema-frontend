import React, { useEffect, useState } from "react";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { useScreeningControllerServiceFindAll } from "./openapi/queries";
import viteLogo from "/vite.svg";
import { BasicButton } from "./components/basic-button";
import { BasicInput } from "./components/basic-input";
import { PaletteMode, ThemeProvider, createTheme } from "@mui/material";

function App() {
  const [count, setCount] = useState(0);

  const { data: screenings } = useScreeningControllerServiceFindAll({
    // Today as YYYY-MM-DD
    date: new Date().toISOString().split("T")[0],
  });

  useEffect(() => {
    console.log("screenings", screenings);
  }, [screenings]);

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  // https://mui.com/material-ui/customization/dark-mode/
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const getDesignTokens = (mode: PaletteMode) => ({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // palette values for light mode
            primary: amber,
            divider: amber[200],
            text: {
              primary: grey[900],
              secondary: grey[800],
            },
          }
        : {
            // palette values for dark mode
            primary: deepOrange,
            divider: deepOrange[700],
            background: {
              default: deepOrange[900],
              paper: deepOrange[900],
            },
            text: {
              primary: '#fff',
              secondary: grey[500],
            },
          }),
    },
  });
  

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);


  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={darkTheme}>
      <BasicButton title="Hello world" />
      <BasicInput title="Hello world" />
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  );
}

export default App;
