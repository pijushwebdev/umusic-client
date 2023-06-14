import { useEffect, useState } from "react";

const TopInstructor = () => {

    const [topInstructor,setTopInstructor] = useState([]);


    useEffect( () => {
        fetch('https://umusic-server.vercel.app/topInstructor')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setTopInstructor(data);
        })
    }, [])


    return (
        <div>
            <h1 className="text-center font-bold text-4xl  my-10">Top 6 Instructors</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-10 gap-3">
                {
                    topInstructor.map(item => <div key={item._id}>

                        <div className="card bg-base-100 shadow-xl">
                            <figure><img className="h-56 w-full" src={item.image} alt="class image" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Class Name: {item.name}</h2>
                                   
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default TopInstructor;