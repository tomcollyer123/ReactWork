import { useEffect, useState } from "react";

const Clock = () => {


    // Use state to store and set the current time
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [start, setStart] = useState(false);
    // Use useEffect to console.log and run a function in 1 second
    // First param to pass in is the function of what you want it to do on re render
    useEffect(() => {
        // Set timeout takes in param and time, does the param (function) after the time is up
        setTimeout(tick, 1000);

        // Passing in time as a variable [], whenever time changes, do the useEffect
    }, [start]);

    // Some function to set the current time
    const tick = () => {
        // I want to set the state to the current time
        setTime(new Date().toLocaleTimeString());
    }

    return (
        <div>
            <h3> Clock </h3>
            <h2> Time is {time} </h2>
            <button type='button' onClick={() => setStart(!start)}> Click me to change the time </button>
        </div>
    );
}

export default Clock;