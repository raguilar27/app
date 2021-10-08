import "./App.css";
import Api from "./components/other/api";
import Counters from "./components/other/counters";
import Course from "./components/part1/courseDir/course";
import Unicafe from "./components/part1/unicafeDir/unicafe";
import Anecdotes from "./components/part1/anecdotesDir/anecdotes";

function App() {
  return (
    <div className="App">
      {/*<Counters />
      <br />
      <Api /> 
      <Course />
      <Unicafe />*/}
      <Anecdotes />
    </div>
  );
}

export default App;
