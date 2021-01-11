import moment from "moment"
import momentDurationFormatSetup from "moment-duration-format"

momentDurationFormatSetup(moment);

export default function Timer(props) {

    let {
        currentSessionType,
        handleStartStopClick,
        timerStatus,
        timeLeft,
        handleResetButton,
    } = props;

    //turn time into mm::dd format
    let formattedTimeLeft = moment.duration(timeLeft, "s").format("mm:ss", {trim: false});
    
    return (
        <div id="main-timer">
            <p id="timer-label">{currentSessionType}</p>
            <div id="time">{formattedTimeLeft}</div>

            {/* if the timer has started, display "Stop" text on the button, if it hasn't, diplay "Start" */}
            <button id="start" onClick={handleStartStopClick}>{timerStatus !== null ? "Stop" : "Start"}</button>
            <button id="reset" onClick={handleResetButton}>Reset</button>
        </div>
    )
}
