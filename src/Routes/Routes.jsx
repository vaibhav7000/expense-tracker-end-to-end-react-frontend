import { Routes,Route, useNavigate, useLocation } from "react-router";
import AuthRoute from "./AuthRoutes/AuthRoute";
import SignIn from "./AuthRoutes/SignIn";
import SignUp from "./AuthRoutes/SignUp";
import ExpenseTracker from "./AppRoutes/ExpenseTracker";
import { useState, useEffect } from "react";
import { useCallback } from "react";
import { useRef } from "react";
import Header from "../Components/NavBar";


export default function AppRoutes() {
    const location = useLocation();
    const [isValidJwt, setIsValidJwt] = useState(false);
    const navigate = useNavigate();


    const init = useCallback(async function() {
        const token = localStorage.getItem("token");
        if(!token) {
            navigate("/signup");
            return
        }

        // checking is this valid jwt
        const response = await fetch("http://localhost:3000/user/verify", {
            method: "POST",
            headers: {
                "token": `${token}`
            }
        })

        const output = await response.json();

        if(response.status === 403) {
            navigate("/signup");
            alert("Invalid token set");
            return
        }
        
        setIsValidJwt(true);
        
    }, []);

    useEffect(function() {
        // here we will check if the browser stores the valid jwt => send to the ExpenseTracker else navigate it to the signin route
        init();
    }, []);

    const logOut = useCallback(function() {
        localStorage.removeItem("token");
        setIsValidJwt(false);
        navigate("signin");
    },[]);

    return (
        <div>
            <Header isValidJwt={isValidJwt} logOut={logOut}/>
            <Routes>
                <Route path="" element={isValidJwt ? <ExpenseTracker logout={logOut}/> : <Loading/> } />
                <Route element={<AuthRoute/>}>
                    <Route path="signin"  element={ <SignIn setIsValidJwt={setIsValidJwt}/> }/>
                    <Route path="signup" element={ <SignUp/> }/>
                </Route>
            </Routes>
        </div>
    )
}

function Loading() {
    return (
        <div style={{
            width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"
        }}>
            Loading...
        </div>
    )
}

// react-router provides us a hook called useNaviagte that is used to programatically navigate to the other page (this might be from home page (loading page) to sign in because the user does not have any valid jwt token)

