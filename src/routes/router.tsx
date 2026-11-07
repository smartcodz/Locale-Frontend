// src/routes/router.tsx
import { createBrowserRouter } from "react-router";
import AppLayout from "../components/layout/AppLayout";
import BusinessProfilePage from "../pages/BusinessProfilePage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import SearchPage from "../pages/SearchPage";

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
