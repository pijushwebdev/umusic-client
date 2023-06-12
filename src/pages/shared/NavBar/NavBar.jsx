
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";
import useAdmin from "../../../hooks/useAdmin";
import useInstructor from "../../../hooks/useInstructor";
import { FaBookmark } from "react-icons/fa";

const NavBar = () => {

    const { user, logOut } = useAuth();

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();


    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.success("Logout Successful")
            })
    }
    const cart = [];



    const navOptions = <>
        <li className="hover:text-white"><NavLink to='/'>Home</NavLink></li>
        <li className="hover:text-white"><NavLink to='/instructors'>Instructors</NavLink></li>
        <li><NavLink to='/classes'>Classes</NavLink></li>

        {
            user &&
            <li>
                {
                    isAdmin ? <NavLink to='/dashboard/manageUsers'>Dashboard</NavLink> : isInstructor ? <NavLink to='/dashboard/addClass'>Dashboard</NavLink> : <NavLink to='/dashboard/selectedClasses'>Dashboard</NavLink>
                }
            </li>
        }

        {
            !isInstructor && !isAdmin && user ? <div><span className="flex"><FaBookmark /> <span className="badge badge-secondary ml-1">+{cart?.length || 0}</span></span></div> : ''
        }

        {
            user ? <>
                <li><button onClick={handleLogOut}>SignOut</button></li>
                <li><NavLink to='/profile'><img className="rounded-full w-10 h-10" title={user?.displayName} src={user?.photoURL} alt="icon" /></NavLink></li>
            </> : <>
                <li><NavLink to='/login'>SignIn</NavLink></li>
            </>
        }
    </>
    // referrerpolicy="no-referrer"
    return (
        <>
            <div className="navbar  bg-black bg-opacity-90  text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 z-30 shadow bg-slate-800 rounded-box w-72">
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