import {GiButterflyFlower} from 'react-icons/gi'
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <p className="text-[#DC2751] flex justify-center mb-2">---- {subHeading}<span className=''><GiButterflyFlower/></span> ----</p>
            <h3 className="text-3xl uppercase py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;