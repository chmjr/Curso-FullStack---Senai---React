import "./card.css";
import React, { useState } from "react";
import ExportCard from "./ExportCard";
import html2canvas from "html2canvas";

function Card(props) {
  // Pode se chamar com props, porém para colocar o valor deve colocar props.nome
  //function Card({ nome, foto, idade, github, linkedin }) {
  //Forma de chamar os valores sem o props
  //Props é um objeto que é passado para dentro da função
  const [image, setImage] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  function captureScreen() {
    // Seleciona a div
    const cardPersonal = document.querySelector("#cardPersonal");
    // Remove o botão de download da div
    const btnDownload = cardPersonal.querySelector(".btnDownload");
    if (btnDownload) {
      btnDownload.remove();
    }
    //Captura a imagem
    html2canvas(cardPersonal).then((canvas) => {
      setImage(canvas.toDataURL());
      // Adiciona o botão de volta à div
      if (btnDownload) {
        cardPersonal.appendChild(btnDownload);
      }
    });
  }

  return (
    <div id="cardPersonal">
      <p>
        <img className="imgPessoal" src={props.foto} width="100px;"></img>
      </p>
      <p>Nome: {props.nome}</p>
      <p>Idade: {props.idade}</p>
      {image && (
        <ExportCard
          image={image}
          fileName={`card-${nome}.png`}
          onClose={() => setImage(null)}
        />
      )}
      <p>
        GitHub: <a href={props.github}>GITHUB</a>
      </p>
      <p>
        Linkedin: <a href={props.linkedin}>LINKEDIN</a>
      </p>
      <p>
        <button
          className="btnDownload"
          onClick={() => {
            captureScreen();
            setShowConfirmation(true);
          }}
        >
          Baixar Cartão
        </button>
      </p>
    </div>
  );
}

export default Card;
