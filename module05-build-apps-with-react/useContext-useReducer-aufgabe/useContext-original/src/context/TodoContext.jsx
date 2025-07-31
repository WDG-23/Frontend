import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const [filter, setFilter] = useState("all");

  return (
    <TodoContext value={{ todos, setTodos, filter, setFilter }}>
      {children}
    </TodoContext>
  );
};

export const useTodos = () => {
  const context = useContext(TodoContext);
  if (!context)
    throw new Error(
      "useTodos muss sich in einem TodoContextProvider befinden!"
    );
  return context;
};

export default TodoContextProvider;
