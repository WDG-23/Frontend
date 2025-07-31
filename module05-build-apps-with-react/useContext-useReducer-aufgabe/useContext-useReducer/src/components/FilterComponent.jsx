import { useTodos } from "../context/TodosProvider";

const FilterComponent = () => {
  const { dispatch, state } = useTodos();

  return (
    <div className="mb-4 flex space-x-2">
      {["all", "completed", "active"].map((filter, i) => (
        <button
          key={i}
          onClick={() => dispatch({ type: "SET_FILTER", payload: filter })}
          className={`bg-gray-200 px-3 py-1 rounded capitalize ${
            state.filter === filter
              ? "border-solid border-4 border-blue-500"
              : ""
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};

export default FilterComponent;
