import { useContext } from "react";
import { Link } from "react-router-dom";
import { productContext, useProducts } from "../../context/context";

export const Header = () => {
  const context = useProducts;
  return (
    <header className="header__container">
      <div className="header__logo">
        <h1>App Exemplo</h1>
      </div>
      <nav className="header__navigation">
        <ul className="header__navlinks">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/usuario">Usuario</Link>
          </li>
        </ul>
      </nav>
      <div>{context.productContex}</div>
    </header>
  );
};
