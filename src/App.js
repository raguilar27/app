import "./App.css";
import Api from "./components/api";
import Counters from "./components/counters";
import Header from "./components/header";
import Content from "./components/content";
import Total from "./components/total";
import Button from "./components/button";
import Statistics from "./components/statistics";
import { useState } from "react";

function App() {
  /*const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercise: 10,
      },
      {
        name: "Using props to pass data",
        exercise: 7,
      },
      {
        name: "State of a component",
        exercise: 14,
      },
    ],
  };*/

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
    <div className="App">
      {/*<Counters />
      <br />
      <Api />
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />*/}
      <h1>give feedback</h1>
      <Button handleClick={stats.handleGood} text="good" />
      <Button handleClick={stats.handleNeutral} text="neutral" />
      <Button handleClick={stats.handleBad} text="bad" />
      <Statistics data={data} good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
