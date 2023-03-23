import PropTypes from "prop-types";
import FormatarValor from "../util/formatarValor";
import TabelaLinha from "./TabelaLinha";

function Tabela({ negociacoes }) {
  function totalizador() {
    let total = 0;
    negociacoes.forEach((negociacao) => {
      total += Number(negociacao.quantidade) * Number(negociacao.valor);
    });
    return FormatarValor(total);
  }

  return (
    <div>
      <table id="tabelaNegociacoes" className="tabelaNegociacoes">
        <thead>
          <tr>
            <th className="tabela-negociacoes-cabecalho">Ticker</th>
            <th className="tabela-negociacoes-cabecalho">Data</th>
            <th className="tabela-negociacoes-cabecalho">Quantidade</th>
            <th className="tabela-negociacoes-cabecalho">Valor (Un)</th>
            <th className="tabela-negociacoes-cabecalho">Valor do Lote</th>
          </tr>
        </thead>
        <tbody id="lista">
          {negociacoes.map((negociacao) => (
            <TabelaLinha negociacao={negociacao} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">Total das Negociações: </td>
            <td id="total">{totalizador()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

Tabela.propTypes = {
  negociacoes: PropTypes.array.isRequired,
};
export default Tabela;
