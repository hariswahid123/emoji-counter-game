import React, { useState } from "react";
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="App" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> 😊 Emoji Counter Game</h1>
      <div style={{ fontSize: "100px" }}> 😊   </div>
      <h2>Count: {count}</h2>

      {count === 10 && <p style={{ color: "green" }}>🎉 You reached 10! 🎉</p>}

      <div>
        <button onClick={increase} className="m-3 pt-2 pb-2 pl-4 pr-4  border-[1px] hover:bg-[#000] hover:text-[#fff] duration-500 " >Increase</button>
        <button onClick={decrease} className="m-3 pt-2 pb-2 pl-4 pr-4  border-[1px] hover:bg-[#000] hover:text-[#fff] duration-500 " >Decrease</button>
        <button onClick={reset} className="m-3 pt-2 pb-2 pl-4 pr-4  border-[1px] hover:bg-[#000] hover:text-[#fff] duration-500 ">Reset</button>
      </div>
    </div>
  );
}

export default App;