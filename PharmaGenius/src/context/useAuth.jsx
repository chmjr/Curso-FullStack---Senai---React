import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAuth = () => {
  const { setIsLoggedIn, isLoggedIn } = useContext(AuthContext);
  const storedUsers = JSON.parse(localStorage.getItem("usuario")) || []; //Pegar a lista de usuários do localStorage

  const login = (email, password) => {
    const user = storedUsers.find(
      //Comparar o email e senha do usuário com os do localStorage
      (storedUser) =>
        storedUser.email === email && storedUser.senha === password
    );
    // Realize aqui a validação do login
    // Validar o e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);

    // Validar a senha
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/;
    const isPasswordValid = passwordRegex.test(password);

    if (isEmailValid && isPasswordValid) {
      setIsLoggedIn(false);
      localStorage.setItem("isLoggedIn", false);
      return false;
    } else if (email === "admin@hotmail.com" && password === "itaguacu123") {
      //Login padrão
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
      return true;
    } else if (user) {
      //Se login e senha estiver na lista coloca true e retorna
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", true);
      return true;
    } else {
      setIsLoggedIn(false);
      localStorage.setItem("isLoggedIn", false);
      return false;
    }
  };

  return {
    isLoggedIn,
    login,
  };
};
