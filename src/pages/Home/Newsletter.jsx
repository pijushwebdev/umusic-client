
import { FaRegPaperPlane } from 'react-icons/fa'
import HomeSectionTitle from '../../components/HomeSectionTitle';
const Newsletter = () => {
    return (
        <div className='background-subs'>
            <div className=" text-center">
                <HomeSectionTitle>Subscribe</HomeSectionTitle>
                <div>
                    <p className='text-slate-500'>Subscribe for our latest & Articles. We Won’t Give You Spam Mails
                    </p>
                    <form>
                        <label className="flex justify-center py-10 ml-10 md:ml-0" htmlFor="email">
                            <input type="email" className='py-2 px-4 text-white bg-transparent  border md:w-1/2 w-full lg:w-1/3 rounded-3xl outline-none' name="email" placeholder='Enter email'/>
                            <button className="relative -left-[52px] bg-[#DC2751] p-4 text-xl rounded-3xl"><FaRegPaperPlane /></button>
                        </label>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;