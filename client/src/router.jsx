import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorMessage from "./pages/ErrorMessage";
import Error from "./pages/Error";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import { projectData } from "./pages/Projects";
import About from "./pages/About";
import { ProjectInnerRoute } from "./pages/ProjectInner";
import Experience from "./pages/Experience";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorMessage />,
    children: [
      { index: true, element: <Navigate to="home" /> },
      { path: "home", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "experience", element: <Experience /> },
      {
        path: "project",
        children: [
          { index: true, ...projectData },
          { path: ":id", ...ProjectInnerRoute },
        ],
      },
      { path: "*", element: <Error /> },
    ],
  },
]);
