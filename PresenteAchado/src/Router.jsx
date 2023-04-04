import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { AchePresente } from "./pages/AchePresente";
import { Contato } from "./pages/Contato";
import { App } from "./App";

export const AppRouter = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/achepresente", element: <AchePresente /> },
  { path: "/contato", element: <Contato /> },
]);
