import styled from "styled-components";

export const SCFormFarm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px 0px 0px 100px;
  font-family: "Pontic";
  background-color: #fff;
  width: 1102px;
  margin: 120px 0px 0px 100px;
  .cadastroFarmacia {
    position: absolute;
    border-radius: 5px;
    border: 1px solid #000;
    box-shadow: 3px 3px #c0cbcd;
    top: 100px;
    left: 150px;
    width: 1050px;
    height: 460px;
    background-color: #c0cbcd;
    justify-content: center;
    align-items: center;
    z-index: 999; /* z-index alto para aparecer por cima do restante da página */
  }
  .divInfo {
    margin: 5px 0px 0px 0px;
    padding: 10px;
  }
  .divEndereco {
    border-top: #000 1px solid;
    padding: 10px;
  }
  span {
    margin: 20px 0px 0px 0px;
    color: #000;
    font-size: 14px;
    font-weight: bold;
  }
  label {
    margin: 20px;
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
  textarea {
    margin: 10px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
  }
  select {
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
    margin-left: 650px;
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 16px;
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
  }
  .h3Cadastro {
    margin: 10px 0px 0px 10px;
    width: 400px;
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
`;
