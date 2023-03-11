import PropType from "prop-types";
const Cabecalho = ({ titulo, descricao }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      <p>{descricao}</p>
    </div>
  );
};

Cabecalho.PropType = {
  titulo: PropType.string.isRequired,
  descricao: PropType.string.isRequired,
};
export default Cabecalho;
