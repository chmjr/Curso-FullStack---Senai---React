import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; //Importe o createBrowserRouter
import Home from "./pages/Home"; //Importe a página Home
import Sobre from "./pages/Sobre"; //Importe a página Sobre

const BrowserRouter = createBrowserRouter([
  {
    //Escreva aqui as rotas, dentro do objeto
    path: "/",
    element: <Home />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
