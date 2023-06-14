import HomeSlider from "../HomeSlider/HomeSlider";
import MySection from "../MySection";
import TopClassSection from "../TopClassSection";
import TopInstructor from "../TopInstructor";


const Home = () => {
    return (
        <>
            <HomeSlider></HomeSlider>
            <TopClassSection></TopClassSection>
            <TopInstructor></TopInstructor>
            <MySection></MySection>
        </>
    );
};

export default Home;