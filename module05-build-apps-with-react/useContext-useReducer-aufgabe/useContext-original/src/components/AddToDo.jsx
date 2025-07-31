import { useState } from "react";
import { useTodos } from "../context/TodoContext";
import { ToastContainer, toast } from "react-toastify";

const AddToDo = () => {
  const { setTodos } = useTodos();

  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newTodo) return;

    setTodos((prevTodos) => {
      const newState = [
        { id: Date.now(), text: newTodo, completed: false },
        ...prevTodos,
      ];
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    });
    setNewTodo("");
    toast("Neues Todo erstellt");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex">
      <input
        type="text"
        name="todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new to-do"
        className="flex-1 border rounded px-2 py-1 mr-2"
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
      >
        Add
      </button>
      <ToastContainer />
    </form>
  );
};

export default AddToDo;
