import { LayoutGroup, Transition, Variants, motion } from "framer-motion";
import MainSectionWrapper from "../shared/MainSectionWrapper/MainSectionWrapper";
import { Link } from "react-router-dom";
import UrlUsageForm from "./UrlUsageSectionForm/UrlUsageForm";

const transition: Transition = {
  duration: 0.5,
  layout: {type: "tween", duration: 0.3}
}

const section: Variants = {
  hidden: {  x: 100, opacity: 0 },
  show: { opacity: 1, x: 0 },
  exit: { x: 100, opacity: 0 }
};

const linkSpan: Variants = {
  hover: {scale: 0.8, transition: {duration: 0.3}}
}

const UrlUsageSection = () => {
  return (
    <LayoutGroup>
      <MainSectionWrapper
        variants={section}
        transition={transition}
        initial="hidden"
        animate="show"
        exit="exit"
        layout="position"
        className="text-center"
      >
        <Link to="/">
          <motion.span
            variants={linkSpan}
            whileHover="hover"
            className="text-teal-200 font-bold inline-block"
          >
            Go to Home
          </motion.span>
        </Link>
        <p className="px-2 text-gray-200 text-xs sm:text-sm font-bold">
          Enter URL below to see usage count{" "}
          <span className="text-sm md:text-xl">🙂</span>
        </p>
        <UrlUsageForm />
      </MainSectionWrapper>
    </LayoutGroup>
  );
};

export default UrlUsageSection;
