import { Helmet } from "react-helmet-async";
import HomeSlider from "../HomeSlider/HomeSlider";
import MySection from "../MySection";
import TopClassSection from "../TopClassSection";
import TopInstructor from "../TopInstructor";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Umusic</title>
            </Helmet>
            <HomeSlider></HomeSlider>
            <TopClassSection></TopClassSection>
            <TopInstructor></TopInstructor>
            <MySection></MySection>
        </>
    );
};

export default Home;