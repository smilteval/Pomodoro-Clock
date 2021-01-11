import React, {useState, useEffect} from "react"
import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format"

momentDurationFormatSetup(moment);

export default function Timer(props) {

    let {
        sessionLengthInSeconds,
        breakLengthInSeconds,
    } = props;

    let [timerStatus, setTimerStatus] = useState(null);
    let [timeLeft, setTimeLeft] = useState(sessionLengthInSeconds);
    let [currentSessionType, setCurrentSessionType] = useState("Session");

    //turn time into mm::dd format
    let formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", {trim: false});

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
        <div>
            <p>Time Left</p>
            <p id = "timer-label">{currentSessionType}</p>
            <div>{formattedTimeLeft}</div>

            {/* if the timer has started, display "Stop" text on the button, if it hasn't, diplay "Start" */}
            <button id = "start" onClick={handleStartStopClick}>{timerStatus !== null ? "Stop" : "Start"}</button>
        
        </div>
    )
}
