import { useState } from "react";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AiOutlineSend } from 'react-icons/ai'
import { FaBed } from "react-icons/fa";


const ClassCard = ({ myClass, refetch }) => {

    const { instructorName, image, className, price, seats, status, email, _id } = myClass;
    // console.log(myClass);
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [sendFeedback,setSendFeedback] = useState('');


    const [axiosSecure] = useAxiosSecure();


    const handleSendFeedbackBtn = () => {
        setShowModal(true);
    }
    const handleCloseModal = () => {
        setShowModal(false);
    }

    const saveFeedback = (e) => {
        const value = e.target.value;
        setSendFeedback(value);
    }

    const handleSendFeedback = (id) => {
        axiosSecure.patch(`/feedback/${id}`,{
            feedback: sendFeedback,
        })
        .then(res => {
            if(res.data.modifiedCount > 0){
                toast.success("Feedback sent successful")
            }
        })
    }

    const handleAllowClick = (_id) => {

        fetch(`https://umusic-server.vercel.app/classAllow/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success("Approved")
                    setButtonsDisabled(true);
                }
            })
    }

    const handleDenyClick = (_id) => {

        fetch(`https://umusic-server.vercel.app/classDeny/${_id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success("Denied")
                    setButtonsDisabled(true);
                }
            })
    }
    return (
        <>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="rounded-xl h-48 w-full" src={image} alt="class image" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Class Name: {className}</h2>
                    <p className="text-lg font-medium">Instructor: {instructorName}</p>
                    <p>Email: {email}</p>
                    <div className="grid grid-cols-3 gap-2">
                        <p className="badge badge-outline" title="fees">$ {price}</p>
                        <p className="badge flex gap-2 badge-outline" title="Seats Number"><FaBed/> {seats}</p>
                        <p className="badge badge-outline">{status}</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mt-3">
                        <button disabled={buttonsDisabled || status === 'approved' || status == 'denied'} onClick={() => handleAllowClick(_id)} className="py-1 px-2 bg-green-700 text-white rounded-md">Approve</button>
                        <button disabled={buttonsDisabled || status === 'approved' || status == 'denied'} onClick={() => handleDenyClick(_id)} className="py-1 px-2 bg-red-700 text-white rounded-md">Deny</button>
                        <button disabled={ status === 'approved' || status === 'pending'} onClick={handleSendFeedbackBtn} className="py-1 px-2 bg-teal-700 text-white rounded-md">Feedback</button>
                    </div>

                </div>
            </div>

            {showModal && (
                <dialog open className="modal">
                    <form method="dialog" className="modal-box">
                        <textarea
                            onChange={saveFeedback}
                            type="text"
                            placeholder="Type here"
                            className="input w-full max-w-sm"
                        />
                        <div className="modal-action">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-1 text-lg top-0" onClick={handleCloseModal}>
                                X
                            </button>
                            <button
                                className="text-green-700 py-1 px-2 text-2xl border rounded-md shadow-md"
                                onClick={() => handleSendFeedback(_id)}
                                disabled={!sendFeedback}
                            >
                                <AiOutlineSend/>
                            </button>
                        </div>
                    </form>
                </dialog>
            )}
        </>
    );
};

export default ClassCard;



