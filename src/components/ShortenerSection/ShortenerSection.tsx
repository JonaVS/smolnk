import MainSectionWrapper from "../shared/MainSectionWrapper/MainSectionWrapper";
import ShortenerSectionMsg from "./ShortenerSectionMsg/ShortenerSectionMsg";
import ShortenerForm from "./ShortenerSectionForm/ShortenerForm";

const ShortenerSection = () => {
  return (
    <MainSectionWrapper>
      <ShortenerSectionMsg />
      <ShortenerForm />
    </MainSectionWrapper>
  );
};

export default ShortenerSection;
