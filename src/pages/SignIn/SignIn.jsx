import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useState } from "react";


const SignIn = () => {
    const { signIn, googleSignIn, facebookSignIn } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [user,setUser] = useState(null);
    const [show, setShow] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();

    const from = location.state?.from?.pathname || '/';


    const onSubmit = data => {
        const email = data.email;
        const password = data.password;

        signIn(email, password)
            .then(res => {
                const user = res.user;
                setUser(user)
                if (user) {
                    reset();
                    toast.success("Login Successful");
                }
                navigate(from, { replace: true })
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(res => {
                const loggedUser = res.user;
                setUser(loggedUser)
                const saveUser = { name: user.displayName, email: user.email, image: user.photoURL };

                axiosSecure.post('/users', saveUser)
                    .then((data) => {
                        if (data.data.insertedId) {
                            toast.success("SignUp Successful")
                        }
                        
                    })
                    .catch(error => toast.error(error.message))
                
                navigate(from, { replace: true });
                toast.success("SignIn Successful")
            })
    }

    const handleFacebookSignIn = () => {
        facebookSignIn()
        .then(res => {
            const loggedUser = res.user;
            setUser(loggedUser)
            // console.log(loggedUser);
            const saveUser = { name: user.displayName, email: user.email, image: user.photoURL };

            axiosSecure.post('/users', saveUser)
                .then((data) => {
                    if (data.data.insertedId) {
                        toast.success("SignUp Successful")
                    }
                    navigate(from, { replace: true });
                })
        })

    }

    return (
        <>
            <h1 className="text-4xl text-center font-bold my-10">Sign In Now!</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 m-4 md:m-0">
                <div className="flex flex-col justify-center md:order-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="lg:w-3/4 w-full mx-auto">
                            <div className="form-control w-full">
                                <label htmlFor="email" className="label">
                                    <span className="label-text font-medium text-base">Email:</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} name="email" placeholder="Enter email" className="input outline-none input-bordered w-full" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            <div className="form-control w-full">
                                <label htmlFor="password" className="label">
                                    <span className="label-text font-medium text-base">Password:</span>
                                </label>
                                <div className="relative">
                                    <input type={show ? 'text' : 'password'} {...register("password", { required: true })} name="password" placeholder="Enter password" className="input outline-none input-bordered w-full" />
                                    <span onClick={() => setShow(!show)} className='absolute cursor-pointer text-xl top-4 right-4'>
                                        <>
                                            {
                                                show ? <FaRegEye /> :
                                                    <FaRegEyeSlash />
                                            }
                                        </>
                                    </span>
                                    {errors.password && <span className="text-red-600">Password is required</span>}
                                </div>
                            </div>
                            <div className="flex justify-center my-5">
                                <input className="px-3 py-2 border cursor-pointer text-lg font-semibold rounded-md w-full md:w-1/2 text-center" type="submit" value="Sign In" />
                            </div>
                        </div>
                    </form>

                    <div>
                        <p className="text-center mt-5">Not yet an account? <Link className="link link-hover" to='/register'>Register</Link></p>
                    </div>

                    <div className="divider w-full md:w-3/4 mx-auto">OR</div>

                    <div className="flex justify-center mb-10 md:mx-4 lg:mx-0 ">
                        <div>
                            <button onClick={handleGoogleSignIn} className="px-5 flex items-center py-2 border text-lg font-semibold rounded-md  mr-5 text-center"><span className="mr-2"><FcGoogle /></span> Google</button>
                        </div>

                        <div>
                            <button onClick={handleFacebookSignIn} className="px-3 flex items-center py-2 border text-lg font-semibold rounded-md text-center"><span className="mr-2"><FaFacebook /></span> Facebook</button>
                        </div>
                    </div>


                </div>

                <div className="hidden md:block md:order-1">
                    <img src="https://i.ibb.co/0jXRsbQ/Login-r.png" alt="login image" />
                </div>


            </div>
        </>
    );
};

export default SignIn;