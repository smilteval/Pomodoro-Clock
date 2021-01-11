import React, {useState} from "react"
import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format"

momentDurationFormatSetup(moment);

export default function Timer(props) {

    let {sessionLengthInSeconds} = props; 
    let [timeLeft, setTimeLeft] = useState(sessionLengthInSeconds);
    let formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss");

    return (
        <div>
            <p>Time Left</p>
            <div>{formattedTimeLeft}</div>
        </div>
    )
}
