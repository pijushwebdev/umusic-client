import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle";
import { Helmet } from "react-helmet-async";


const Instructors = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: instructors = [] } = useQuery(
        ['instructors'], async () => {
            const res = await axiosSecure.get('/instructors');
            return res.data;
        }
    )

    return (
        <div className="md:mt-24 container mx-auto">
            <Helmet>
                <title>Instructors | Umusic</title>
            </Helmet>
            <SectionTitle heading='All Instructors'></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10 mx-3 md:mx-0">
                {
                    instructors.map(instructor => <div key={instructor._id}>

                        <div className="card card-compact  bg-base-100 shadow-xl">
                            <figure><img className="h-72 w-full" src={instructor.image} alt="image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Name: {instructor.name}</h2>
                                <p>Email: {instructor.email}</p>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>

    );
};

export default Instructors;