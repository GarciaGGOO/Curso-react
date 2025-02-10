
import { useCounterContext } from "../../hooks/useCounterContext";

const ChangeCanter = () => {
  const { increment, decrement } = useCounterContext();
  return (
    <div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default ChangeCanter;
