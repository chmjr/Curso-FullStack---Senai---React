import React, { useState } from "react";
import { SCspanDados, SCspanAgrad, SCspanEnd } from "../style";
import {
  BsPersonFillAdd,
  BsFillHouseAddFill,
  BsEmojiSmileFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

function MenuFormulario() {
  const [clicado, setClicado] = useState(0);

  function handleClick(n) {
    setClicado(n);
  }
  return (
    <div className="menu-formulario">
      <nav>
        <ul>
          <li>
            <Link to="/dadosPessoais">
              <SCspanDados Clicado={clicado} onClick={() => handleClick(0)}>
                <BsPersonFillAdd /> Dados Pessoais
              </SCspanDados>
            </Link>
          </li>
          <li>
            <Link to="/endereco" onClick={() => handleClick(1)}>
              <SCspanEnd Clicado={clicado}>
                <BsFillHouseAddFill /> Endereço
              </SCspanEnd>
            </Link>
          </li>
          <li>
            <Link to="/agradecimento">
              <SCspanAgrad Clicado={clicado} onClick={() => handleClick(2)}>
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
