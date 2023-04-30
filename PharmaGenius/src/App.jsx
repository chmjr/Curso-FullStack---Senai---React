import Header from "./components/Header";
import { Outlet, Router } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ListaMapFarm } from "./components/ListaMapFarm";

export const App = () => {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Outlet />
      </AuthProvider>
    </div>
  );
};
