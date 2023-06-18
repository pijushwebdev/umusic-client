
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { BsArrowDownShort } from 'react-icons/bs';
import { Slide } from "react-awesome-reveal";


const HomeSlider = () => {

    const [sliderRef] = useKeenSlider(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout
                let mouseOver = false
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    if (mouseOver) return
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 3000)
                }
                slider.on("created", () => {
                    slider.container.addEventListener("mouseover", () => {
                        mouseOver = false
                        // clearNextTimeout()
                    })
                    slider.container.addEventListener("mouseout", () => {
                        mouseOver = false
                        nextTimeout()
                    })
                    nextTimeout()
                })
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )
    return (
        <div>
            <div ref={sliderRef} className="keen-slider mb-10">
                <div className="keen-slider__slide number-slide1 relative ">

                    <div className=" overflow-hidden">
                        <img className="bg-animation w-full" src="https://i.ibb.co/qDnCYRy/modern-microphone.jpg" alt="" />
                    </div>

                    <div className="absolute left-3 md:left-10 md:top-10 lg:top-32 top-0 z-10">
                        <div className="content">
                            <h2 className="lg:text-8xl md:text-4xl text-2xl font-extrabold mt-5 md:mt-10 text-white">Vocal <span className="block">Recording</span></h2>
                        </div>

                        <Slide>
                            <p className="md:my-6 my-2 text-sm text-slate-300 font-normal md:font-medium w-full lg:w-1/2">Vocal recording, in essence, is capturing the voice of the artist in the most effective and efficient way so that the play-back will be as true sounding to the original performance as possible. </p>
                        </Slide>


                        <button className="lg:py-4 lg:px-14 md:py-2 md:px-7 py-1 px-2 mt-3 md:mt-5 lg:mt-10 bg-[#DC2751] text-white font-semibold text-normal md:text-lg rounded-[30px]">Explore More</button>


                    </div>

                    <div className="absolute left-1/2 hidden md:block border rounded-3xl py-5 border-white  bottom-40  translate-x-1/2 translate-y-1/2">
                    <span className="text-white text-3xl border-white"><span className="animate-ping"><BsArrowDownShort /></span></span>
                    </div>

                </div>

                <div className="keen-slider__slide number-slide2 relative ">

                    <div className=" overflow-hidden">
                        <img className="bg-animation w-full" src="https://i.ibb.co/z4Jzkd2/female-student-playing-piano.jpg" alt="" />
                    </div>

                    <div className="absolute left-3 md:left-10 lg:top-32 md:top-10 top-0 z-10">
                        <div className="content">
                            <h2 className="lg:text-8xl md:text-4xl text-2xl font-extrabold mt-5 md:mt-10 text-white">Piano <span className="block">Courses</span></h2>
                        </div>

                        <Slide>
                            <p className="md:my-6 my-2 text-sm text-slate-300 font-normal md:font-medium w-full lg:w-1/2">Piano comes from the original Italian name for the instrument: piano e forte, soft and loud.Piano is also the musical notation that tells the player that something should be played quietly. </p>
                        </Slide>

                        <button className="lg:py-4 lg:px-14 md:py-2 md:px-7 py-1 px-2 mt-3 md:mt-5 lg:mt-10 bg-[#DC2751] text-white font-semibold text-normal md:text-lg rounded-[30px]">Explore More</button>


                    </div>

                    <div className="fixed left-1/2 hidden md:block  border rounded-3xl py-5 border-white  bottom-40 translate-x-1/2 translate-y-1/2">
                        <span className="text-white text-3xl border-white"><span className="animate-ping"><BsArrowDownShort /></span></span>
                    </div>

                </div>

                <div className="keen-slider__slide number-slide3 relative ">

                    <div className="overflow-hidden">
                        <img className="bg-animation w-full" src="https://i.ibb.co/YWndFwJ/man-with-guitar-darkness.jpg" alt="" />
                    </div>

                    <div className="absolute left-3 md:left-10 lg:top-32 md:top-10 top-0 z-10">
                        <div className="content">
                            <h2 className="lg:text-8xl md:text-4xl text-2xl font-extrabold mt-5 md:mt-10 text-white">Guitar <span className="block">Courses</span></h2>
                        </div>

                        <Slide>
                            <p className="md:my-6 my-2 text-sm text-slate-300 font-normal md:font-medium w-full lg:w-1/2">You can definitely learn on an electric guitar, but overall, acoustic guitar wins out every time. Its easier to sound good, easier to play and its easier to learn </p>
                        </Slide>

                        <button className="lg:py-4 lg:px-14 md:py-2 md:px-7 py-1 px-2 mt-3 md:mt-5 lg:mt-10 bg-[#DC2751] text-white font-semibold text-normal md:text-lg rounded-[30px]">Explore More</button>


                    </div>

                    <div className="fixed left-1/2 hidden md:block  border rounded-3xl py-5 border-white  bottom-40 translate-x-1/2 translate-y-1/2">
                    <span className="text-white text-3xl border-white"><span className="animate-ping"><BsArrowDownShort /></span></span>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default HomeSlider;


// https://i.ibb.co/3r3xB4k/closeup-shot-microphone-set-stage-during-event-with-lights-background-1.jpg
// https://i.ibb.co/R9SpJK3/cute-young-woman-headphones-sings-into-microphone-dark-room.jpg
// https://i.ibb.co/WnMqhhW/drum-kit-dark-background-with-stage-lighting-copy-space.jpg
// https://i.ibb.co/z4Jzkd2/female-student-playing-piano.jpg
// https://i.ibb.co/RcJ0JZG/inspiration.jpg
// https://i.ibb.co/dKSy1Nw/lights-disco.jpg
// https://i.ibb.co/HY1pFNZ/man-plays-acoustic-guitar-dark-room-copy-space-live-performance-acoustic-concert.jpg
// https://i.ibb.co/tm7WXc8/man-singing.jpg
//
// https://i.ibb.co/FHnsdrj/medium-shot-woman-singing.jpg
//
// https://i.ibb.co/MBP6017/night-performance-piano-near-flame-generative-ai.jpg
// 

