import { SClogin } from "../styles/SClogin";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import Header from "../components/Header";

export const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    if (!login(email.value, password.value)) {
      return alert("Login ou senha inválidos");
    } else {
      alert("Login realizado com sucesso");
      navigate("/gerenciarFarmacias");
    }
  };

  return (
    <SClogin>
      <h1>Acesse o Sistema</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Login
          <input name="email" type="email" placeholder="E-mail" />
        </label>
        <br></br>
        <label>
          Senha
          <input name="password" type="password" placeholder="Senha" />
        </label>
        <button type="submit">Acessar</button>
      </form>
    </SClogin>
  );
};
