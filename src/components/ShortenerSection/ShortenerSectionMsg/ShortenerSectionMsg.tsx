import { Link } from "react-router-dom";

const lineClassName = "mx-auto text-center h-max w-full text-white text-2xl md:text-5xl lg:text-6xl font-bold";
const keywordClassName = "font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-200";

const ShortenerSectionMsg = () => {
  return (
    <>
      <p className={lineClassName}>
        <span className={keywordClassName}>Size</span> doesn't matter – unless
      </p>
      <p className={lineClassName}>
        we're talking about <span className={keywordClassName}>Links</span>{" "}
      </p>
      <p className="text-center mt-2 px-2 text-gray-50 text-xs sm:text-sm font-bold">
        Beautiful links with just one click. Shorten your link below
        <span className="text-xl"> 😉</span>
      </p>
      <p className="mx-auto text-center text-gray-50 text-xs sm:text-sm font-bold">
        Or click{" "}
        <Link to="/link-usage">
          <span className="text-teal-200 font-bold">here</span>
        </Link>{" "}
        to see link usage count <span className="text-xl">👀</span>
      </p>
    </>
  );
};

export default ShortenerSectionMsg;
