import PropType from "prop-types";
const Imagem = (props) => {
  return (
    <div>
      <img src={props.src} alt={props.alt}></img>
    </div>
  );
};
Imagem.propType = {
  src: PropType.string,
  alt: PropType.string.isRequired,
};

export default Imagem;
