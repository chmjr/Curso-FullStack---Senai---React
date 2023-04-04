import logo from "../img/logoSF.png";
import { AiOutlineHome } from "react-icons/Ai";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import { AiOutlineUser } from "react-icons/Ai";

function Header() {
  return (
    <header>
      <div className="topo">
        <div className="topoLogo">
          <img src={logo} width="150px"></img>
        </div>
        <div className="topoMenu">
          <nav>
            <ul>
              <li>
                <a>{<AiOutlineHome />} Home</a>
              </li>
              <li>
                <a>{<AiOutlineShoppingCart />} Ache um presente</a>
              </li>
              <li>
                <a>{<AiOutlineUser />}Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
