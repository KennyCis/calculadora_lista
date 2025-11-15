import { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (value) => {
    setDisplay(display + value);
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(String(result));
    } catch {
      setDisplay("Error");
    }
  };

  const clear = () => {
    setDisplay("");
  };


  const btnStyle = {
    width: "40px",
    height: "40px",
    margin: "3px",
    fontSize: "18px",
    background: "lightgray",
  };

  const rowStyle = {
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      <h2>Calculator</h2>

      <div
        style={{
          width: "180px",
          padding: "10px",
          border: "1px solid gray",
          background: "white", 
        }}
      >
        
        <div
          style={{
            background: "lightgray",
            padding: "8px",
            marginBottom: "10px",
            textAlign: "right",
            fontSize: "22px",
          }}
        >
          {display || "0"}
        </div>

        {/* Filas */}
        <div style={rowStyle}>
          <button style={btnStyle} onClick={() => handleClick("1")}>1</button>
          <button style={btnStyle} onClick={() => handleClick("2")}>2</button>
          <button style={btnStyle} onClick={() => handleClick("3")}>3</button>
        </div>

        <div style={rowStyle}>
          <button style={btnStyle} onClick={() => handleClick("4")}>4</button>
          <button style={btnStyle} onClick={() => handleClick("5")}>5</button>
          <button style={btnStyle} onClick={() => handleClick("6")}>6</button>
        </div>

        <div style={rowStyle}>
          <button style={btnStyle} onClick={() => handleClick("7")}>7</button>
          <button style={btnStyle} onClick={() => handleClick("8")}>8</button>
          <button style={btnStyle} onClick={() => handleClick("9")}>9</button>
        </div>

        <div style={rowStyle}>
          <button style={btnStyle} onClick={clear}>C</button>
          <button style={btnStyle} onClick={() => handleClick("0")}>0</button>
          <button style={btnStyle} onClick={calculate}>=</button>
        </div>

        <div style={rowStyle}>
          <button style={btnStyle} onClick={() => handleClick("+")}>+</button>
          <button style={btnStyle} onClick={() => handleClick("-")}>-</button>
          <button style={btnStyle} onClick={() => handleClick("*")}>*</button>
          <button style={btnStyle} onClick={() => handleClick("/")}>/</button>
        </div>
      </div>
    </>
  );
}

