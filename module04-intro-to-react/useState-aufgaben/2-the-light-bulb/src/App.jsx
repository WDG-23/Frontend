import LightBulb from "./components/LightBulb";
import { useState } from "react";

const App = () => {
  const [isLightOn, setIsLightOn] = useState(false);
  const [counter, setCounter] = useState(0);
  const maxTurns = 10;

  const handleToggle = () => {
    if (!isLightOn && counter >= maxTurns) {
      alert(
        "Du hast das Limit erreicht! Drücke Reset, um die Glühbirne zurückzusetzen!"
      );
      return;
    }

    if (!isLightOn) {
      setCounter((prev) => prev + 1);
    }

    setIsLightOn((prev) => !prev);
  };

  const handleReset = () => {
    setIsLightOn(false);
    setCounter(0);
  };

  const buttonLabel =
    !isLightOn && counter >= maxTurns
      ? "Gesperrt"
      : isLightOn
      ? "Licht ausschalten"
      : "Licht einschalten";

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <button onClick={handleToggle} style={{ marginRight: "1rem" }}>
        {buttonLabel}
      </button>
      <button onClick={handleReset}>Reset</button>
      <p>Du hast die Glühbirne {counter} mal angemacht!</p>
      <LightBulb isLightOn={isLightOn} />
    </div>
  );
};

export default App;
