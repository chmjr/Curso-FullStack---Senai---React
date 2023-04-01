import { Header } from "./components/Header";
import { Outlet, Router } from "react-router-dom"; // <--- aqui é onde você importa o componente Outlet que vai ser usado para chamar as rotas filhas

export const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};
