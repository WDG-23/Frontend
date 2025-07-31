import { useState } from "react";
import { Slide, ToastContainer, toast } from "react-toastify";
import { useTodos } from "../context/TodosProvider";

const AddToDo = () => {
  const { dispatch } = useTodos();
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;
    dispatch({ type: "ADD_TODO", payload: newTodo });
    setNewTodo("");
    toast.success("Neues Todo erstellt");
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
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
    </form>
  );
};

export default AddToDo;
