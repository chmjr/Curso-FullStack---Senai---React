import PropTypes from "prop-types";

function Header(props) {
  return (
    <header>
      <h1>{props.titulo}</h1>
    </header>
  );
}

Header.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default Header;
