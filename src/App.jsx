import { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("");

  function handleClick(value) {
    setDisplay(display + value);
  }

  function calculate() {
    try {
      const result = eval(display);
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  }

  function clear() {
    setDisplay("");
  }

  return (
    <div>
      <h2>Calculator</h2>

      <div style={{ border: "1px solid gray", padding: "10px", width: "170px" }}>
        
        <div style={{ background: "lightgray", padding: "10px", textAlign: "right" }}>
          {display || "0"}
        </div>

        <div>
          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
        </div>

        <div>
          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
        </div>

        <div>
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
        </div>

        <div>
          <button onClick={clear}>C</button>
          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={calculate}>=</button>
        </div>

        <div>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("-")}>-</button>
          <button onClick={() => handleClick("*")}>*</button>
          <button onClick={() => handleClick("/")}>/</button>
        </div>

      </div>
    </div>
  );
}
