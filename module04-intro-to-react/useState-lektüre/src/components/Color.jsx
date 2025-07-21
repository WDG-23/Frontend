const Color = ({ color, setColor }) => {
  const changeColor = () => {
    setColor((prev) => (prev === "Blue" ? "Red" : "Blue")); //Re-Render passiert erst nach Durchlauf der restlichen
  };
  return (
    <>
      <h1>{color}</h1>
      <button onClick={changeColor}>Change state color</button>
    </>
  );
};

export default Color;
