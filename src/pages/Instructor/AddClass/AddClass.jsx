import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import { toast } from "react-toastify";

const image_hosting_token = import.meta.env.VITE_Image_Token;

const AddClass = () => {
    const { user } = useAuth();

    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`;
    const [axiosSecure] = useAxiosSecure();

    const onSubmit = data => {

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(image_hosting_url,{
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgRes => {
            if(imgRes.success){
                const classImg = imgRes.data.display_url;

                const {className, instructorName,email,availableSeats,price} = data;
                const classData = {price: parseFloat(price), className,instructorName,email,availableSeats,classImg};
                axiosSecure.post('/addClassByIns',classData)
                .then(data => {
                    if(data.data.insertedId){
                        reset();
                        toast.success("Class added successfully")
                    }
                })
                .catch(error => toast.error(error.message))
                }
        })

    }
    return (
        <>
            <h1 className="text-4xl text-center font-bold my-10">Sign Up Now!</h1>
            <div className="grid grid-cols-1 m-4 md:m-0">

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="lg:w-3/4 w-full mx-auto">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">

                            <div className="form-control w-full">
                                <label htmlFor="className" className="label">
                                    <span className="label-text font-medium text-base">Class Name:</span>
                                </label>
                                <input type="text" {...register("className", { required: true })} name="className" placeholder="Enter class name" className="input outline-none input-bordered w-full" />
                                {errors.className && <span className="text-red-600">Class name is required</span>}
                            </div>

                            <div className="form-control w-full">
                                <label htmlFor="instructorName" className="label">
                                    <span className="label-text font-medium text-base">Instructor Name:</span>
                                </label>
                                <input type="text" disabled {...register("instructorName", { required: true })} name="instructorName" defaultValue={user?.displayName} className="input outline-none input-bordered w-full" />
                                {errors.instructorName && <span className="text-red-600">Instructor name is required</span>}
                            </div>

                            <div className="form-control w-full">
                                <label htmlFor="email" className="label">
                                    <span className="label-text font-medium text-base">Instructor Email:</span>
                                </label>
                                <input type="text" {...register("email", { required: true })} name="email" defaultValue={user?.email} disabled className="input outline-none input-bordered w-full" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                            </div>

                            <div className="form-control w-full">
                                <label htmlFor="name" className="label">
                                    <span className="label-text font-medium text-base">Class Image:</span>
                                </label>
                                <input type="file" {...register("image", { required: true })} name="image" placeholder="Enter image" className="file-input file-input-bordered w-full" />
                                {errors.image && <span className="text-red-600">Image is required</span>}
                            </div>

                            <div className="form-control w-full">
                                <label htmlFor="availableSeats" className="label">
                                    <span className="label-text font-medium text-base">Available Seats:</span>
                                </label>
                                <input type="text" {...register("availableSeats", { required: true })} name="availableSeats" className="input outline-none input-bordered w-full" />
                                {errors.availableSeats && <span className="text-red-600">Available Seats is required</span>}
                            </div>

                            <div className="form-control w-full">
                                <label htmlFor="price" className="label">
                                    <span className="label-text font-medium text-base">Price:</span>
                                </label>
                                <input type="text" {...register("price", { required: true })} name="price" className="input outline-none input-bordered w-full" />
                                {errors.price && <span className="text-red-600">Price is required</span>}
                            </div>


                        </div>


                        <div className="flex justify-center mt-5 mb-10">
                            <input className="px-3 py-2 border cursor-pointer text-lg font-semibold rounded-md w-full md:w-1/2 text-center" type="submit" value="Add Class" />
                        </div>
                    </div>
                </form>

            </div>
        </>
    );
};

export default AddClass;