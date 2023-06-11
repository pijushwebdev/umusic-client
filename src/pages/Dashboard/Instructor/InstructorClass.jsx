import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle";


const InstructorClass = () => {

    const [axiosSecure] = useAxiosSecure();
    


    const { data: instClasses = [], refetch } = useQuery(
        ['instClasses'], async () => {
            const res = await axiosSecure.get('/instructorClass');
            return res.data;
        }
    )
    return (
        <div>
            <SectionTitle heading='My Classes' subHeading='Instructor'></SectionTitle>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instClasses.map(instClass => <tr key={instClass._id}>
                                <th>
    
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src='' alt="class image" title="class image" />
                                            </div>
                                        </div>
    
                                    </div>
                                </td>
                                <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                </td>
                                <td>Purple</td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>)
                        }
                        

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default InstructorClass;