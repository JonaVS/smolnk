import { LayoutGroup } from "framer-motion";
import MainSectionWrapper from "../shared/MainSectionWrapper/MainSectionWrapper";
import ShortenerSectionMsg from "./ShortenerSectionMsg/ShortenerSectionMsg";
import ShortenerForm from "./ShortenerSectionForm/ShortenerForm";

const ShortenerSection = () => {
  return (
    <LayoutGroup>
      <MainSectionWrapper
        transition={{ duration: 0.5, layout: { type: "tween", duration: 0.3 } }}
        initial={{ x: -100, opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ x: -100, opacity: 0 }}
        layout="position"
      >
        <ShortenerSectionMsg />
        <ShortenerForm />
      </MainSectionWrapper>
    </LayoutGroup>
  );
};

export default ShortenerSection;
