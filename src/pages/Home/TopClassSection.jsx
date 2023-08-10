import { useEffect, useState } from "react";
import HomeSectionTitle from "../../components/HomeSectionTitle";

const TopClassSection = () => {

    const [topClass, setTopClass] = useState([]);


    useEffect(() => {
        fetch('https://umusic-server.vercel.app/topClasses')
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setTopClass(data)
            })
    }, [])
    return (
        <div>
            <HomeSectionTitle>Top 6 Classes</HomeSectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 mx-3 md:mx-0 gap-3">
                {
                    topClass.map(item => <div key={item._id}>

                        <div className="card bg-base-100 shadow-xl">
                            <figure><img className="h-56 w-full" src={item.classImage} alt="class image" /></figure>
                            <div className="card-body h-52 bg-gradient-to-l from-[#ffd3d3] to-[#e99292] rounded-b-xl">
                                <h2 className="card-title text-[#DC2751]">Class Name: {item.className}</h2>
                                <p className="font-medium text-[#DC2751] text-lg">Instructor: {item.instructorName}</p>
                                <div className="card-actions justify-start">
                                    <div className="badge hover:border-black text-[#DC2751] badge-outline border-red-600">Seats: {item.seats}</div>
                                    <div className="badge hover:border-black text-[#DC2751] badge-outline border-red-600">Fees: {item.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default TopClassSection;