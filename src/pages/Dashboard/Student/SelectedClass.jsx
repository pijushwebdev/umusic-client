import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import useCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";



const SelectedClass = () => {
    const [cart, refetch] = useCart();

    const handleDelete = (item) => {
        Swal.fire({
            title: 'Are you sure?',
            text: `Delete ${item.className}`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://umusic-server.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                `${item.className} has been deleted.`,
                                'success'
                            )
                        }
                    })

            }
        })
    }

    // console.log(cart);
    return (
        <div>
            <SectionTitle heading='Selected Classes' subHeading='Student'></SectionTitle>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Class Image</th>
                                <th>Instructor Name</th>
                                <th>Class Name</th>
                                <th>Price</th>
                                <th>Seats</th>
                                <th>Pay</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart.map((item, index) => <tr key={item._id}>
                                    <td>
                                        {index + 1}
                                    </td>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {item.instructorName}
                                    </td>
                                    <td>
                                        {item.className.slice(0,25)}
                                    </td>
                                    <td>
                                        {item.price}
                                    </td>
                                    <td>
                                        {item.seats}
                                    </td>
                                    <td>
                                        <Link to={`/dashboard/payment/${item._id}`} className="py-2 px-3 btn-ghost rounded-md bg-[#DC2751] text-white font-medium">Pay</Link>
                                    </td>
                                    <td><button onClick={() => handleDelete(item)} className="btn btn-ghost rounded-full btn-md text-lg bg-red-500 text-white" title="Delete"><FaTrashAlt /></button></td>
                                </tr>)
                            }


                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default SelectedClass;

// const { classId, className, email, image, insEmail, instructorName, price, seats, _id} = item;
