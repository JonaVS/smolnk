import ShortenerSectionMsg from "./ShortenerSectionMsg/ShortenerSectionMsg";
import ShortenerForm from "./ShortenerSectionForm/ShortenerForm";

const ShortenerSection = () => {
  return (
    <section className="m-auto">
      <ShortenerSectionMsg />
      <ShortenerForm/>
    </section>
  );
};

export default ShortenerSection;
