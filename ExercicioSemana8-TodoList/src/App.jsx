import { useState, useReducer } from "react";
import "./App.css";
import { CardAdicionar } from "./components/CardAdicionar";
import Header from "./components/Header";

function App() {
  //Funções principais ficam no app.jsx
  //function adicionar TodoList
  //UseState
  const [tarefa, setTarefa] = useState(""); //Estado para armazenar a tarefa digitada
  //Declaração sempre embaixo do reducer
  const [listaTarefa, dispatchListaTarefas] = useReducer(reducerTarefas, []); //Usando Reducer para adicionar e excluir tarefa
  //função redutora
  function reducerTarefas(state, action) {
    const listaGeral = [...state]; //Copia o array de tarefas
    switch (action.type) {
      case "ADICIONAR":
        let novaTarefa = {
          id: listaGeral.length + 1,
          texto: tarefa,
          fizalizando: false,
        };
        return [listaGeral, novaTarefa];
      case "EXCLUIR":
        return state.filter((tarefa) => tarefa.id !== action.payload);
    }
  }

  // Função que será passada para o componente CardAdicionar
  function adicionarTarefa() {
    dispatchListaTarefas({ type: "ADICIONAR" });
  }

  return (
    <div>
      <Header titulo="TodoList" />
      <CardAdicionar
        tarefas={listaTarefa}
        setTarefa={setTarefa}
        adicionarTarefa={adicionarTarefa}
      />
    </div>
  );
}

export default App;
