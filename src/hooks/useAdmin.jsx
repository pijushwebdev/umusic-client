import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useAdmin = () => {

    const [axiosSecure] = useAxiosSecure();
    const {user, loading} = useAuth();


    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled: !loading,
        queryFn: async () => {
            if(user && user?.email){
                const res = await axiosSecure.get(`/users/admin/${user?.email}`);
                return res.data.admin;
            }
            return false;
        }
    })

    return [isAdmin, isAdminLoading]
};

export default useAdmin;