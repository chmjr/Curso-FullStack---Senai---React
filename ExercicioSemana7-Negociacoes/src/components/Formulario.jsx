import PropTypes from "prop-types";
import { useState } from "react";
import GroupInput from "./GroupInput";

function Formulario(props) {
  const [data, setData] = useState("");
  const [ticker, setTicker] = useState("");
  const [valor, setValor] = useState(0);
  const [quantidade, setQuantidade] = useState(0);

  function handleAddNegociacao() {
    const negociacao = {
      ticker: ticker,
      data: data,
      valor: valor,
      quantidade: quantidade,
    };
    props.quandoAdd(negociacao);

    setTicker("");
    setData("");
    setValor(0);
    setQuantidade(0);
  }

  return (
    <form>
      <div className="divForm">
        <GroupInput
          id="ticker"
          etiqueta="Ticker"
          tipo="text"
          valor={ticker}
          aoDigitar={(e) => setTicker(e.target.value)}
        />
        <GroupInput
          id="data"
          etiqueta="Data"
          tipo="text"
          valor={data}
          aoDigitar={(e) => setData(e.target.value)}
        />
        <GroupInput
          id="quantidade"
          etiqueta="Quantidade"
          tipo="number"
          valor={quantidade}
          aoDigitar={(e) => setQuantidade(e.target.value)}
          min="1"
          step="1"
        />
        <GroupInput
          id="valor"
          etiqueta="Valor"
          tipo="number"
          valor={valor}
          aoDigitar={(e) => setValor(e.target.value)}
          min="0.01"
          step="0.01"
        />
        <p id="btn">
          <button type="button" onClick={handleAddNegociacao}>
            Cadastrar
          </button>
        </p>
      </div>
    </form>
  );
}
Formulario.propTypes = {
  quandoAdd: PropTypes.func.isRequired,
};

export default Formulario;
