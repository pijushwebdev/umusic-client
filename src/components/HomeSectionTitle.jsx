

const HomeSectionTitle = ({children}) => {
    return (
        <div className="flex justify-center">
            <h1 className="text-center font-bold lg:font-extrabold lg:text-5xl md:text-4xl text-3xl my-10 text-transparent bg-clip-text bg-gradient-to-r from-[#f66b82] to-[#DC2751] w-max">{children}</h1>
        </div>
    );
};

export default HomeSectionTitle;