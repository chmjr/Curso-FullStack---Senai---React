import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { App } from "./App";
import { GerenciarFarmacias } from "./pages/GerenciarFarmacias";
import { GerenciarMedicamentos } from "./pages/GerenciarMedicamentos";
import { GerenciarUsuarios } from "./pages/GerenciarUsuarios";

export const appRouter = createBrowserRouter([
  // <--- aqui é onde você configura as rotas da sua aplicação
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/gerenciarFarmacias",
        element: <GerenciarFarmacias />,
      },
      {
        path: "/gerenciarMedicamentos",
        element: <GerenciarMedicamentos />,
      },
      {
        path: "/gerenciarUsuarios",
        element: <GerenciarUsuarios />,
      },
    ],
  },
]);
