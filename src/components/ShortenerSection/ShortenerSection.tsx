import MainSectionWrapper from "../shared/MainSectionWrapper/MainSectionWrapper";
import ShortenerSectionMsg from "./ShortenerSectionMsg/ShortenerSectionMsg";
import ShortenerForm from "./ShortenerSectionForm/ShortenerForm";

const ShortenerSection = () => {
  return (
    <MainSectionWrapper
      transition={{ duration: 0.5, type: "tween" }}
      initial={{ x: -100, opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ x: -100, opacity: 0 }}
    >
      <ShortenerSectionMsg />
      <ShortenerForm />
    </MainSectionWrapper>
  );
};

export default ShortenerSection;
