import "./App.css";
import Break from "./components/Break"
import Session from "./components/Session"
import Timer from "./components/Timer"
import React, {useState} from "react"

function App() {

  let [sessionLengthInSeconds, setSessionLength] = useState(1500);    
  let [breakLengthInSeconds, setBreakLength] = useState(300); 

  //increases the session timer by 1 minute
  let incrementSessionLength = () =>{
      setSessionLength(sessionLengthInSeconds + 60);
  }

  //decreases the session timer by 1 minute
  let decrementSessionLength = () =>{
      let newSessionLength = sessionLengthInSeconds - 60;

      if(newSessionLength < 0){
          setSessionLength(0);
      }
      else{
          setSessionLength(newSessionLength);
      }
  }

  //increases the break timer by 1 minute
  let incrementBreakLength = () =>{
      setBreakLength(breakLengthInSeconds + 60);
  }

  //decreases the break timer by 1 minute
  let decrementBreakLength = () =>{
      let newBreakLength = breakLengthInSeconds - 60;

      if(newBreakLength < 0){
          setBreakLength(0);
      }
      else{
          setBreakLength(newBreakLength);
      }
  }


  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      <Break
        breakLengthInSeconds = {breakLengthInSeconds}
        incrementBreakLength = {incrementBreakLength}
        decrementBreakLength = {decrementBreakLength}
      />
      <Session
        sessionLengthInSeconds = {sessionLengthInSeconds}
        incrementSessionLength = {incrementSessionLength}
        decrementSessionLength = {decrementSessionLength}
      />
      <Timer
        sessionLengthInSeconds = {sessionLengthInSeconds}
        breakLengthInSeconds = {breakLengthInSeconds}
      />
    </div>
  );
}

export default App;
