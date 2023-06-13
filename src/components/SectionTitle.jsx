import {GiButterflyFlower} from 'react-icons/gi'
const SectionTitle = ({heading}) => {
    return (
        <div className="mx-auto text-center md:w-4/12 my-8">
            <h3 className="text-3xl flex uppercase py-4">{heading} <sup className='text-3xl ml-2'><GiButterflyFlower/></sup></h3>
        </div>
    );
};

export default SectionTitle;