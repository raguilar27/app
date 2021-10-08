import { useState } from "react";

const Counters = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  const reset = () => setCounter(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button className="button1" onClick={increment}>
        Increment
      </button>
      <button className="button1" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default Counters;
