import { NavLink, Outlet } from "react-router-dom";
import { FaBookOpen, FaHome, FaBook, FaChalkboardTeacher } from "react-icons/fa";

import { MdMenuOpen } from "react-icons/md"
import { BsBook } from "react-icons/bs"

const Dashboard = () => {

    

    return (
        <>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-white flex flex-col">
                    <label htmlFor="my-drawer-2" className="drawer-button lg:hidden"> <span className="text-3xl"> <MdMenuOpen/> </span> </label>
                    <Outlet></Outlet>

                </div>
                <div className="drawer-side  m-0">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu bg-[#1C1C1C] p-4 h-full w-72 text-base">

                        {/* {
                            isAdmin ? <>
                                
                                <li><NavLink to='/dashboard/manageClasses'><FaWallet /> Manage Classes</NavLink></li>
                                <li><NavLink to='/dashboard/manageUsers'><FaUsers /> Manage Users</NavLink></li>
                            
                            </> : isInstructor ? <>

                            <li><NavLink to='/dashboard/addClass'><FaUtensils /> Add Class</NavLink></li>
                            <li><NavLink to='/dashboard/addClass'><FaUtensils /> My Classes</NavLink></li>

                            </> : <>

                                <li><NavLink to='/dashboard/selectedClass'><FaCalendar /> Selected Classes</NavLink></li>
                                <li><NavLink to='/dashboard/paymentHistory'><FaWallet /> Payment History</NavLink></li>
                                <li><NavLink to='/dashboard/booking'><RiCalendarEventFill /> Enrolled Classes</NavLink></li>

                            </>
                        } */}
                        <h1 className="text-white font-semibold text-lg mb-5 text-center">Instructor Dashboard</h1>
                        <li><NavLink to='/dashboard/addClass'><BsBook/> Add Class</NavLink></li>
                        <li><NavLink to='/dashboard/myClasses'><FaBook /> My Classes</NavLink></li>
                        
                        <div className="divider"></div>

                        <li><NavLink to="/"><FaHome /> Home</NavLink></li>
                        <li><NavLink to="/instructors"><FaChalkboardTeacher /> Instructors</NavLink></li>
                        <li><NavLink to="/classes"><FaBookOpen/>Classes</NavLink></li>

                    </ul>

                </div>
            </div>
        </>
    );
};

export default Dashboard;