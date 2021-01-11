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
        <div class="sessionType-section">
            <h3>Session</h3>
            <div class="sessionType-time">
                <button class="decrement" onClick={decrementSessionLength}>-</button>
                <p>{sessionLengthInMinutes} mins</p>
                <button class="increment" onClick={incrementSessionLength}>+</button>
            </div>
        </div>
    )
}
