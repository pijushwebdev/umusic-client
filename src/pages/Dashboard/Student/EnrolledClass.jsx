import SectionTitle from "../../../components/SectionTitle";
import useEnroll from "../../../hooks/useEnroll";


const EnrolledClass = () => {

    const [enrollClasses] = useEnroll();

    return (
        <>
            <SectionTitle heading='Enrolled Classes'></SectionTitle>

            <div>
                <h1 className="mb-3 text-bold text-xl">Total Enrolled Class: {enrollClasses.length}</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Class Image</th>
                                <th>Instructor Name</th>
                                <th>Instructor Email</th>
                                <th>Class Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                enrollClasses?.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.classImage} alt="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.instructorName}
                                    </td>
                                    <td>
                                        {item.instructorEmail}
                                    </td>
                                    <td>
                                        {item.className}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>                                   
                                    
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
};

export default EnrolledClass;