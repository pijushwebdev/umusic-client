import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();

    if(loading){
        return <span className="loading mx-auto loading-spinner text-secondary"></span>
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;