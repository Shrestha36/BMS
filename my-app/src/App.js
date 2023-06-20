import { Fragment, useState } from "react";
import check from "./check";
import fetchVal from "./fetch";
function App() {
  const [current, setCurret] = useState("");
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState([]);
  const handleCalculation = (number, symbol) => {
    const hist = {
      prev: result,
      sym: symbol,
      number: number,
    };
    if (symbol === "+") {
      hist["result"] = result + number;
      setResult(result + number);
    } else {
      hist["result"] = result - number;
      setResult(result - number);
    }
    setHistory([hist, ...history]);
  };
  const handleChange = (val) => {
    setCurret(val);
  };
  const handleSubmit = () => {
    if (!check(current)) {
      alert("Kindly enter a valid symbol and a number");
      return;
    }
    const { symbol, number } = fetchVal(current);
    handleCalculation(number, symbol);
  };
  return (
    <Fragment>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            boxShadow: "0px 0px 80px 50px #CDCDC9",
            borderRadius: "20px",
            padding: "10%",
          }}
        >
          <div>
            <h2>Counter App</h2>
            <input
              type="text"
              value={current}
              onChange={(e) => handleChange(e.target.value)}
            ></input>
            <button style={{ marginLeft: "3px" }} onClick={handleSubmit}>
              Calculate
            </button>
            <div style={{ marginTop: "10px" }}>Result: {result}</div>
          </div>
          <div style={{ marginTop: "10px" }}>
            <div>History Count ({history.length})</div>
            <div
              style={{
                marginTop: "5px",
                border: "2px solid black",
                maxHeight: "130px",
                overflowY: "scroll",
              }}
            >
              {history.map((item, index) => (
                <div
                  key={index}
                  style={{
                    cursor: "pointer",
                    backgroundColor: index % 2 === 0 ? "white" : "grey",
                    color: index % 2 === 1 ? "white" : "black",
                  }}
                  onClick={() => setResult(item.result)}
                >
                  <span>{item.prev} </span>
                  <span>{item.sym} </span>
                  <span>{item.number} </span>=<span> {item.result}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;