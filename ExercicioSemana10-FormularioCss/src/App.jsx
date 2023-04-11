import Formulario from "./components/Formulario";
import Header from "./components/Header";
import { SCTitle, SCBotao, SCBotaoCancel } from "./style";
import { createContext, useState } from "react";

//export const ContextoPag = createContext();

function App() {
  //const [clicado, setClicado] = useState(0);

  return (
    //  <ContextoPag.Provider value={{ clicado, setClicado }}>
    <div className="App">
      <Header />
      <Formulario />
      <SCTitle Size={80}>
        Teste <p>Teste SASS</p>
      </SCTitle>
      <SCBotao>Teste</SCBotao>
      <SCBotaoCancel>Teste</SCBotaoCancel>
    </div>
    //</ContextoPag.Provider>
  );
}

export default App;
