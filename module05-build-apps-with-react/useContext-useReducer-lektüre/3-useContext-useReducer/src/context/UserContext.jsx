import { createContext, useContext, useReducer } from "react";

const UserContext = createContext();

const initialState = {
  user: "John",
  age: 30,
};

const ACTIONS = {
  INCREMENT_AGE: "INCREMENT_AGE",
  DECREMENT_AGE: "DECREMENT_AGE",
};

const userReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.INCREMENT_AGE:
      return { ...state, age: state.age + 1 };
    case ACTIONS.DECREMENT_AGE:
      return { ...state, age: state.age - 1 };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  const incrementAge = () => {
    dispatch({ type: ACTIONS.INCREMENT_AGE });
  };

  const decrementAge = () => {
    dispatch({ type: ACTIONS.DECREMENT_AGE });
  };

  const value = {
    user: state.user,
    age: state.age,
    incrementAge,
    decrementAge,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser muss sich in einem UserProvider befinden!");
  }
  return context;
};

export { UserProvider };
export default UserContext;
