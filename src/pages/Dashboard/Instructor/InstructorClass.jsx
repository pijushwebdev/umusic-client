import SectionTitle from "../../../components/SectionTitle";
import { FaSync } from 'react-icons/fa';
import useInstEnrollClasses from "../../../hooks/useInstEnrollClasses";
import useInstClasses from "../../../hooks/useInstClasses";
import { Helmet } from "react-helmet-async";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineSend } from "react-icons/ai";
import { useState } from "react";
import { toast } from "react-toastify";

const InstructorClass = () => {

    const [instEnrollClass] = useInstEnrollClasses();
    const [instClasses, refetch] = useInstClasses();

    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const [showModal, setShowModal] = useState(false);

    const [newId, setNewId] = useState('');



    // to show class and instructor specific enrolled student 
    const { data: enrollSpecificClass = [] } = useQuery({
        queryKey: ['enrollSpecificClass', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrollSpecificClass?email=${user?.email}`);
            return res.data;
        },
    });

    const handleUpdateClassBtn = (id) => {
        setShowModal(true);
        setNewId(id);
    }


    const handleSendData = (e) => {
        e.preventDefault();

        const form = e.target;
        const className = form.cname.value;
        const seatsS = form.seats.value;
        const priceS = form.price.value;
        const seats = parseInt(seatsS);
        const price = parseFloat(priceS);

        const updatedClass = { className, seats, price };

        axiosSecure.put(`/updateFeedback?id=${newId}`, updatedClass)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    toast.success('Update success')
                    refetch();
                    setShowModal(false)
                }
            })
    }

    const handleCloseModal = () => {
        setShowModal(false)
    }

    return (
        <div>
            <Helmet>
                <title>My Classes | Umusic</title>
            </Helmet>

            <SectionTitle heading='My Classes'></SectionTitle>

            <div className="overflow-x-auto">
                <h1>Total Enrolled Student: {instEnrollClass.length}</h1>
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Class Image</th>
                            <th>Class Name</th>
                            <th>Seats</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Enrolled</th>
                            <th>Feedback</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            instClasses.map((item, index) => {
                                // Find the corresponding item in enrollSpecificClass array
                                const specificClass = enrollSpecificClass.find(enrollItem => enrollItem.classId === item._id);
                                return (
                                    <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center space-x-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="class image" title="class image" />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>{item.className}</td>
                                        <td>{item.seats}</td>
                                        <td>{item.price}</td>
                                        <td>{item.status}</td>
                                        <td>{specificClass ? specificClass.count : 0}</td>
                                        <td>{item.feedback}</td>
                                        <td>
                                            {
                                                item.feedback &&
                                                <button onClick={() => handleUpdateClassBtn(item._id)} className="py-3 px-3 rounded-md  text-lg btn-ghost">
                                                    <FaSync />
                                                </button>
                                            }
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>


            {
                showModal && (
                    <dialog open className="modal">
                        <form onSubmit={handleSendData} method="dialog" className="modal-box flex flex-col">
                            <input
                                type="text"
                                name="cname"
                                placeholder="Class Name"
                                className="input max-w-sm"
                                required
                            />
                            <input
                                type="number"
                                name="seats"
                                placeholder="Seats Number"
                                className="input my-3 border max-w-sm"
                                required
                            />
                            <input
                                type="number"
                                name="price"
                                placeholder="Course Fee"
                                className="input max-w-sm"
                                required
                            />
                            <div className="modal-action">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-1 text-lg top-0" onClick={handleCloseModal}>
                                    X
                                </button>
                                <button type="submit"
                                    className="text-green-700 py-1 px-2 text-2xl border rounded-md shadow-md"

                                >
                                    <AiOutlineSend />
                                </button>
                            </div>
                        </form>
                    </dialog>
                )}

        </div>
    );
};

export default InstructorClass;
