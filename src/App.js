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

  //resets the timer

  let handleResetButton = () => {

    //clear the interval

  }

  //change time whenever session length changes
  useEffect(() => {
    setTimeLeft(sessionLengthInSeconds);
  }, [sessionLengthInSeconds])

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
            setTimeLeft(prevTimeLeft => {

                //decrement time left by one every second
                let newTimeLeft = prevTimeLeft - 1;

                if(newTimeLeft >= 0){
                    return newTimeLeft;
                }

                //once the time runs out

                //if in session, switch to break
                if(currentSessionType === "Session"){
                    setCurrentSessionType("Break");
                    setTimeLeft(breakLengthInSeconds);
                }

                //if on break, switch to session
                if(currentSessionType === "Break"){
                    setCurrentSessionType("Session");
                    setTimeLeft(sessionLengthInSeconds);
                }
            })
        }, 100); //in milliseconds

        //indicate that the timer started
        setTimerStatus(newTimerStatus);
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
        currentSessionType = {currentSessionType}
        handleStartStopClick = {handleStartStopClick}
        timerStatus = {timerStatus}
        timeLeft = {timeLeft}
      />
    </div>
  );
}

export default App;
