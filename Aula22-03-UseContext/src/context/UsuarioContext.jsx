import { createContext } from "react";

export const UsuarioContext = createContext({
  nome: 'Rico',
  idade: 35,
  email: 'rico@email.com',
});
