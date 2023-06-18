import resume from '/Pijush-Sarker.pdf'

const MySection = () => {

    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(resume).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = resume;
                alink.click();
            })
        })
    }

    return (
        <div className='mb-10'>
            <h1 className="text-center font-bold text-4xl  my-10">Developer Info</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
                <div>
                    <img className='w-1/2 mx-auto rounded-md' src="https://i.ibb.co/m95s8Yy/undraw-Developer-activity-re-39tg-removebg-preview-removebg-preview.png" alt="" />
                </div>
                <div className='m-3 md:m-0'>
                    <h1 className='font-medium text-2xl mb-5'>About</h1>
                    <p className='mb-5'>I am a full stack MERN developer with a passion
                        of developing different, complex web application. My top three favorite resources for learning are Programming Hero, W3School, FreeCodeCamp.
                    </p>

                    <button className='py-2 px-3 transition-all duration-700 border-y-2 border-[#DC2751]  hover:border-b-transparent border-t-transparent hover:border-t-[#DC2751] rounded-lg font-semibold' onClick={onButtonClick}>
                        Resume
                    </button>
                </div>
            </div>

        </div>
    );
};

export default MySection;