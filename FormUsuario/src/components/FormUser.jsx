import styled from "styled-components";
import { SCDiv, SCButton, SCTitle } from "./style";

function FormUser() {
  return (
    <div>
      <SCDiv>
        <SCTitle>Cadastro de Usuário</SCTitle>
        <label htmlFor="user">Usuario: </label>
        <input type="text" name="user" id="user" />
        <label htmlFor="password">Senha: </label>
        <input type="password" name="password" id="password" />
        <SCButton ColorHover="darkgreen" Size={80}>
          Entrar
        </SCButton>
      </SCDiv>
    </div>
  );
}
export default FormUser;
