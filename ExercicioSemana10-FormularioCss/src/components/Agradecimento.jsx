import { Link } from "react-router-dom";

function Agradecimento() {
  return (
    <div className="agradecimento">
      <h1>Obrigado por se cadastrar!</h1>
      <p>
        Em breve você receberá um e-mail com as instruções para acessar a
        plataforma.
      </p>
      <select
        name="redeSocial"
        id="redeSocial"
        className="form-select form-select-sm"
        aria-label=".form-select-sm example"
      >
        <option value="site">Site</option>
        <option value="instagram">Instagram</option>
        <option value="linkedin">Linkedin</option>
      </select>
      <Link to="/endereco">
        <button className="btn btn-light" type="button">
          Voltar
        </button>
      </Link>
    </div>
  );
}

export default Agradecimento;
