import { UsuarioContext } from "./context/UsuarioContext";
import { useContext } from "react";
import "./App.css";
import Item from "./components/Item";

function App() {
  const usuario = useContext(UsuarioContext);

  return (
    <UsuarioContext.Provider value={usuario}>
      <Item />
    </UsuarioContext.Provider>
  );
}

export default App;
