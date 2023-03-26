import { LayoutGroup, Transition, Variants } from "framer-motion";
import MainSectionWrapper from "../shared/MainSectionWrapper/MainSectionWrapper";
import ShortenerSectionMsg from "./ShortenerSectionMsg/ShortenerSectionMsg";
import ShortenerForm from "./ShortenerSectionForm/ShortenerForm";

const transition: Transition = {
  duration: 0.5,
  layout: {type: "tween", duration: 0.3}
}

const section: Variants = {
  hidden: { x: -100, opacity: 0},
  show: { opacity: 1, x: 0 },
  exit: { x: -100, opacity: 0 }
};

const ShortenerSection = () => {
  return (
    <LayoutGroup>
      <MainSectionWrapper
        variants={section}
        transition={transition}
        initial="hidden"
        animate="show"
        exit="exit"
        layout="position"
      >
        <ShortenerSectionMsg />
        <ShortenerForm />
      </MainSectionWrapper>
    </LayoutGroup>
  );
};

export default ShortenerSection;
