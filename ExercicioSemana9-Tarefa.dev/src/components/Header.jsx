import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="barraTopo">
      <nav className="navbar navbar-expand-lg  container d-flex  ">
        <span className="flex-grow-1">Tarefas.dev</span>
        <ul className="navbar-nav ">
          <li className="nav-item me-auto">
            <Link
              className="nav-link active text-white font-weight-bold"
              to="/home"
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active text-white font-weight-bold"
              to="/quem-sou"
            >
              Quem sou
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
