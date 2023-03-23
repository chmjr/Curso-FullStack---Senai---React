import Cabecalho from "../src/components/Cabecalho";
import Imagem from "../src/components/Imagem";
import Ingredientes from "../src/components/Ingredientes";
import Instrucoes from "../src/components/Instrucoes";
import Rodape from "../src/components/Rodape";
import receitas from "./components/receita.json";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [pagina, setPagina] = useState(0);
  const [receita, setReceita] = useState(receitas[pagina]);

  function ProximaReceita() {
    if (pagina >= 2) {
      return;
    }
    setPagina(pagina + 1);
    //setReceita(receitas[pagina]);
  }
  function RetornaReceita() {
    if (pagina <= 0) {
      return;
    }
    setPagina(pagina - 1);
    //setReceita(receitas[pagina]);
  }
  useEffect(() => {
    //Vai ser executado se a dependencia for alterada
    setReceita(receitas[pagina]); //Alterou a pagina executou na página correta
  }, [pagina]);

  return (
    <div className="recipe-container">
      <button onClick={RetornaReceita}>Receita Anterior</button>
      <button onClick={ProximaReceita}>Próxima Receita</button>
      <Cabecalho titulo={receita.titulo} descricao={receita.descricao} />
      <Imagem caminho="" textoAlternativo="Rico" />
      <Ingredientes ingrediente={receita.ingredientes} />
      <Instrucoes lista={receita.preparo} />
      <Rodape
        tempoPreparo={receita.tempo_preparo}
        rendimento={receita.rendimento}
      />
    </div>
  );
};

export default App;
