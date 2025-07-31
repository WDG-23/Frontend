import { createContext, useContext, useReducer } from "react";

export const TodosContext = createContext();

export const useTodos = () => {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error(
      "useTodos muss sich innerhalb eines TodosProvider befinden!"
    );
  }
  return context;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      const newTodo = {
        id: Date.now(),
        text: action.payload,
        completed: false,
      };
      const newTodos = [newTodo, ...state.todos];
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos,
      };
    }
    case "TOGGLE_TODO": {
      const newTodos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return {
        ...state,
        todos: newTodos,
      };
    }
    case "SET_FILTER": {
      return {
        ...state,
        filter: action.payload,
      };
    }
    default:
      return state;
  }
};

const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    filter: "all",
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  });

  const contextValue = { state, dispatch };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
