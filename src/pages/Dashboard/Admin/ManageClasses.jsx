import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import ClassCard from "./ClassCard";
import SectionTitle from "../../../components/SectionTitle";
import { Helmet } from "react-helmet-async";


const ManageClasses = () => {

    const [axiosSecure] = useAxiosSecure();

    const { data: allClasses = [], refetch } = useQuery(
        ['allClasses'], async () => {
            const res = await axiosSecure.get('/allClasses');
            return res.data;
        }
    )
    return (
        <div className="mx-auto mb-5">

            <Helmet>
                <title>Manage Classes | Umusic</title>
            </Helmet>

            <SectionTitle heading='Manage Classes'></SectionTitle>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-2 gap-3">
                {
                    allClasses.map(myClass => <ClassCard
                        key={myClass._id}
                        myClass={myClass}
                        refetch={refetch}
                    ></ClassCard>)
                }
            </div>

        </div>
    );
};

export default ManageClasses;