import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import i18n from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { initReactI18next } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/layout/theme-provider";
import { router } from "./router/router.tsx";
import "./styles/main.scss";
import deTranslations from "./translations/de.json";

i18n.use(initReactI18next).init({
  resources: {
    de: {
      translation: deTranslations,
    },
  },
  lng: "de",
  fallbackLng: "de",
  interpolation: {
    escapeValue: false,
  },
});

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RouterProvider router={router} />
        </LocalizationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
