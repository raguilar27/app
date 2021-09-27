import { useState } from "react";

const Counters = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>{counter}</h1>
      <button className="button1" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counters;
