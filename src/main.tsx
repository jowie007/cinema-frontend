import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import i18n from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { initReactI18next } from "react-i18next";
import App from "./App.tsx";
import "./index.css";
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
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
