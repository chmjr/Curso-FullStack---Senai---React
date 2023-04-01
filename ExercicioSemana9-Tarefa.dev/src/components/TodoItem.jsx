import { useToDos } from "../contexts/useToDos";

export const TodoItem = ({ todo }) => {
  const { markTodo, removeToDo } = useToDos();

  return (
    <li className="list-group-item list-group-item-light d-flex justify-content-between align-items-center list-group-item-custom">
      <input
        onChange={() => markTodo(todo.id)}
        role="button"
        className="form-check-input me-1"
        type="checkbox"
        checked={todo.done}
        id={`${todo.id}-done-checkbox`}
      />
      <label
        className="form-check-label text-start"
        htmlFor={`${todo.id}-done-checkbox`}
      >
        {todo.text}
      </label>

      <button
        className="btn btn-outline-danger bg-light"
        type="submit"
        id="button-addon2"
        onClick={() => removeToDo(todo.id)}
      >
        Excluir Tarefa
      </button>
    </li>
  );
};
