import React from "react"
import {useState} from "react"
import moment from "moment"

export default function Session() {
    
    let [sessionLengthInSeconds, setSessionLength] = useState(1500);    
    let sessionLengthInMinutes = moment.duration(sessionLengthInSeconds,"s").minutes();
    
    //increases the session timer by 1 minute

    let incrementSessionLength = () =>{
        setSessionLength(sessionLengthInSeconds + 60);
    }

    //decreases the session timer by 1 minute
    let decrementSessionLength = () =>{
        let newSessionLength = sessionLengthInSeconds - 60;

        if(newSessionLength < 0){
            setSessionLength(0);
        }
        else{
            setSessionLength(newSessionLength);
        }
    }

    return (
        <div>
            <p>Session</p>
            <p>{sessionLengthInSeconds}</p>
            <p>{sessionLengthInMinutes}</p>
            <button id="increment-session" onClick={incrementSessionLength}>+</button>
            <button id="decrement-session" onClick={decrementSessionLength}>-</button>
        </div>
    )
}
