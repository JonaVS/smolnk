import { LayoutGroup } from "framer-motion";
import MainSectionWrapper from "../shared/MainSectionWrapper/MainSectionWrapper";
import { Link } from "react-router-dom";
import UrlUsageForm from "./UrlUsageSectionForm/UrlUsageForm";

const UrlUsageSection = () => {
  return (
    <LayoutGroup>
      <MainSectionWrapper
        transition={{ duration: 0.5, layout: { type: "tween", duration: 0.3 } }}
        initial={{ x: 100, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ x: 100, opacity: 0 }}
        layout="position"
      >
        <Link to="/" className=" text-cyan-200 font-bold block text-center">
          Go to Home
        </Link>
        <p className="text-center px-2 text-gray-50 text-xs sm:text-sm font-bold">
          Enter URL below to see usage count <span className="text-xl">🙂</span>
        </p>
        <UrlUsageForm />
      </MainSectionWrapper>
    </LayoutGroup>
  );
};

export default UrlUsageSection;
