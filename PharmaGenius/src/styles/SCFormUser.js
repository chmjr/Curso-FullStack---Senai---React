import styled from "styled-components";

export const SCFormUser = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Pontic";
  background-color: #fff;
  width: 1102px;
  margin: 120px 0px 0px 100px;
  .divListaUser {
    margin: -50px 0px 0px -100px;
  }
  .divCadastro {
    position: absolute;
    border-radius: 5px;
    border: 1px solid #000;
    box-shadow: 2px 2px #c0cbcd;
    top: 180px;
    left: 150px;
    width: 1050px;
    padding: 15px;
    background-color: #c0cbcd;
    justify-content: center;
    align-items: center;
    z-index: 999; /* z-index alto para aparecer por cima do restante da página */
  }
  span {
    margin-bottom: 10px;
    margin-left: 40px;
    color: #000;
    font-size: 14px;
    font-weight: bold;
  }
  label {
    margin: 20px;
    margin-left: 60px;
    color: #000;
    font-size: 14px;
    font-weight: bold;
  }
  input {
    margin: 10px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
  }
  .btnCadastrar {
    margin: 10px 0px 20px 460px;
    padding: 10px;
    border-radius: 5px;
    width: 120px;
    background-color: #007bff;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    color: #fff;
    border: none;
    font-size: 14px;
    font-weight: bold;
  }
  .btnCadastrar:hover {
    background-color: #0069d9;
  }
  .btnAbrirCadastro {
    background-color: #007bff;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    color: #fff;
    border: none;
    width: 200px;
    margin-left: 480px;
    border-radius: 5px;
    padding: 10px 15px;
    font-size: 14px;
  }

  .btnAbrirCadastro:hover {
    background-color: #0069d9;
  }
  .topoCadastro {
    display: flex;
    width: 1100px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    h3 {
      width: 300px;
      margin: 10px 0px 0px 10px;
    }
  }
  .linkFechar {
    margin: 10px 0px 0px 640px;
    padding: 0px;
    width: 150px;
    &:hover {
      color: tomato;
    }
  }
  h1 {
    font-size: 16px;
    font-weight: bold;
    margin: 0px 0px 0px 0px;
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }

  th,
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    margin: 4px 2px;
    cursor: pointer;
  }

  button:hover {
    background-color: #3e8e41;
  }
`;
