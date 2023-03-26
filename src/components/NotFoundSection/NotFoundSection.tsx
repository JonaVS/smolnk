import { Transition, Variants } from "framer-motion";
import MainSectionWrapper from "../shared/MainSectionWrapper/MainSectionWrapper";
import { Link } from "react-router-dom";

const transition: Transition = {
  duration: 0.5,
  layout: {type: "tween", duration: 0.3}
}

const section: Variants = {
  hidden: { x: -100, opacity: 0},
  show: { opacity: 1, x: 0 },
  exit: { x: -100, opacity: 0 }
};

const NotFoundSection = () => {
  return (
    <MainSectionWrapper
      className="text-center text-gray-200 font-bold"
      variants={section}
      transition={transition}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1 className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-200">
        404
      </h1>
      <p>Sorry, the page you're looking doesn't exist.</p>
      <Link
        to="/"
        className="block mx-auto w-11/12 sm:w-72 mt-4 p-2 bg-purple-600 rounded-full shadow-lg transition-opacity 
          duration-200 ease-in-out hover:opacity-80"
      >
        Go to Home
      </Link>
    </MainSectionWrapper>
  );
};

export default NotFoundSection;