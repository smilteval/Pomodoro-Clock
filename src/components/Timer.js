import React, {useState, useEffect} from "react"
import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format"

momentDurationFormatSetup(moment);

export default function Timer(props) {

    let {sessionLengthInSeconds} = props; 
    let [timeLeft, setTimeLeft] = useState(sessionLengthInSeconds);

    //turn time into mm::dd format
    let formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss");

    //change time whenever session length changes
    useEffect(() => {
        setTimeLeft(sessionLengthInSeconds);
    }, [sessionLengthInSeconds])

    let handleStartStopClick = () => {
        
        //decrement time left by one every second
        setInterval(() => {
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
    }

    return (
        <div>
            <p>Time Left</p>
            <div>{formattedTimeLeft}</div>
            <button id = "start" onClick={handleStartStopClick}>Start</button>
        </div>
    )
}
