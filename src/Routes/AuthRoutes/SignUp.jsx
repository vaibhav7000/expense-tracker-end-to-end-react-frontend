import { useState } from "react";

export default function SignUp() {
    const [userame, setUsername] = useState("");
    const [password, setPassword] = useState("");


    function updateUsername(event) {
        setUsername(event.targert.value);
    }

    function updatePassword(event) {
        setPassword(event.targert.value);
    }

    return (
        <>
            <div className="usename-container" style={{

            }}>
                <input value={userame} placeholder="Enter your username" onInput={updateUsername} />
            </div>

            <div className="password-container" style={{}}>
                <input value={password} placeholder="Enter the password" onInput={updatePassword} />
            </div>

            <button onClick={function() {

            }}>Sign In</button>
        </>
    )

}