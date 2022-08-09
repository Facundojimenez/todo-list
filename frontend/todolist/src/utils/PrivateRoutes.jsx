import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/UserContext"

export default function PrivateRoutes() {
    const {user} = useContext(UserContext);
    console.log(user)
    return(
        user ? <Outlet/> : <Navigate  to="/login" />
    )
}
