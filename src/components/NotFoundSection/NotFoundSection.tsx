import MainSectionWrapper from "../shared/MainSectionWrapper/MainSectionWrapper";
import { Link } from "react-router-dom";

const NotFoundSection = () => {
  return (
    <MainSectionWrapper className="text-center text-gray-200 font-bold">
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-200">
        404
      </h1>
      <p>Sorry, the page you're looking doesn't exist.</p>
      <Link
        to="/"
        className="block mt-4 p-2 bg-purple-600 rounded-full shadow-lg transition-opacity 
          duration-200 ease-in-out hover:opacity-80"
      >
        Go to Home
      </Link>
    </MainSectionWrapper>
  );
};

export default NotFoundSection;