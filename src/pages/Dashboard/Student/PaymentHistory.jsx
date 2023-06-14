import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import SectionTitle from "../../../components/SectionTitle";
import { Helmet } from "react-helmet-async";


const PaymentHistory = () => {

    const [axiosSecure] = useAxiosSecure();
    const {user} = useAuth();


    const { data: history = [] } = useQuery(
        ['paymentHistory'], async () => {
            const res = await axiosSecure.get(`/paymentHistory?email=${user?.email}`);
            return res.data;
        }
    )
    return (
        <div>
            <Helmet>
                <title>Payment History | Umusic</title>
            </Helmet>
            <SectionTitle heading='Payment History' subHeading='Expenses'></SectionTitle>
            <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Transaction Id</th>
                                <th>Class Name</th>
                                <th>Price</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                history?.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    
                                    <td>
                                        {item.transactionId}
                                    </td>                                    
                                    <td>
                                        {item.className}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>                                   
                                    <td>
                                        {item.date}
                                    </td>                                   
                                    
                                </tr>)
                            }
                        </tbody>

                    </table>
                </div>
        </div>
    );
};

export default PaymentHistory;