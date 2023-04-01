/**
 * Cadastre as rotas da sua aplicação!
 * Lembrando: a estrutura do objeto que configura a rota é a seguinte:
 *
 * {
 *   path: "/caminho-da-rota",
 *   element: <ComponenteDaRota />,
 * }
 */

import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Home } from "./pages/Home";
import { QuemSou } from "./pages/QuemSou";

export const appRouter = createBrowserRouter([
  // <--- aqui é onde você configura as rotas da sua aplicação
  {
    path: "/",
    element: <App />,
    children: [
      {
        //Rotas filhas são colocadas aqui dentro de um array
        path: "",
        element: <Home />,
      },
      {
        //Rotas filhas são colocadas aqui dentro de um array
        path: "/home",
        element: <Home />,
      },
      {
        path: "/quem-sou",
        element: <QuemSou />,
      },
    ],
  },
]);
