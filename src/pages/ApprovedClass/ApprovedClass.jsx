import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";


const ApprovedClass = () => {

    const [axiosSecure] = useAxiosSecure();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const [cart,refetch] = useCart()

    console.log(cart);

    const { data: aClasses = [] } = useQuery(
        ['approvedClasses'], async () => {
            const res = await axiosSecure.get('/approvedClasses');
            return res.data;
        }
    )

    const handleAddToCart = (item) => {
        const { className, image, instructorName, price, seats, _id, email } = item;

        if (user && user.email) {

            const cartItem = { classId: _id, className, instructorName, image, price, seats, email: user.email, insEmail: email }
            console.log(cartItem);


            axiosSecure.post('/carts', cartItem)
                .then(data => {
                    if (data.data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'This class successfully added',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'To Add Please Login',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    

    return (
        <div className="mx-auto mb-10">
            <SectionTitle heading='All Classes' subHeading='Approved'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-3  md:mx-0">
                {
                    aClasses.map(aClass => <div key={aClass._id}>
                        <div className={`card bg-base-100 shadow-xl ${aClass.seats === 0 ? 'bg-red-700' : ''}`}>
                            <figure><img src={aClass.image} alt="class image" /></figure>
                            <div className="card-body pt-2">
                                <h2 className="card-title">Class Name: {aClass.className}</h2>
                                <p>Instructor: {aClass.instructorName}</p>
                                <div className="card-actions justify-start">
                                    <div className="badge badge-outline">Available Seats: {aClass.seats}</div>
                                    <div className="badge badge-outline">Course Fees: ${aClass.price}</div>
                                </div>


                                <button onClick={() => handleAddToCart(aClass)} disabled={isAdmin || isInstructor || aClass.seats === 0 || cart.some(i => i.classId === aClass._id)} className={`py-2 px-3 w-full mt-5 font-semibold rounded-lg hover:shadow-lg text-white ${(isAdmin || isInstructor || aClass.seats === 0 || cart.some(i => i.classId === aClass._id)) ? 'bg-gray-400' : 'bg-[#DC2751]'
                                    }`}>Add the Class</button>


                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ApprovedClass;