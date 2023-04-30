import { SCFormUser } from "../styles/SCFormUser";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { ListaUsuarios } from "../components/ListaUsuarios";

export const GerenciarUsuarios = () => {
  const [usuario, setUsuario] = useState(() => { 
    const savedUsuario = localStorage.getItem("usuario");
    return savedUsuario ? JSON.parse(savedUsuario) : []; //Para não zerar o  useState quando já estiver cadastro no localStorage
  });
  const [showCadastro, setShowCadastro] = useState(false);

  const toggleCadastro = () => {
    setShowCadastro(!showCadastro);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const salvarUsuario = (novoUsuario) => {
    setUsuario([...usuario, novoUsuario]);
    reset();
    alert("Usuario cadastrado com sucesso!");
  };
  //validações de email e senha
  const validarEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(String(email).toLowerCase());
  };

  const validarSenha = (senha) => {
    const validar = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,}$/;
    return validar.test(String(senha));
  };

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario]);

  return (
    <SCFormUser>
      <div>
        <div className="topoCadastro">
          <h3>Lista de Usuários</h3>
          <button className="btnAbrirCadastro" onClick={toggleCadastro}>
            + Adicionar Usuario
          </button>
        </div>
        <div className="divListaUser">
          <ListaUsuarios />
        </div>
        {showCadastro && (
          <div className="divCadastro">
            <div className="topoCadastro">
              <h3>Cadastrar Usuario</h3>
              <a className="linkFechar" onClick={toggleCadastro}>
                Fechar X
              </a>
            </div>
            <form onSubmit={handleSubmit(salvarUsuario)}>
              <div>
                <br></br>
                <span>Informações Pessoais</span>
                <br></br>
                <label htmlFor="nome" style={errors.nome && { color: "red" }}>
                  Nome: *
                </label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  {...register("nome", { required: true })}
                />
                <label htmlFor="cpf" style={errors.cpf && { color: "red" }}>
                  CPF: *
                </label>
                <input
                  type="text"
                  name="cpf"
                  id="cpf"
                  {...register("cpf", { required: true })}
                />
                <label
                  htmlFor="celular"
                  style={errors.celular && { color: "red" }}
                >
                  Celular: *
                </label>
                <input
                  type="text"
                  name="celular"
                  id="celular"
                  {...register("celular", { required: true })}
                />
                <br></br>
                <span>Informações de Acesso</span>
                <br></br>
                <label htmlFor="email" style={errors.email && { color: "red" }}>
                  Email / Login: *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", {
                    required: true,
                    validate: validarEmail,
                  })}
                />

                <label htmlFor="senha" style={errors.senha && { color: "red" }}>
                  Senha: *
                </label>
                <input
                  type="password"
                  name="senha"
                  id="senha"
                  {...register("senha", {
                    required: true,
                    validate: validarSenha,
                  })}
                />
                {errors.senha && (
                  <span style={{ color: "red", marginLeft: 10, fontSize: 12 }}>
                    A senha deve ter pelo menos 8 caracteres, conter letras e
                    números
                  </span>
                )}
              </div>
              <button type="submit" className="btnCadastrar">
                Cadastrar
              </button>
            </form>
          </div>
        )}
      </div>
    </SCFormUser>
  );
};
