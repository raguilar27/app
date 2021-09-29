import "./App.css";
import Api from "./components/api";
import Counters from "./components/counters";
import Header from "./components/header";
import Content from "./components/content";
import Total from "./components/total";

function App() {
  const course = {
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
  };

  return (
    <div className="App">
      {/*<Counters />
      <br />
      <Api />*/}
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
}

export default App;
