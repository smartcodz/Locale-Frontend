import { createBrowserRouter } from "react-router";

import AppLayout from "../components/layout/AppLayout";
import HomePage from "../pages/HomePage";
import SearchPage from "../pages/SearchPage";
import BusinessProfilePage from "../pages/BusinessProfilePage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "search", element: <SearchPage /> },
      { path: "businesses/:slug", element: <BusinessProfilePage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
