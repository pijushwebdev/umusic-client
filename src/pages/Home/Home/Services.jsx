import HomeSectionTitle from "../../../components/HomeSectionTitle";

const Services = () => {
    return (
        <div className="container mx-auto">
            <HomeSectionTitle>Services</HomeSectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mt-5 mb-20">

                <div className="p-5 boxShadow shadow-lg rounded-md">
                    <figure className="flex justify-center">
                        <img className="circleCard w-20 h-20 p-5 rounded-full" src="https://i.ibb.co/6v5nYcQ/icons8-completed-task-48.png" alt="" />
                    </figure>
                    <div>
                        <h1 className="font-bold text-center my-3 text-lg text-[#DC2751]">100% Satisfaction</h1>
                        <p className="text-slate-500 text-sm">This can help informing new students and correcting expectations so that is easier for them to find their most fitting course of study</p>
                    </div>
                </div>

                <div className="p-5 boxShadow shadow-lg rounded-md">
                    <figure className="flex justify-center">
                        <img className="circleCard w-20 h-20 p-5 rounded-full" src="https://i.ibb.co/3WTv9B5/icons8-money-back-guarantee-64.png" alt="" />
                    </figure>
                    <div>
                        <h1 className="font-bold text-center my-3 text-lg text-[#DC2751]">Money Back Guarantee</h1>
                        <p className="text-slate-500 text-sm">This can help informing new students and correcting expectations so that is easier for them to find their most fitting course of study</p>
                    </div>
                </div>
                <div className="p-5 boxShadow shadow-lg rounded-md">
                    <figure className="flex justify-center">
                        <img className="circleCard w-20 h-20 p-5 rounded-full" src="https://i.ibb.co/BtKdFxS/icons8-customer-care-64.png" alt="" />
                    </figure>
                    <div>
                        <h1 className="font-bold text-center my-3 text-lg text-[#DC2751]">24/7 Customer Care</h1>
                        <p className="text-slate-500 text-sm">This can help informing new students and correcting expectations so that is easier for them to find their most fitting course of study</p>
                    </div>
                </div>
                <div className="p-5 boxShadow shadow-lg rounded-md">
                    <figure className="flex justify-center">
                        <img className="circleCard w-20 h-20 p-5 rounded-full" src="https://i.ibb.co/3pJf7XL/icons8-recording.gif" alt="" />
                    </figure>
                    <div>
                        <h1 className="font-bold text-center my-3 text-lg text-[#DC2751]">Recording</h1>
                        <p className="text-slate-500 text-sm">This can help informing new students and correcting expectations so that is easier for them to find their most fitting course of study</p>
                    </div>
                </div>

                

            </div>
        </div>
    );
};

export default Services;

// https://i.ibb.co/6v5nYcQ/icons8-completed-task-48.png
// https://i.ibb.co/BtKdFxS/icons8-customer-care-64.png
// https://i.ibb.co/3WTv9B5/icons8-money-back-guarantee-64.png
// https://i.ibb.co/tctd71n/icons8-music-record-64.png
// https://i.ibb.co/3pJf7XL/icons8-recording.gif