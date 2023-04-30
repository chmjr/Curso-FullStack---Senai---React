import styled from "styled-components"; //convenção é chamar de styled

export const SCTitle = styled.h1`
  //O SC é de Style Component, é a convencão para identificar que é um componente estilizado
  color: red;
  font-size: ${(props) =>
    props.Size +
    "px"}; //o size é uma propriedade que vai ser passada para o componente, o + 'px' é para converter o valor para px
  font-style: italic;
  justify-content: center;
  align-items: center;
  display: flex;
  p {
    //p é um elemento filho de h1, ou seja, um elemento dentro de outro
    color: blue;
    &:hover {
      //& é o proprio elemento
      color: green;
    }
  }
`; //os atributos css vão dentro ``

export const SCBotao = styled.button`
  color: blue;
`;
export const SCBotaoCancel = styled(SCBotao)`
  background-color: red; //Só vai mudar esse atributo de diferente da classe herdada
`;
export const SCspanDados = styled.span`
  color: ${(props) => (props.Clicado ? "red" : "")};
`;
export const SCspanEnd = styled.span`
  color: ${(props) => (props.Clicado ? "red" : "")};
`;
export const SCspanAgrad = styled.span`
  color: ${(props) => (props.Clicado ? "red" : "")};
`;
