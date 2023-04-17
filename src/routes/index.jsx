import React from "react";
import routes from "./routes";
import { createHashRouter } from "react-router-dom";

const route = createHashRouter(routes);

export default route;
