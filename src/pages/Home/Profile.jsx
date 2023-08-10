// import CountUp from "react-countup/build/CountUp";
import CountUp from 'react-countup';
import HomeSectionTitle from '../../components/HomeSectionTitle';


const Profile = () => {
    return (
        <>
            <HomeSectionTitle>Profile</HomeSectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-10'>
                
                <div className='gradient2 shadow-lg rounded-lg py-10 flex justify-center items-center flex-col'>
                    <h1 className='md:text-4xl text-2xl font-semibold text-[#DC2751]'>Classes</h1>
                    <div className='flex'>
                        <CountUp className='mt-5 text-cyan-700 font-bold text-2xl md:text-3xl' start={30} end={100} duration={2.75} enableScrollSpy={true} scrollSpyOnce={true} />
                        <span className='my-5 text-cyan-700 font-bold md:text-2xl text-xl ml-1'><sup>+</sup></span>
                    </div>
                </div>

                <div className='gradient1 shadow-lg rounded-lg py-10 flex justify-center items-center flex-col'>
                    <h1 className='md:text-4xl text-2xl font-semibold text-[#DC2751]'>Instructors</h1>
                    <div className='flex'>
                        <CountUp className='mt-5 text-cyan-700 font-bold text-2xl md:text-3xl' start={3} end={40} duration={2.75} enableScrollSpy={true} scrollSpyOnce={true} />
                        <span className='my-5 text-cyan-700 font-bold md:text-2xl text-xl ml-1'><sup>+</sup></span>
                    </div>
                </div>

                <div className='gradient3 shadow-lg rounded-lg py-10 flex justify-center items-center flex-col'>
                    <h1 className='md:text-4xl text-2xl font-semibold text-[#DC2751]'>Students</h1>
                    <div className='flex'>
                        <CountUp className='mt-5 text-cyan-700 font-bold text-2xl md:text-3xl' start={5010} end={6000} duration={2.75} enableScrollSpy={true} scrollSpyOnce={true} />
                        <span className='my-5 text-cyan-700 font-bold md:text-2xl text-xl ml-1'><sup>+</sup></span>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Profile;

