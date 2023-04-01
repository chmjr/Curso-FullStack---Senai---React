import React from "react";

export const CardAdicionar = (props) => {
  return (
    <div>
      <div>
        <input
          type="text"
          value={props.tarefas}
          placeholder="Digite a sua tarefa"
          onChange={(e) => props.setTarefa(e.target.value)}
        ></input>
        <button onClick={() => props.adicionarTarefa()}>Adicionar</button>
      </div>
      <div>
        {props.tarefas.map((tarefa) => {
          return (
            <div key={tarefa.id}>
              <p>{tarefa.texto}</p>
              <button
                onClick={() =>
                  dispatchListaTarefas({ type: "EXCLUIR", payload: tarefa.id })
                }
              >
                Excluir
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
