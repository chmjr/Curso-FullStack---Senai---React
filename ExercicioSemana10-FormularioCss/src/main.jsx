import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./css/formulario.css";
import "./css/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
