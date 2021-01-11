import React, {useState, useEffect} from "react"
import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format"

momentDurationFormatSetup(moment);

export default function Timer(props) {

    let {sessionLengthInSeconds} = props; 
    let [timeLeft, setTimeLeft] = useState(sessionLengthInSeconds);
    
    //change time whenever session length changes
    useEffect(() => {
        setTimeLeft(sessionLengthInSeconds);
    }, [sessionLengthInSeconds])

    //turn time into mm::dd format
    let formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss");

    return (
        <div>
            <p>Time Left</p>
            <div>{formattedTimeLeft}</div>
        </div>
    )
}
