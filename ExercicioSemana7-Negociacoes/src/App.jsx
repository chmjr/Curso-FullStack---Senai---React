import { useState } from "react";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Tabela from "./components/Tabela";

function App() {
  const [negociacoes, setNegociacoes] = useState([]);

  function addNegociacao(negociacao) {
    console.log(negociacao);
    setNegociacoes([...negociacoes, negociacao]);
  }

  return (
    <div>
      <Header titulo="Negociações" />
      <Formulario quandoAdd={addNegociacao} />
      <Tabela negociacoes={negociacoes} />
    </div>
  );
}

export default App;
