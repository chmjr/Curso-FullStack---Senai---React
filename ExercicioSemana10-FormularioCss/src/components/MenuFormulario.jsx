import React, { useState, useContext } from "react";
import { ContextoPag } from "../App";
import { SCspanDados, SCspanAgrad, SCspanEnd } from "../style";
import {
  BsPersonFillAdd,
  BsFillHouseAddFill,
  BsEmojiSmileFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function MenuFormulario() {
  const { menuClicado, setMenuClicado } = useContext(ContextoPag);

  function handleClick(n) {
    setMenuClicado(n);
  }
  return (
    <div className="menu-formulario">
      <nav>
        <ul>
          <li>
            <Link to={{ pathname: "/dadosPessoais", state: { indice: 0 } }}>
              <SCspanDados
                Clicado={menuClicado === 0}
                onClick={() => handleClick(0)}
              >
                <BsPersonFillAdd /> Dados Pessoais
              </SCspanDados>
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/endereco", state: { indice: 1 } }}>
              <SCspanEnd
                Clicado={menuClicado === 1}
                onClick={() => handleClick(1)}
              >
                <BsFillHouseAddFill /> Endereço
              </SCspanEnd>
            </Link>
          </li>
          <li>
            <Link to={{ pathname: "/agradecimento", state: { indice: 2 } }}>
              <SCspanAgrad
                Clicado={menuClicado === 2}
                onClick={() => handleClick(2)}
              >
                <BsEmojiSmileFill /> Agradecimento
              </SCspanAgrad>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MenuFormulario;
