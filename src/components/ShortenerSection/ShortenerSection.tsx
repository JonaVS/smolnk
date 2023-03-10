import ShortenerSectionMsg from "./ShortenerSectionMsg/ShortenerSectionMsg";
import ShortenerForm from "./ShortenerSectionForm/ShortenerForm";

const ShortenerSection = () => {
  return (
    <section className="flex flex-col place-content-center h-shortenerSectionH">
      <ShortenerSectionMsg />
      <ShortenerForm/>
    </section>
  );
};

export default ShortenerSection;
