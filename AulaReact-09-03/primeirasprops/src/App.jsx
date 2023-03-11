import Cabecalho from "../src/components/Cabecalho";
import Imagem from "../src/components/Imagem";
import Ingredientes from "../src/components/Ingredientes";
import Instrucoes from "../src/components/Instrucoes";
import Rodape from "../src/components/Rodape";
import receitas from "./components/receita.json";

const App = () => {
  const receita = receitas[1];

  return (
    <div>
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
