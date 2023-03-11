import propType from "prop-types";

const Ingredientes = (props) => {
  const listaIngredientes = props.ingrediente.map((ingrediente) => {
    return <li>{ingrediente}</li>;
  });
  return <ul>{listaIngredientes}</ul>;
};

Ingredientes.propType = {
  ingrediente: propType.array,
};

export default Ingredientes;
