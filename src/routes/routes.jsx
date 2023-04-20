import React from "react";
import { Navigate } from "react-router-dom";
import Cue from "../views/cue";
import Home from "../views/home";

// 路由表
const routes = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "cue",
        element: <Cue />,
      },
    ],
  },
];
export default routes;
