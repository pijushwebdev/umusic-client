import SectionTitle from "../../../components/SectionTitle";
import {FaSync} from 'react-icons/fa'
import useInstEnrollClasses from "../../../hooks/useInstEnrollClasses";
import useInstClasses from "../../../hooks/useInstClasses";

const InstructorClass = () => {

    const [instEnrollClass] = useInstEnrollClasses();
    const [instClasses] = useInstClasses();

    return (
        <div>
            <SectionTitle heading='My Classes'></SectionTitle>


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