import PropTypes from "prop-types";

function GroupInput(props) {
  const { tipo, etiqueta, id, min, step, valor, aoDigitar } = props; // Destructuring Objeto

  return (
    <div>
      <p>
        <label htmlFor={id}>{etiqueta}</label>
        <input
          type={tipo}
          alt={etiqueta}
          id={id}
          required
          min={min}
          step={step}
          value={valor}
          onChange={aoDigitar}
          placeholder=""
        ></input>
      </p>
    </div>
  );
}
GroupInput.propTypes = {
  tipo: PropTypes.string.isRequired,
  etiqueta: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  min: PropTypes.number,
  step: PropTypes.number,
  valor: PropTypes.number.isRequired,
  aoDigitar: PropTypes.func.isRequired,
};

export default GroupInput;
