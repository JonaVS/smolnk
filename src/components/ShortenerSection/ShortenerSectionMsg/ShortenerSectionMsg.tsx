import { Link } from "react-router-dom";

const lineClassName = "mx-auto text-center h-max w-full text-gray-200 text-2xl md:text-5xl lg:text-6xl font-bold";
const keywordClassName = "font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-teal-200";
const extraLineClassName = "text-center text-gray-200 text-xs sm:text-sm font-bold" 
const emojiClassName = "text-sm md:text-xl"

const ShortenerSectionMsg = () => {
  return (
    <>
      <p className={lineClassName}>
        <span className={keywordClassName}>Size</span> doesn't matter – unless
      </p>
      <p className={lineClassName}>
        we're talking about <span className={keywordClassName}>URLs</span>{" "}
      </p>
      <p className={`${extraLineClassName} mt-2`}>
        Short URLs with just one click. Shorten your URL below
        <span className={emojiClassName}> 😉</span>
      </p>
      <p className={extraLineClassName}>
        Already have one? Click{" "}
        <Link to="/url-usage">
          <span className="text-teal-200 font-bold">here</span>
        </Link>{" "}
        to see URL usage count <span className={emojiClassName}>👀</span>
      </p>
    </>
  );
};

export default ShortenerSectionMsg;
