import React, {useState, useEffect} from "react"
import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format"

momentDurationFormatSetup(moment);

export default function Timer(props) {

    let {sessionLengthInSeconds} = props; 

    let [timerStatus, setTimerStatus] = useState(null);
    let [timeLeft, setTimeLeft] = useState(sessionLengthInSeconds);

    //turn time into mm::dd format
    let formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", {trim: false});

    //change time whenever session length changes
    useEffect(() => {
        setTimeLeft(sessionLengthInSeconds);
    }, [sessionLengthInSeconds])

    let handleStartStopClick = () => {

        if(timerStatus !== null){ //if the timer has started
            
            //you can stop the timer
            clearInterval(timerStatus);
        }
        else{ //if the timer hasn't started

            //start the timer 
            //decrement time left by one every second
            let newTimerStatus = setInterval(() => {
                setTimeLeft(prevTimeLeft => {

                    let newTimeLeft = prevTimeLeft - 1;

                    if(newTimeLeft >= 0){
                        return newTimeLeft;
                    }
                    else{
                        return prevTimeLeft;
                    }
                })
            }, 1000); //in milliseconds

            //indicate that the timer started
            setTimerStatus(newTimerStatus);
        }
    }

    return (
        <div>
            <p>Time Left</p>
            <div>{formattedTimeLeft}</div>

            {/* if the timer has started, display "Stop" text on the button, if it hasn't, diplay "Start" */}
            <button id = "start" onClick={handleStartStopClick}>{timerStatus !== null ? "Stop" : "Start"}</button>
        
        </div>
    )
}
