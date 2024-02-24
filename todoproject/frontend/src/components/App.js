import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./HomePage";
import ErrorPage from "./TestPage";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: 'test',
      element: <ErrorPage />
    },
  ]);
  
  return(
      <RouterProvider router={router} />
  );
}