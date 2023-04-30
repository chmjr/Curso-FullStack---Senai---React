import { SCFormFarm } from "../styles/SCFormFarm";
import { useForm } from "react-hook-form";
import { EnderecoForm } from "../components/EnderecoForm";
import { useEffect, useState } from "react";
import { ListaMapFarm } from "../components/ListaMapFarm";

export const GerenciarFarmacias = () => {
  const [farmacia, setFarmacia] = useState(() => { 
    const savedFarm = localStorage.getItem("farmacia");
    return savedFarm ? JSON.parse(savedFarm) : []; //Para não zerar o  useState quando já estiver cadastro no localStorage
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

  const salvarFarmacia = (novaFarmacia) => {
    setFarmacia([...farmacia, novaFarmacia]);
    reset();
    alert("Farmácia cadastrada com sucesso!");
  };

  useEffect(() => {
    localStorage.setItem("farmacia", JSON.stringify(farmacia));
  }, [farmacia]);

  return (
    <SCFormFarm>
      <div>
        <div className="topoCadastro">
          <h3>Lista de Farmácias Cadastradas</h3>
          <button className="btnAbrirCadastro" onClick={toggleCadastro}>
            + Adicionar Farmácia
          </button>
        </div>
        <ListaMapFarm />
        {showCadastro && (
          <div className="cadastroFarmacia">
            <div className="topoCadastro">
              <h3 className="h3Cadastro">Cadastrar Farmácia</h3>
              <a className="linkFechar" onClick={toggleCadastro}>
                Fechar X
              </a>
            </div>
            <form onSubmit={handleSubmit(salvarFarmacia)}>
              <div className="divInfo">
                <span>Informações da Empresa</span>
                <br></br>
                <label
                  htmlFor="razaoSocial"
                  style={errors.razaoSocial && { color: "red" }}
                >
                  Razão Social: *
                </label>
                <input
                  type="text"
                  name="razaoSocial"
                  id="razaoSocial"
                  {...register("razaoSocial", { required: true })}
                />
                <label htmlFor="cnpj" style={errors.cnpj && { color: "red" }}>
                  CNPJ: *
                </label>
                <input
                  type="text"
                  name="cnpj"
                  id="cnpj"
                  {...register("cnpj", { required: true })}
                />
                <label
                  htmlFor="nomeFantasia"
                  style={errors.nomeFantasia && { color: "red" }}
                >
                  Nome Fantasia: *
                </label>
                <input
                  type="text"
                  name="nomeFantasia"
                  id="nomeFantasia"
                  {...register("nomeFantasia", { required: true })}
                />
                <br></br>
                <label htmlFor="email" style={errors.email && { color: "red" }}>
                  Email: *
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...register("email", { required: true })}
                />
                <label htmlFor="telefone">Telefone: </label>
                <input
                  type="text"
                  name="telefone"
                  id="telefone"
                  {...register("telefone")}
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
              </div>
              <EnderecoForm
                register={register}
                errors={errors}
                setValue={setValue}
              />
              <button type="submit" className="btnCadastrar">
                Cadastrar
              </button>
            </form>
          </div>
        )}
      </div>
    </SCFormFarm>
  );
};
