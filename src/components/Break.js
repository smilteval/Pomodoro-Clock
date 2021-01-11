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
        <div>
            <p>Break</p>
            <p>{breakLengthInMinutes}</p>
            <button id="increment-break" onClick={incrementBreakLength}>+</button>
            <button id="decrement-break" onClick={decrementBreakLength}>-</button>
        </div>
    )
}
