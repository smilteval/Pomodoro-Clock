import React, {useState} from "react"

export default function Timer(props) {

    let {sessionLengthInSeconds} = props; 
    let [timeLeft, setTimeLeft] = useState(sessionLengthInSeconds);
    
    return (
        <div>
            <p>Time Left</p>
            <div>{timeLeft}</div>
        </div>
        
    )
}
