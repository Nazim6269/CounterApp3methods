import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./CounterSlice";

const CounterView = () => {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div>
      <h3>Count: {count}</h3>
      <Button onClick={handleIncrement}>Increment</Button>
      <Button className="mx-2" onClick={handleDecrement}>
        Decrement
      </Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

export default CounterView;
