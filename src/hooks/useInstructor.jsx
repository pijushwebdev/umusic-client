import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useInstructor = () => {

    const [axiosSecure] = useAxiosSecure();
    const {user, loading} = useAuth();


    const {data: isInstructor, isLoading: isInstructorLoading} = useQuery({
        queryKey: ['isInstructor', user?.email],
        enabled: !loading,
        queryFn: async () => {
            if(user && user?.email){
                const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
                return res.data.instructor;
            }
            return false;
        }
    })

    return [isInstructor, isInstructorLoading]
};

export default useInstructor;