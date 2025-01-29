import React from "react";
import { Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";

const Router = [
  {
    path: "/",
    element: <Layout />,

    children: [
      { path: "/", element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
    ],
  },
];

export default Router;
