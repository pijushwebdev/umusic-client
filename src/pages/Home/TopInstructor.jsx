import { useEffect, useState } from "react";
import HomeSectionTitle from "../../components/HomeSectionTitle";

const TopInstructor = () => {

    const [topInstructor,setTopInstructor] = useState([]);


    useEffect( () => {
        fetch('https://umusic-server.vercel.app/topInstructor')
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            setTopInstructor(data);
        })
    }, [])


    return (
        <div>
            <HomeSectionTitle>Top 6 Instructors</HomeSectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-3 mx-3 md:mx-0">
                {
                    topInstructor.map(item => <div key={item._id}>
 
                        <div className="card bg-base-100 shadow-xl rounded-xl">
                            <figure className="h-72 w-full bg-gradient-to-r from-[#ffd3d3] to-[#e99292]">
                                <img className="h-40 w-40 rounded-full" src={item.image} alt="class image" />
                            </figure>
                            <div className="card-body rounded-b-xl bg-gradient-to-l from-[#ffd3d3] to-[#e99292]">
                                <h2 className="card-title text-[#DC2751]">Name: {item.name}</h2>
                                <h2 className="text-[#DC2751]">email: {item.email}</h2>
                                   
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default TopInstructor;

// from-[#ffd3d3] to-[#e99292]