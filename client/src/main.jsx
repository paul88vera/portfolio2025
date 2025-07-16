import React from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { ErrorBoundary } from "./pages/ErrorBoundary.jsx";
import Home from "./pages/Home.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary fallback={<Home />}>
      <RouterProvider router={router} fallbackElement={<Home />} />
    </ErrorBoundary>
  </React.StrictMode>
);
