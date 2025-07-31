import { useTodos } from "../context/TodoContext";

const ToDoItem = ({ todo }) => {
  const { setTodos } = useTodos();

  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      const newState = prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    });
  };

  return (
    <li className="flex items-center mb-2">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="mr-2 cursor-pointer"
      />
      <span
        className={todo.completed ? "line-through text-gray-400" : undefined}
      >
        {todo.text}
      </span>
    </li>
  );
};

export default ToDoItem;
