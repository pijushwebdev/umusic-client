import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";


const image_hosting_token = import.meta.env.VITE_Image_Token;

const SignUp = () => {

    const { createUser, updateUserProfile, logOut } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [isMatched, setIsMatched] = useState(true);

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;

    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();


    const onSubmit = data => {
        if (data.password !== data.confirm) {
            setIsMatched(false);
            return;
        } else {
            setIsMatched(true);
        }

        const formData = new FormData();
        formData.append('image', data.image[0]);

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);

                fetch(image_hosting_url, {
                    method: 'POST',
                    body: formData
                })
                    .then(res => res.json())
                    .then(imgRes => {
                        if (imgRes.success) {
                            const photoURL = imgRes.data.display_url;

                            updateUserProfile(data.name, photoURL)
                                .then(() => {
                                    const saveUser = { name: data.name, email: data.email, image: photoURL };

                                    axiosSecure.post('/users', saveUser)
                                        .then(data => {
                                            if (data.data.insertedId) {
                                                reset();
                                                logOut();
                                                toast.success("SignUp Successful")
                                            }
                                            navigate('/login');
                                        })
                                })
                        }
                    })
            })


    }

    return (
        <div className="lg:mt-24">
            <Helmet>
                <title>Sign up | Umusic</title>
            </Helmet>
            <h1 className="text-4xl text-center font-bold my-10">Sign Up Now!</h1>
            <div className="grid grid-cols-1 m-4 md:m-0">
                <div className="flex flex-col justify-center md:order-2">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="lg:w-3/4 w-full mx-auto">

                            <div className="form-control w-full">
                                <label htmlFor="name" className="label">
                                    <span className="label-text font-medium text-base">Full Name:</span>
                                </label>
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Enter name" className="input outline-none input-bordered w-full" />
                                {errors.name && <span className="text-red-600">Name is required</span>}
                            </div>


                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                <div className="form-control w-full">
                                    <label htmlFor="name" className="label">
                                        <span className="label-text font-medium text-base">Image:</span>
                                    </label>
                                    <input type="file" {...register("image", { required: true })} name="image" placeholder="Enter image" className=" w-full file:mr-4 file:py-2 file:px-4 border border-[#dc2751] focus:border-black py-2 px-3 rounded-lg
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-[#dc2751]
      hover:file:bg-violet-100" />
                                    {errors.image && <span className="text-red-600">Image is required</span>}
                                </div>


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
                                    <input type="password" {...register("password", {
                                        required: true, minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                    })} name="password" placeholder="Enter password" className="input outline-none input-bordered w-full" />
                                    {errors.password && <span className="text-red-600">Password is required</span>}
                                    {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                    {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                    {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                </div>

                                <div className="form-control w-full">
                                    <label htmlFor="password" className="label">
                                        <span className="label-text font-medium text-base">Confirm Password:</span>
                                    </label>
                                    <input type="password" {...register("confirm", { required: true })} name="confirm" placeholder="Confirm password" className="input outline-none input-bordered w-full" />
                                    {errors.confirm && <span className="text-red-600">Password is required</span>}
                                    {!isMatched && <span className="text-red-600">Password not matched</span>}
                                </div>
                            </div>


                            <div className="flex justify-center mt-5 mb-10">
                                <input className="px-3 py-2 border cursor-pointer text-lg font-semibold rounded-md w-full md:w-1/2 text-center" type="submit" value="Sign Up" />
                            </div>
                        </div>
                    </form>

                    <div>
                        <p className="text-center mb-10 mt-5">Already have an account? <Link className="link text-black link-hover" to='/login'>Sign in</Link></p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default SignUp;