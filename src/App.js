import "./App.css";
import Api from "./components/api";
import Counters from "./components/counters";

function App() {
  return (
    <div className="App">
      <Counters />
      <br />
      <Api />
    </div>
  );
}

export default App;
