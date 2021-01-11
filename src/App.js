import "./App.css";
import Break from "./components/Break"
import Session from "./components/Session"


function App() {
  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <Break/>
      <Session/>
    </div>
  );
}

export default App;
