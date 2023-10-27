import React, { useState } from "react";
import "./App.css";

function App() {
  const [num, newvalue] = useState(0);

  const incre = () => {
    newvalue(num + 1);
  };
  const decre = () => {
    newvalue(num - 1);
  };
  if (num < 0) {
    newvalue(0);
  }
  const reset = () => {
    alert("ALL DATA IS CLEAR");
    newvalue(0);
  };

  return (
    <div className="coan">
      <h1>COUNTER</h1>
      <div>
        <h2>{num}</h2>
        <div className="btns">
          <button className="bi" onClick={incre}>
            <b>INCREMENT</b>
          </button>
          <button className="br" onClick={reset}>
            <b>RESET</b>
          </button>
          <button className="bd" onClick={decre}>
            <b>DECREMENT</b>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
