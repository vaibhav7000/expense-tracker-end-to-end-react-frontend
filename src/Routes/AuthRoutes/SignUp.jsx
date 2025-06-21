import { useState } from "react";
import { useNavigate } from "react-router";

export default function SignUp() {
    console.log("hello")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();


    function updateUsername(event) {
        setUsername(event.target.value);
    }

    function updatePassword(event) {
        setPassword(event.target.value);
    }

    async function addUserToDatabse() {
        if(!username.length) {
            alert("Enter valid username");
            return
        }

        if(!password.length) {
            alert("Enter valid password");
            return
        }

        const resposne = await fetch("http://localhost:3000/user/signup", {
            method: "POST",
            body: JSON.stringify({
                username, password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })

        const output = await resposne.json();

        if(resposne.status === 200) {
            navigate("/signin");
            return
        } 

        alert(output.msg)
    }

    return (
        <>
            <div className="usename-container" style={{

            }}>
                <input value={username} placeholder="Enter your username" onInput={updateUsername} />
            </div>

            <div className="password-container" style={{}}>
                <input value={password} placeholder="Enter the password" onInput={updatePassword} />
            </div>

            <button onClick={function() {
                addUserToDatabse();
            }}>Sign Up</button>
        </>
    )

}