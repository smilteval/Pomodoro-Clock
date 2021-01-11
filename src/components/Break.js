import React from "react"
import moment from "moment"

export default function Break(props) {
    
    let {
        breakLengthInSeconds,
        incrementBreakLength,
        decrementBreakLength,
    } = props;

    let breakLengthInMinutes = moment.duration(breakLengthInSeconds,"s").minutes();

    return (
        <div class = "sessionType-section">
            <h3>Break</h3>
            <div class = "sessionType-time">
                <button class="decrement" onClick={decrementBreakLength}>-</button>
                <p>{breakLengthInMinutes} mins</p>
                <button class="increment" onClick={incrementBreakLength}>+</button>
            </div>
        </div>
    )
}
