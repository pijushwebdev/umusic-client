import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";
import {FaSync} from 'react-icons/fa'
import useAuth from "../../../hooks/useAuth";

const InstructorClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const {user} = useAuth();
    

    const { data: instClasses = [], refetch } = useQuery(
        ['instClasses'], async () => {
            const res = await axiosSecure.get(`/instClasses?email=${user?.email}`);
            return res.data;
        }
    )
    const { data: instEnrollClass = [] } = useQuery(
        ['instEnrollClass'], async () => {
            const res = await axiosSecure.get(`/instEnrollClass?email=${user?.email}`);
            return res.data;
        }
    )

    const handleRefresh = () => {
        refetch();
    }


    return (
        <div>
            <SectionTitle heading='My Classes'></SectionTitle>

            <button onClick={handleRefresh} title="refresh" className="py-3 px-3 rounded-md  text-lg btn-ghost"><FaSync/></button>


            <div className="overflow-x-auto">
                <h1>Total Enrolled Student: { instEnrollClass.length }</h1>
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instClasses.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="class image" title="class image" />
                                            </div>
                                        </div>
    
                                    </div>
                                </td>
                                <td>
                                    {item.className}
                                </td>
                                <td>
                                    {item.seats}
                                </td>
                                <td>
                                    {item.price}
                                </td>
                                <td>
                                    {item.status}
                                </td>
                                <td>
                                    {item.feedback}
                                </td>
                                <td>
                                    <button className="py-3 px-3 rounded-md  text-lg btn-ghost"><FaSync/></button>
                                </td>
                            </tr>)
                        }
                        

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default InstructorClass;