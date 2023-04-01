import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="barraTopo">
      <nav className="navbar navbar-expand-lg  container d-flex  ">
        <span className="flex-grow-1">Tarefas.dev</span>
        <ul className="navbar-nav ">
          <li className="nav-item me-auto">
<<<<<<< HEAD
            <Link
              className="nav-link active text-white font-weight-bold"
              to="/home"
            >
=======
            <a className="nav-link active" aria-current="page" href="#">
>>>>>>> a0259aeba3510e950ac5ecd8059ce7f565d874d7
              Home
            </Link>
          </li>
          <li className="nav-item">
<<<<<<< HEAD
            <Link
              className="nav-link active text-white font-weight-bold"
              to="/quem-sou"
            >
=======
            <a className="nav-link" href="#">
>>>>>>> a0259aeba3510e950ac5ecd8059ce7f565d874d7
              Quem sou
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
