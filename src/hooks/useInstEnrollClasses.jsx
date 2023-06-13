import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useInstEnrollClasses = () => {
    const { user, loading } = useAuth();
    
    const [axiosSecure] = useAxiosSecure();
    
    const { refetch, data: instEnrollClass = [] } = useQuery({
        queryKey: ['instEnrollClass', user?.email],
        enabled: !loading,
        
        queryFn: async () => {
            const res = await axiosSecure.get(`/instEnrollClass?email=${user?.email}`)
            return res.data;
        },
    })

    return [instEnrollClass, refetch]
};

export default useInstEnrollClasses;