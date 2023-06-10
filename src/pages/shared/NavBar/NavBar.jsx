// import React from 'react';

import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const NavBar = () => {

    const {user, logOut} = useAuth();

    const handleLogOut = () => {
        logOut()
        .then(() => {
            toast.success("Logout Successful")
        })
    }


    const navOptions = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/instructors'>Instructors</NavLink></li>
        <li><NavLink to='/classes'>Classes</NavLink></li>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
        {
            user ? <>
            <li><button onClick={handleLogOut}>SignOut</button></li>
            <li><NavLink to='/profile'><img className="rounded-full w-10" title={user?.displayName} src={user?.photoURL} alt="icon" /></NavLink></li>
            </> : <>
            <li><NavLink to='/login'>SignIn</NavLink></li>
            </>
        }
    </>
    // referrerpolicy="no-referrer"
    return (
        <>
            <div className="navbar  bg-black bg-opacity-30 max-w-screen-xl text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-slate-400 rounded-box w-72">
                            {navOptions}
                        </ul>
                    </div>
                    <NavLink to='/' className="p-1"><img className="w-36 h-20 p-0 m-0" src="https://i.ibb.co/DLsg5kg/inlineguitar.png" alt="" /></NavLink>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu flex flex-row text-lg items-center justify-center px-1">
                        {navOptions}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;