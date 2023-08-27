import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  resetAction,
} from "../actions/counterActions";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAction());
  };

  const handleDecrement = () => {
    dispatch(decrementAction());
  };

  const handleReset = () => {
    dispatch(resetAction());
  };

  return (
    <div>
      <h2>Redux Counter App</h2>
      <h3>Count: {count}</h3>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button className="mx-2" onClick={handleDecrement}>
        Decrement
      </Button>
      <Button onClick={handleReset} className={count === 0 ? "disabled" : ""}>
        Reset
      </Button>
    </div>
  );
};

export default Counter;
