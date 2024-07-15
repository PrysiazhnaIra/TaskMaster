import { useState } from "react";
import "./App.css";
import Background from "./components/Background/Background";

function App() {
  const [currentColor, setCurrentColor] = useState("#FF69B4");

  const handleChangeColor = (color) => {
    setCurrentColor(color);
  };
  return (
    <>
      <Background
        currentColor={currentColor}
        onChangeColor={handleChangeColor}
      />
      <h1>TaskMaster</h1>
      <p>Vite + React project</p>
    </>
  );
}

export default App;
