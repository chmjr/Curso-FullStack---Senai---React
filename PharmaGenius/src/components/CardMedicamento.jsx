import { SCcardMed } from "../styles/SCcardMed";
import { useState } from "react";
import imgMed from "../util/naoDisponivel.jpg";

export const CardMedicamento = () => {
  const medicamentos = JSON.parse(localStorage.getItem("medicamentos")) || [];
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  //Faz o acionamento do botão de mostrar detalhes
  const handleMostrarDetalhes = (medId) => {
    setMostrarDetalhes((prevState) => ({
      ...prevState,
      [medId]: !prevState[medId],
    }));
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {medicamentos.map((med, index) => (
        <SCcardMed>
          <>
            <div key={index}>
              <span>Medicamento - {med.nomeMed} </span>
              <br></br>
              <span>Nome Laboratório - {med.nomeLab}</span>
              <br></br>
              <img src={imgMed} width={50}></img>
              <br></br>
              <span>Preço - R$ {med.preco}</span>
              <br></br>
              <span>
                <button
                  type="button"
                  onClick={() => handleMostrarDetalhes(index)}
                >
                  {mostrarDetalhes[index] ? "- Detalhes" : "+ Detalhes"}
                </button>
              </span>
            </div>
          </>
          {mostrarDetalhes[index] && (
            <div className="cardMedicamentoDetalhes">
              <p>Detalhes sobre o medicamento:</p>
              <ul>
                <li>Dosagem: {med.dosagem}</li>
                <li>Descrição: {med.descricao}</li>
              </ul>
            </div>
          )}
        </SCcardMed>
      ))}
    </div>
  );
};
