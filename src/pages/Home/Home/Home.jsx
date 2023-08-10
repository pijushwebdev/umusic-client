import { Helmet } from "react-helmet-async";
import HomeSlider from "../HomeSlider/HomeSlider";
import MySection from "../MySection";
import TopClassSection from "../TopClassSection";
import TopInstructor from "../TopInstructor";
import Profile from "../Profile";
import Newsletter from "../Newsletter";
import Services from "./Services";
import Partners from "../Partners";


const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home | Umusic</title>
            </Helmet>
            <HomeSlider></HomeSlider>
            <TopClassSection></TopClassSection>
            <TopInstructor></TopInstructor>
            <Profile></Profile>
            <Services/>
            <Newsletter/>
            <Partners></Partners>
            <MySection></MySection>
        </>
    );
};

export default Home;