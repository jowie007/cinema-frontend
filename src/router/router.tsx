import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../components/pages/home-page";
import { SeatsPage } from "../components/pages/seats-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/seats",
    element: <SeatsPage />,
  },
]);
