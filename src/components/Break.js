import React from "react"
import {useState} from "react"
import moment from "moment"

export default function Break() {
    
    let [breakLengthInSeconds, setBreakLength] = useState(300);    
    let breakLengthInMinutes = moment.duration(breakLengthInSeconds,"s").minutes();
    
    return (
        <div>
            <p>Break</p>
            <p>{breakLengthInSeconds}</p>
            <p>{breakLengthInMinutes}</p>
        </div>
    )
}
