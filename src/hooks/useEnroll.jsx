import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useEnroll = () => {
    const { user, loading } = useAuth();
    
    const [axiosSecure] = useAxiosSecure();
    
    const { refetch, data: enrollClasses = [] } = useQuery({
        queryKey: ['enrolledClass', user?.email],
        enabled: !loading,
        
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolledClass?email=${user?.email}`)
            return res.data;
        },
    })

    return [enrollClasses, refetch]
};

export default useEnroll;