import { NavLink } from "react-router";
import reactLogo from '../assets/react.svg'
export default function Header({ isValidJwt, logOut }) {

    return (
        <nav style={{
            display: "flex", flexDirection: "row", justifyContent: "space-between", position: "absolute", top: 0, left: 0, right:0, padding: 40
        }}>
            <div className="image-container">
                <img src={reactLogo}/>
            </div>

            <div className="nav-items" style={{
            display: "flex", flexDirection: "row", gap: 20
        }}>
                {!isValidJwt && <NavLink to={"signin"} className={({ isActive }) => isActive ? "active" : ""}>
                    Signin
                </NavLink>}

                {!isValidJwt && <NavLink to={"signup"} className={({ isActive }) => isActive ? "active" : ""}>
                    Signup
                </NavLink>}

                {isValidJwt && <NavLink onClick={function() {
                    logOut();
                }} to={"signin"}>
                    Logout
                </NavLink>}
            </div>

        </nav>
    )
}