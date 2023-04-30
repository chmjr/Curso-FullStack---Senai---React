import styled from "styled-components";

export const SCcardMed = styled.div`
  flex-direction: column;
  font-family: "Pontic";
  background-color: #fff;
  border: 1px solid #000;
  width: 250px;
  padding: 15px;
  border-radius: 5px;
  margin: 15px 8px 0px 0px;
  .divCard {
    display: flex;
    flex-direction: row;
  }
  .divItem {
    flex: 1;
  }
  img {
    width: 100px;
    border-radius: 5px;
    border: 1px solid #000;
    margin: 10px 50px 0px;
  }
  span {
    padding: 5px;
    margin: 10px 0px 10px 5px;
  }
  button {
    padding: 5px;
    border-radius: 5px;
    margin-top: 5px;
    width: 70px;
    background-color: #007bff;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    color: #fff;
    border: none;
    font-size: 10px;
    font-weight: bold;
  }
  .cardMedicamentoDetalhes {
    position: absolute;
    word-wrap: break-word;
    background-color: white;
    width: 300px;
    padding: 10px;
    border: 1px solid black;
    border-radius: 5px;
    z-index: 900;
  }
`;
