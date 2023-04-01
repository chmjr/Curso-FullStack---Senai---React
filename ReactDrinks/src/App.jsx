import { Header } from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { ProductProvider } from "./context/context";

export const App = () => {
  return (
    <ProductProvider>
      <Header />
      <Outlet /> {/* Essa vai ser rota pai para abrir todos os filhos */}
    </ProductProvider>
  );
};
