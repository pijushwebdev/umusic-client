import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaBookOpen, FaHome, FaBook, FaChalkboardTeacher, FaUsers, FaWallet, FaSignOutAlt } from "react-icons/fa";
import { MdMenuOpen } from "react-icons/md"
import { BiBookBookmark, BiBook } from "react-icons/bi"
import { BsBook } from "react-icons/bs"
import { SiGoogleclassroom } from "react-icons/si"
import { ToastContainer } from "react-toastify";
import useAdmin from "../hooks/useAdmin";
import useInstructor from "../hooks/useInstructor";
import useAuth from "../hooks/useAuth";

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const {  logOut } = useAuth();
    const navigate = useNavigate();

    
    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
            })
    }

    return (
        <>
            <div className="my-drawer lg:grid lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <label htmlFor="my-drawer-2" className="drawer-button cursor-pointer absolute top-5 left-4 lg:hidden"> <span className="text-3xl"> <MdMenuOpen /> </span> </label>
                    
                    <Outlet></Outlet>

                </div>

                <div className="drawer-side  m-0">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu bg-[#1C1C1C] p-4 h-full w-72 text-base">

                        {
                            isAdmin ? <>

                                <h1 className="text-white font-semibold text-lg mb-5 text-center">Admin Dashboard</h1>

                                <li><NavLink to='/dashboard/manageClasses'><SiGoogleclassroom /> Manage Classes</NavLink></li>

                                <li><NavLink to='/dashboard/manageUsers'><FaUsers /> Manage Users</NavLink></li>

                            </> : isInstructor ? <>

                                <h1 className="text-white font-semibold text-lg mb-5 text-center">Instructor Dashboard</h1>

                                <li><NavLink to='/dashboard/addClass'><BsBook /> Add Class</NavLink></li>

                                <li><NavLink to='/dashboard/instructorClass'><FaBook /> My Classes</NavLink></li>

                            </> : <>

                                <h1 className="text-white font-semibold text-lg mb-5 text-center">Student Dashboard</h1>

                                <li><NavLink to='/dashboard/selectedClasses'><BiBook /> Selected Classes</NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory'><FaWallet /> Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/enrolledClasses'><BiBookBookmark /> Enrolled Classes</NavLink></li>

                            </>
                        }

                        <div className="divider"></div>

                        <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                        <li><NavLink to="/instructors"><FaChalkboardTeacher /> Instructors</NavLink></li>
                        <li><NavLink to="/classes"><FaBookOpen />Classes</NavLink></li>
                        <li><button className="text-white" onClick={handleLogOut}><FaSignOutAlt/>SignOut</button></li>


                    </ul>

                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default Dashboard;