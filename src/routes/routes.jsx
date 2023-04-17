import React from "react";
import { Navigate } from "react-router-dom";
import Page from '../views/page'
import Home from "../views/home";

// 路由表
const routes = [
  {
    path: "/",
    element: <Navigate to='/home' />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/page",
    element: <Page />,
  },
];
export default routes;
