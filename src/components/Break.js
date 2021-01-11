import React from "react"
import {useState} from "react"
import moment from "moment"

export default function Break() {
    
    let [breakLengthInSeconds, setBreakLength] = useState(300);    
    let breakLengthInMinutes = moment.duration(breakLengthInSeconds,"s").minutes();
    
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

    return (
        <div>
            <p>Break</p>
            <p>{breakLengthInSeconds}</p>
            <p>{breakLengthInMinutes}</p>
            <button id="increment-break" onClick={incrementBreakLength}>+</button>
            <button id="decrement-break" onClick={decrementBreakLength}>-</button>
        </div>
    )
}
