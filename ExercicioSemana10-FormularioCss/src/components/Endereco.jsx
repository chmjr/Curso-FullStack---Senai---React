import { Link } from "react-router-dom";

function Endereco() {
  return (
    <div>
      <div className="col-md-100 mb-100">
        <label>Logradouro</label>
        <input
          type="text"
          className="form-control"
          id="logradouro"
          name="logradouro"
        />
      </div>
      <label>Número</label>
      <input type="text" className="form-control" id="numero" name="numero" />
      <label>Bairro</label>
      <input type="text" className="form-control" id="bairro" name="bairro" />
      <label>Complemento</label>
      <input
        type="text"
        className="form-control"
        id="complemento"
        name="complemento"
      />
      <label>Cidade</label>
      <input type="text" className="form-control" id="cidade" name="cidade" />
      <label>CEP</label>
      <input type="text" className="form-control" id="cep" name="cep" />
      <label>Estado</label>
      <select id="estado" className="form-control" name="estado">
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espírito Santo</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MG">Minas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
      </select>
      <Link to="/dadosPessoais">
        <button className="btn btn-light" type="button">
          Voltar
        </button>
      </Link>
      <Link to="/agradecimento">
        <button className="btn btn-light" type="button">
          Cadastrar
        </button>
      </Link>
    </div>
  );
}

export default Endereco;
