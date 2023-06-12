import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layouts/Dashboard";
import AddClass from "../pages/Dashboard/Instructor/AddClass";
import ManageUsers from "../pages/Dashboard/Admin/ManageUsers";
import ManageClasses from "../pages/Dashboard/Admin/ManageClasses";
import InstructorClass from "../pages/Dashboard/Instructor/InstructorClass";
import Instructors from "../pages/Instructor/Instructors";
import ApprovedClass from "../pages/ApprovedClass/ApprovedClass";
import SelectedClass from "../pages/Dashboard/Student/SelectedClass";
import Payment from "../pages/Dashboard/Student/Payment";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <SignIn></SignIn>
            },
            {
                path: 'register',
                element: <SignUp></SignUp>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
            },
            {
                path: 'classes',
                element: <ApprovedClass></ApprovedClass>
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'addClass',
                element: <AddClass></AddClass>
            },
            {
                path: 'manageUsers',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manageClasses',
                element: <ManageClasses></ManageClasses>
            },
            {
                path: 'instructorClass',
                element: <InstructorClass></InstructorClass>
            },
            {
                path: 'selectedClasses',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            }
        ]
    }
])