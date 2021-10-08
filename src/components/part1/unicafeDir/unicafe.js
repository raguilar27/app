import Button from "./button";
import Statistics from "./statistics";
import { useState } from "react";

const Unicafe = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [data, setData] = useState([]);

  const stats = {
    handleGood: () => {
      setData(data.concat(1));
      setGood(good + 1);
    },
    handleNeutral: () => {
      setData(data.concat(0));
      setNeutral(neutral + 1);
    },
    handleBad: () => {
      setData(data.concat(-1));
      setBad(bad + 1);
    },
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={stats.handleGood} text="good" />
      <Button handleClick={stats.handleNeutral} text="neutral" />
      <Button handleClick={stats.handleBad} text="bad" />
      <h1>statistics</h1>
      <table>
        <Statistics data={data} good={good} neutral={neutral} bad={bad} />
      </table>
    </div>
  );
};

export default Unicafe;
