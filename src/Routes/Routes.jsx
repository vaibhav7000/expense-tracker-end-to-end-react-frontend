import { Routes,Route } from "react-router";
import AuthRoute from "./AuthRoutes/AuthRoute";
import SignIn from "./AuthRoutes/SignIn";
import SignUp from "./AuthRoutes/SignUp";
import ExpenseTracker from "./AppRoutes/ExpenseTracker";


export default function AppRoutes() {
    return (
        <Routes>
            <Route path="" element={<ExpenseTracker/>} />
            <Route element={<AuthRoute/>}>
                <Route path="signin" element={ <SignIn/> }/>
                <Route path="signup" element={ <SignUp/> }/>
            </Route>
        </Routes>
    )
}

