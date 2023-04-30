import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { createContext, useState } from "react";

export const ContextoPag = createContext();

function App() {
  const [menuClicado, setMenuClicado] = useState(0);

  return (
    <ContextoPag.Provider value={{ menuClicado, setMenuClicado }}>
      <div className="App">
        <Header />
        <Formulario />
      </div>
    </ContextoPag.Provider>
  );
}

export default App;
