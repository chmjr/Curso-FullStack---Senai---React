import { SCFormMed } from "../styles/SCFormMed";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { CardMedicamento } from "../components/CardMedicamento";

export const GerenciarMedicamentos = () => {
  const [medicamentos, setMedicamentos] = useState(() => {
    const savedMed = localStorage.getItem("medicamentos");
    return savedMed ? JSON.parse(savedMed) : []; //Para não zerar o  useState quando já estiver cadastro no localStorage
  });
  const [showCadastro, setShowCadastro] = useState(false);

  const toggleCadastro = () => {
    //Para abrir e fechar a tela de cadastro
    setShowCadastro(!showCadastro);
  };

  const {
    register,
    handleSubmit,
    reset,
    onClose,
    formState: { errors },
  } = useForm();

  const salvarMedicamento = (novoMedicamento) => {
    setMedicamentos([...medicamentos, novoMedicamento]);
    reset();
    alert("Medicamento cadastrado com sucesso!");
    onClose();
  };
  useEffect(() => {
    localStorage.setItem("medicamentos", JSON.stringify(medicamentos));
  }, [medicamentos]);

  return (
    <SCFormMed>
      <div>
        <div className="topoCadastro">
          <h3>Lista de Medicamentos Cadastrados</h3>
          <button className="btnAbrirCadastro" onClick={toggleCadastro}>
            + Adicionar Medicamento
          </button>
        </div>
        <CardMedicamento />
        {showCadastro ? (
          <>
            <div>
              <form onSubmit={handleSubmit(salvarMedicamento)}>
                <div className="divMed">
                  <div className="topoCadastro">
                    <h3>Cadastrar Medicamento</h3>
                    <a className="linkFechar" onClick={toggleCadastro}>
                      Fechar X
                    </a>
                  </div>
                  <br></br>
                  <span>Informações sobre Medicamentos</span>
                  <br></br>
                  <label
                    htmlFor="nomeMed"
                    style={errors.nomeMed && { color: "red" }}
                  >
                    Nome Medicamento: *
                  </label>
                  <input
                    type="text"
                    name="nomeMed"
                    id="nomeMed"
                    {...register("nomeMed", { required: true })}
                  />
                  <label
                    htmlFor="nomeLab"
                    style={errors.nomeLab && { color: "red" }}
                  >
                    Nome Laboratório: *
                  </label>
                  <input
                    type="text"
                    name="nomeLab"
                    id="nomeLab"
                    {...register("nomeLab", { required: true })}
                  />
                  <br></br>
                  <div
                    style={{
                      display: "flex",
                      width: "800px",
                      alignItems: "center",
                    }}
                  >
                    <label htmlFor="descricao" style={{ marginRight: "10px" }}>
                      Descrição do Medicamento:
                    </label>
                    <textarea
                      type="text"
                      rows="3"
                      cols="50"
                      name="descricao"
                      id="descricao"
                      {...register("descricao")}
                      style={{ flexGrow: 1 }}
                    />
                  </div>
                  <label
                    htmlFor="dosagem"
                    style={errors.dosagem && { color: "red" }}
                  >
                    Dosagem: *
                  </label>
                  <input
                    type="text"
                    name="dosagem"
                    id="dosagem"
                    {...register("dosagem", { required: true })}
                  />
                  <label
                    htmlFor="preco"
                    style={errors.preco && { color: "red" }}
                  >
                    Preço Un: *
                  </label>

                  <input
                    type="text"
                    name="preco"
                    id="preco"
                    {...register("preco", { required: true })}
                  />
                  <label
                    htmlFor="tipoMed"
                    style={errors.tipoMed && { color: "red" }}
                  >
                    Tipo Medicamento: *
                  </label>
                  <select
                    name="tipoMed"
                    id="tipoMed"
                    {...register("tipoMed", { required: true })}
                  >
                    <option value="Selecione">Selecione o tipo</option>
                    <option value="Medicamento Controlado">
                      Medicamento Controlado
                    </option>
                    <option value="Medicamento Comum">Medicamento Comum</option>
                  </select>
                  <button type="submit" className="btnCadastrar">
                    Cadastrar
                  </button>
                </div>
              </form>
            </div>
          </>
        ) : null}
      </div>
    </SCFormMed>
  );
};
