import { useState } from "react";

const ControlledInput = () => {

    // Creating state for a username, its starting value is ""
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let tempUser;
    let tempPassword;

    return ( 
        <div>
            <h3> Form </h3>
            <input type="text" name="username"

            // When the Input field detects a change (new key being pressed)
            onChange={(event) => {
                console.log(event.target);
                tempUser = event.target.value;
                console.log(tempUser);
                // setUsername(event.target.value)
            }
            }/>
            <input type="password" name="password"

            onChange={(event) => {
                console.log(event.target);
                tempPassword = event.target.value;
                console.log(tempPassword);
            }
            }/>

            <button type="button" onClick={() => {
                setUsername(tempUser);
                setPassword(tempPassword);
            }} />

            <h3> The username: {username} </h3>
            <h3> The password: {password} </h3>
        </div>
     );
}
 
export default ControlledInput;