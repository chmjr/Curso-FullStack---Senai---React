import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Formulario from "./components/Formulario";
import DadosPessoais from "./components/DadosPessoais";
import Endereco from "./components/Endereco";
import Agradecimento from "./components/Agradecimento";

export const appRouter = createBrowserRouter([
  // <--- aqui é onde você configura as rotas da sua aplicação
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <DadosPessoais /> },
      { path: "/dadosPessoais", element: <DadosPessoais /> },
      { path: "/endereco", element: <Endereco /> },
      { path: "/agradecimento", element: <Agradecimento /> },
    ],
  },
]);
