import "./App.css";
import Break from "./components/Break"
import Session from "./components/Session"
import Timer from "./components/Timer"
import React, {useState, useEffect} from "react"

function App() {

  let [sessionLengthInSeconds, setSessionLength] = useState(1500);    
  let [breakLengthInSeconds, setBreakLength] = useState(300); 
  let [timerStatus, setTimerStatus] = useState(null);
  let [currentSessionType, setCurrentSessionType] = useState("Session");
  let [timeLeft, setTimeLeft] = useState(sessionLengthInSeconds);

  //increases the session timer by 1 minute
  let incrementSessionLength = () =>{
      let newSessionLength = sessionLengthInSeconds + 60;

      //can't have a session for more than 60 mins
      if(newSessionLength <= 3600){
        setSessionLength(newSessionLength);
      }
  }

  //decreases the session timer by 1 minute
  let decrementSessionLength = () =>{
      let newSessionLength = sessionLengthInSeconds - 60;

      if(newSessionLength > 0){
        setSessionLength(newSessionLength);
      }
  }

  //increases the break timer by 1 minute
  let incrementBreakLength = () =>{

      let newBreakLength = breakLengthInSeconds + 60; 

      //can't take a break for more than 60 mins
      if(newBreakLength <= 3600){
        setBreakLength(newBreakLength);
      }
  }

  //decreases the break timer by 1 minute
  let decrementBreakLength = () =>{
      let newBreakLength = breakLengthInSeconds - 60;

      if(newBreakLength > 0){
        setBreakLength(newBreakLength);
      }
  }

  //resets the timer

  let handleResetButton = () => {
    clearInterval(timerStatus);
    setTimerStatus(null);
    setCurrentSessionType("Session");
    setSessionLength(1500);
    setBreakLength(300);
    setTimeLeft(1500);
  }

  //change time whenever session length changes
  useEffect(() => {
    setTimeLeft(sessionLengthInSeconds);
  }, [sessionLengthInSeconds])

  useEffect(()=>{

    //if the time run out
      if(timeLeft === 0){

        //switch sessions
        if(currentSessionType === "Session"){
          setCurrentSessionType("Break");
          setTimeLeft(breakLengthInSeconds);
        }
        else if(currentSessionType === "Break"){
          setCurrentSessionType("Session");
          setTimeLeft(sessionLengthInSeconds);
        }
      }
    }, [breakLengthInSeconds, currentSessionType, sessionLengthInSeconds, timeLeft]);

  let handleStartStopClick = () => {

    if(timerStatus !== null){ //if the timer has started
        
        //Stop the timer
        clearInterval(timerStatus);

        //indicate that the timer stopped
        setTimerStatus(null);
    }
    else{ //if the timer hasn't started

        //start the timer 
        let newTimerStatus = setInterval(() => {
            setTimeLeft(prevTimeLeft => prevTimeLeft -1)
        }, 1000); //in milliseconds

        //indicate that the timer started
        setTimerStatus(newTimerStatus);
    }
}

  return (
    <div className="App">
      <h1>Pomodoro Clock</h1>
      
      <Timer
          currentSessionType = {currentSessionType}
          handleStartStopClick = {handleStartStopClick}
          handleResetButton = {handleResetButton}
          timerStatus = {timerStatus}
          timeLeft = {timeLeft}
      />

      <div id="time-setting-sections">
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
      </div>
      
    </div>
  );
}

export default App;
