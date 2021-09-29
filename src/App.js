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

  const goodClick = () => setGood(good + 1);
  const neutralClick = () => setNeutral(neutral + 1);
  const badClick = () => setBad(bad + 1);

  const manipulateData = () => {};

  return (
    <div className="App">
      {/*<Counters />
      <br />
      <Api />
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />*/}
      <h1>give feedback</h1>
      <Button onClick={goodClick} text="good" />
      <Button onClick={neutralClick} text="neutral" />
      <Button onClick={badClick} text="bad" />
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <Statistics data={data} />
    </div>
  );
}

export default App;
