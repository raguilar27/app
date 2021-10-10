import "./App.css";
import Api from "./components/other/api";
import Counters from "./components/other/counters";
import Anecdotes from "./components/part1/anecdotesDir/Anecdotes";
import Courses from "./components/part2/courseDir/Courses";
import Countries from "./components/part3/countriesDir/Countries";
import Phonebook from "./components/part2/phonebookDir/Phonebook";
import Unicafe from "./components/part1/unicafeDir/Unicafe";

function App() {
  return (
    <div className="App">
      {/*<Counters />
      <Api /> 
      <Anecdotes />
      <Unicafe />
      <Courses />
      <Phonebook />*/}
      <Courses />
    </div>
  );
}

export default App;
