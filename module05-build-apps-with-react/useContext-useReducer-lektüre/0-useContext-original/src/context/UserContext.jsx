import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: "John",
    age: 30,
    email: "johnjohn@email.com",
  });
  return <UserContext value={user}>{children}</UserContext>;
};

export default UserContext;
