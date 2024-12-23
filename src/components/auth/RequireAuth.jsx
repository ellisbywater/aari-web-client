import { Navigate, Outlet, useLocation } from "react-router";
import { usePocketAuth } from "../../contexts/PocketContext"

export const RequireAuth = () =>{
    const {user} = usePocketAuth();
    const location = useLocation()

    if (!user) {
        return (
            <Navigate to={{pathname: "/login"}} state={{ location }} replace />
        )
    }

    return <Outlet />
}