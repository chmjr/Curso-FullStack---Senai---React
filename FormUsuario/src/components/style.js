import styled from "styled-components";

export const SCTitle = styled.h1`
  color: #000;
  font-size: 28px;
  font-weight: bold;
  margin: 10px;
`;

export const SCDiv = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 400px;
  border: 1px solid #000;
  border-radius: 5px;
  width: 400px;
  label {
    margin: 10px;
    color: #000;
    font-size: 18px;
    font-weight: bold;
  }
  input {
    margin: 10px;
    padding: 10px;
    border: 1px solid #000;
    border-radius: 5px;
    width: 200px;
  }
`;

export const SCButton = styled.button`
  background-color: #000;
  border: none;
  padding: 10px 20px;
  margin: 10px;
  width: ${(props) => (props.Size > 30 ? props.Size + "px" : "800px")};
  border-radius: 5px;
  color: #fff;
  &:hover {
    color: ${(props) => props.ColorHover || "initial"};
  }
`;
export const SCButtonCancel = styled(SCButton)`
  background-color: #fff;
  color: #000;
`;
