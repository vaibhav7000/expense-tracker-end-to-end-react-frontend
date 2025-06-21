import { useState } from "react";
import { useNavigate } from "react-router";

function SignIn({ setIsValidJwt }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function updateUsername(event) {
        setUsername(event.target.value);
    }

    function updatePassword(event) {
        setPassword(event.target.value);
    }

    async function login() {
        if(!username.length) {
            alert("Enter valid username");
            return
        }

        if(!password.length) {
            alert("Enter valid password");
            return
        }

        // sending request to the backend to get the token
        const response = await fetch("http://localhost:3000/user/signin", {
            method: "POST",
            body: JSON.stringify({
                username, password
            }),
            headers: {
                "Content-Type": "application/json"
            }

        })

        const output = await response.json();

        if(response.status === 200 ) {
            localStorage.setItem("token", output.token);
            navigate("/", {
                state: true,
            });
            setIsValidJwt(true);
        } else {
            alert(`${output.msg}`);
            return
        }
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
                login();
            }}>Sign In</button>
        </>
    )
}

export default SignIn;


// uses of the useRef hook
// 1. It allow us to interact with old school DOM elements after the component renders using the ref attribute that we provide to XML to whom we want to reference 

//It also provides a way for developers to interact directly with DOM nodes, outside of React’s management of the Virtual DOM. React describes this an ‘escape hatch’.

// 2. If we want to "persist value" of the variable between re-renders + does not want to make that a state_variable (because when its value update we does not want to re-render the component) we will use the useRef hook with that (implementation of deboucing is example of that )