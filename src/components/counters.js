import React from "react";
import { useState } from "react";

const Counters = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button class="button1" onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};

export default Counters;
