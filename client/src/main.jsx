import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import { ErrorBoundary } from "./pages/ErrorBoundary.jsx";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>
);
