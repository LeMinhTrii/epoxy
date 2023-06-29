import React from "react";
import { useRoutes } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages";

export default function Element() {
  const router = useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          element: <Home />,
          index: true,
        },
      ],
    },
  ]);
  return router;
}
