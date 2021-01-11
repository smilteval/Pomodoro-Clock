import React from "react"
import moment from "moment"

export default function Session(props) {
    
    let {
        sessionLengthInSeconds,
        decrementSessionLength,
        incrementSessionLength,
    } = props;

    let sessionLengthInMinutes = moment.duration(sessionLengthInSeconds,"s").minutes();
    
    return (
        <div>
            <p>Session</p>
            <p>{sessionLengthInMinutes}</p>
            <button id="increment-session" onClick={incrementSessionLength}>+</button>
            <button id="decrement-session" onClick={decrementSessionLength}>-</button>
        </div>
    )
}
