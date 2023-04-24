import React from "react";
import { Navigate } from "react-router-dom";
import Cue from "../views/cue";
import Home from "../views/home";
import Weather from "../views/weather"

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
      {
        path: "weather",
        element: <Weather />,
      },
    ],
  },
];
export default routes;
