import "./App.css";
import { useState } from "react";
import Color from "./components/Color";
import Color2 from "./components/Color2";

const App = () => {
  const [color, setColor] = useState("Red");

  return (
    <>
      <Color color={color} setColor={setColor} />
      <Color2 />
    </>
  );
};

export default App;
