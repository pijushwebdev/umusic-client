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

        const instructorName = user?.displayName;
        const email = user?.email;

        const formData = new FormData();
        formData.append('image', data.image[0]);

        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgRes => {
                if (imgRes.success) {
                    const classImg = imgRes.data.display_url;

                    const { className, availableSeats, price } = data;
                    const classData = { price: parseFloat(price), className, instructorName, email, seats: parseInt(availableSeats), image: classImg };

                    axiosSecure.post('/addClassByIns', classData)
                        .then(data => {
                            if (data.data.insertedId) {
                                console.log(data.data);
                                reset();
                                toast.success("Added successfully");
                            }
                        })
                        
                }
            })

    }
    return (
        <>
            <h1 className="text-4xl text-center font-bold my-10">Add a Class!</h1>
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
                                <input type="text" disabled {...register("instructorName", { required: false })} name="instructorName" defaultValue={user?.displayName} className="input outline-none input-bordered w-full" />
                                {errors.instructorName && <span className="text-red-600">Instructor name is required</span>}
                            </div>

                            <div className="form-control w-full">
                                <label htmlFor="email" className="label">
                                    <span className="label-text font-medium text-base">Instructor Email:</span>
                                </label>
                                <input type="text" {...register("email", { required: false })} name="email" defaultValue={user?.email} disabled className="input outline-none input-bordered w-full" />
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
                                <input type="number" {...register("availableSeats", { required: true })} name="availableSeats" className="input outline-none input-bordered w-full" placeholder="Available seats" />
                                {errors.availableSeats && <span className="text-red-600">Available Seats is required</span>}
                            </div>

                            <div className="form-control w-full">
                                <label htmlFor="price" className="label">
                                    <span className="label-text font-medium text-base">Course Fees:</span>
                                </label>
                                <input type="number" {...register("price", { required: true })} name="price" className="input outline-none input-bordered w-full" placeholder="Course fees"/>
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