
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useInstructor from "../hooks/useInstructor";


const InstructorRoute = ({ children }) => {
    const { user, loading } = useAuth();
    
    const [isInstructor, isInstructorLoading] = useInstructor();


    const location = useLocation();

    if(loading || isInstructorLoading){
        return <span className="loading mx-auto loading-spinner text-secondary"></span>
    }

    if (user && isInstructor) {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default InstructorRoute;