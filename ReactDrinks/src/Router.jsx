import { Home } from "./pages/Home/Home";

//Código para iniciar o Router
import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { Products } from "./pages/Products/Products";
import { UserProfile } from "./pages/UserProfile/UserProfile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //Dentro do children vai as rotas filhas dentro de um array
      {
        index: true, //Essa rota vai ser a rota padrão
        element: <Home />,
      },
      { path: "/produtos", element: <Products /> },
      { path: "/usuario", element: <UserProfile /> },
    ],
  },
]);
