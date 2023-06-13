import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="mb-10">
            <img src="https://i.ibb.co/nmbjBJP/undraw-Page-not-found-re-e9o6.png" alt="404" />
            <h1 className="text-2xl font-bold text-center">Page Not Found</h1>
            <Link className="btn rounded-lg font-medium text-lg bg-green-700" to='/'>Home</Link>
        </div>
    );
};

export default ErrorPage;