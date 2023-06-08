import { useForm } from "react-hook-form";


const SignIn = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        
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
                                <input type="password" {...register("password", { required: true })} name="password" placeholder="Enter password" className="input outline-none input-bordered w-full" />
                                {errors.password && <span className="text-red-600">Password is required</span>}
                            </div>
                            <div className="flex justify-center mt-5 mb-10">
                                <input className="px-3 py-2 border cursor-pointer text-lg font-semibold rounded-md w-full md:w-1/2 text-center" type="submit" value="Sign In" />
                            </div>
                        </div>
                    </form>
                </div>

                <div className="hidden md:block md:order-1">
                    <img src="https://i.ibb.co/0jXRsbQ/Login-r.png" alt="login image" />
                </div>


            </div>
        </>
    );
};

export default SignIn;