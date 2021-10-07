import "./App.css";
import Api from "./components/api";
import Counters from "./components/counters";
import Course from "./components/courseDir/course";
import Unicafe from "./components/unicafeDir/unicafe";
import Anecdotes from "./components/anecdotesDir/anecdotes";

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
