import { useContext } from "react";
import React from "react";
import { ContextoPag } from "../App";
import { Link } from "react-router-dom";

function DadosPessoais() {
  const { menuClicado, setMenuClicado } = useContext(ContextoPag);
  return (
    <div>
      <div className="col-md-50 mb-3">
        <label>Nome:</label>
        <input
          type="text"
          placeholder="Digite o seu nome"
          className="form-control"
          id="nome"
          name="nome"
        />
      </div>
      <div className="col-md-50 mb-3">
        <label>Email:</label>
        <input
          id="email"
          placeholder="Digite o seu email"
          className="form-control"
          label="Email"
          type="email"
        />
      </div>
      <Link to={{ pathname: "/endereco", state: { indice: 1 } }}>
        <button
          className="btn btn-light"
          type="button"
          onClick={() => setMenuClicado(1)}
        >
          Avançar
        </button>
      </Link>
    </div>
  );
}

export default DadosPessoais;
