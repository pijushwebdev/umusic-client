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
import EnrolledClass from "../pages/Dashboard/Student/EnrolledClass";
import PaymentHistory from "../pages/Dashboard/Student/PaymentHistory";
import ErrorPage from "../../ErrorPage";
import PrivateRoute from "./PrivateRoute";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";



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
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'addClass',
                element: <InstructorRoute><AddClass></AddClass></InstructorRoute>
            },
            {
                path: 'manageUsers',
                element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            },
            {
                path: 'manageClasses',
                element: <AdminRoute><ManageClasses></ManageClasses></AdminRoute>
            },
            {
                path: 'instructorClass',
                element: <InstructorRoute><InstructorClass></InstructorClass></InstructorRoute>
            },
            {
                path: 'selectedClasses',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'payment/:id',
                element: <Payment></Payment>
            },
            {
                path: 'enrolledClasses',
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: 'paymentHistory',
                element: <PaymentHistory></PaymentHistory>
            }
        ]
    },
    {
        path: '*',
        element:<ErrorPage></ErrorPage>
    }
])