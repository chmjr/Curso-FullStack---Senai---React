import { Link } from "react-router-dom";
import logo from "../util/logo.png";
import { MdLocalPharmacy } from "react-icons/Md";
import { GiRemedy } from "react-icons/Gi";
import { AiOutlineUser } from "react-icons/Ai";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

function Header() {
  const { isLoggedIn } = useContext(AuthContext);
  const [isLoggedInState, setIsLoggedInState] = useState(isLoggedIn);
  useEffect(() => {
    setIsLoggedInState(isLoggedIn);
  }, [isLoggedIn]);

  console.log(isLoggedIn);
  return (
    <header>
      <div className="topo">
        <div className="topoLogo">
          <img src={logo} width={250}></img>
        </div>
        <div className="topoMenu">
          <nav>
            <ul>
              {isLoggedInState ? ( // se o usuário estiver logado, mostra o menu
                <>
                  <li>
                    <Link to="/gerenciarFarmacias">
                      {<MdLocalPharmacy />} Gerenciar Farmácias
                    </Link>
                  </li>
                  <li>
                    <Link to="/gerenciarMedicamentos">
                      {<GiRemedy />}Gerenciar Medicamentos
                    </Link>
                  </li>
                  <li>
                    <Link to="/gerenciarUsuarios">
                      {<AiOutlineUser />}Gerenciar Usuários
                    </Link>
                  </li>
                </>
              ) : null}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
