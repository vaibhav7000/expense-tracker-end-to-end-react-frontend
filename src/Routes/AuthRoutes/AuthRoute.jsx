import { Outlet } from "react-router";


export default function AuthRoute() {

    return (
        <div style={{
            display: "flex", flexDirection: "column", padding: 30, justifyContent:"center", alignItems:"center", gap: 20, borderRadius: 10, boxShadow: "0px 0px 30px 5px rgb(109, 109, 109)"
        }}>
            {/* will throw the child here */}
            <Outlet />
        </div>
    )
}