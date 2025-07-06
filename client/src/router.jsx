import { createBrowserRouter, Navigate } from "react-router-dom";
import ErrorMessage from "./pages/ErrorMessage";
import Error from "./pages/Error";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        errorElement: <ErrorMessage />,
        children: [
          { index: true, element: <Navigate to="home" /> },
          { path: "home", element: <Home /> },
          { path: "projects", element: <Projects /> },
          { path: "*", element: <Error /> },
        ],
      },
    ],
  },
]);
