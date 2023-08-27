import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2> Basic Counter App</h2>
      <h3>Count: {count}</h3>
      <Button
        onClick={() => {
          setCount(count + 1);
        }}
        className={count > 10 ? "disabled" : ""}
      >
        Increment
      </Button>
      <Button
        className={count < -5 ? "disabled mx-2" : "mx-2"}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </Button>
      <Button
        onClick={() => {
          setCount(0);
        }}
        className={count === 0 ? "disabled" : ""}
      >
        Reset
      </Button>
    </>
  );
}

export default App;
