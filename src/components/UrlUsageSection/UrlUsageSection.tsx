import { Link } from "react-router-dom";
import UrlUsageForm from "./UrlUsageSectionForm/UrlUsageForm";

const UrlUsageSection = () => {
  return (
    <section className="m-auto w-full flex flex-col place-items-center">
      <Link to="/" className=" text-cyan-200 font-bold">
        Go to Home
      </Link>
      <p className="text-center mb-5 px-2 text-gray-50 text-xs sm:text-sm font-bold">
        Enter link below to see usage count <span className="text-xl">🙂</span>
      </p>
      <UrlUsageForm />
    </section>
  );
};

export default UrlUsageSection;
