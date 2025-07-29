import { useContext } from "react";
import UserContext from "../context/UserContext";

const ComponentC = () => {
  const user = useContext(UserContext);

  return (
    <div className="m-1 p-4 border-black border-2">
      <h1 className="font-bold">ComponentC</h1>
      <h2>
        {user.name}, {user.age}, {user.email}
      </h2>
    </div>
  );
};

export default ComponentC;
