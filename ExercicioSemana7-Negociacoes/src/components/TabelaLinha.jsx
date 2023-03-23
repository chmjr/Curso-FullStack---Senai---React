import PropTypes from "prop-types";
import FormatarValor from "../util/formatarValor";

function TabelaLinha(props) {
  const { ticker, data, quantidade, valor } = props.negociacao; // Destructuring Objeto
  return (
    <tr>
      <td>{ticker}</td>
      <td>{data}</td>
      <td>{quantidade}</td>
      <td>{FormatarValor(Number(valor))}</td>
      <td>{FormatarValor(Number(valor) * Number(quantidade))}</td>
    </tr>
  );
}

export default TabelaLinha;
