import { SCFormUser } from "../styles/SCFormUser";

export const ListaUsuarios = () => {
  const usuarios = JSON.parse(localStorage.getItem("usuario")) || [];

  return (
    <SCFormUser>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Email / Login</th>
            <th>Celular</th>
            <th>Editar</th>
            <th>Excluir</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.cpf}>
              <td>{usuario.nome}</td>
              <td>{usuario.cpf}</td>
              <td>{usuario.email}</td>
              <td>{usuario.celular}</td>
              <td>
                <button>Editar</button>
              </td>
              <td>
                <button>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </SCFormUser>
  );
};
