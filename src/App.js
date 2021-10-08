import "./App.css";
import Api from "./components/other/api";
import Counters from "./components/other/counters";
import Courses from "./components/part2/courseDir/Courses";
import Unicafe from "./components/part1/unicafeDir/Unicafe";
import Anecdotes from "./components/part1/anecdotesDir/Anecdotes";

function App() {
  return (
    <div className="App">
      {/*<Counters />
      <br />
      <Api /> 
      <Anecdotes />
      <Unicafe />*/}
      <Courses />
    </div>
  );
}

export default App;
