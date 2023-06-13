import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useInstClasses = () => {
    const { user, loading } = useAuth();
    
    const [axiosSecure] = useAxiosSecure();
    
    const { refetch, data: instClasses = [] } = useQuery({
        queryKey: ['instClasses', user?.email],
        enabled: !loading,
        
        queryFn: async () => {
            const res = await axiosSecure.get(`/instClasses?email=${user?.email}`)
            return res.data;
        },
    })

    return [instClasses, refetch]
};

export default useInstClasses;