import PropType from "prop-types";

function Rodape(props) {
  return (
    <div>
      <p>Tempo de preparo: {props.tempoPreparo}</p>
      <p>Rendimento: {props.rendimento}</p>
    </div>
  );
}
Rodape.PropType = {
  tempoPreparo: PropType.string,
  rendimento: PropType.string,
};

export default Rodape;
