import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  
  const handleOperation = (operation) => {
    const parsedValue = parseInt(inputValue);
    if (!isNaN(parsedValue)) {
      if (operation === 'increment') {
        setCount(count + parsedValue);
      } else if (operation === 'decrement') {
        setCount(count - parsedValue);
      }
    }
    setInputValue('');
  };
  
  return (
    <div className="container my-5">
      <div className="card text-center my-5">
        <div className="card-body">
          <h1>Counter-App</h1>
          <h2 className="my-5">{count}</h2>
          <input type="number" value={inputValue} onChange={handleInputChange}></input>
          <button className="btn btn-success mx-3"onClick={handleOperation}>Increment</button>

          <button className="btn btn-danger mx-3" onClick={handleOperation}>Decrement</button>
        </div>
      </div>
    </div>
    
  );
};

export default App;
