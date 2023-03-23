import { Url } from "../../../models/Url";
import { motion, Variants } from "framer-motion";
import { Result } from "../../../types/Result";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";
import ShortenerResultActions from "./ShortenerResultActions/ShortenerResultActions";

type props = {
  isLoading: boolean;
  result: Result<Url | null>;
};

const resultContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

const resultText: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

const ShortenerResult = ({ isLoading, result }: props) => {
  return (
    <motion.div
      className="mt-6 h-20 w-max mx-auto text-white font-bold"
      variants={resultContainer}
      initial="hidden"
      animate="show"
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <motion.p
            variants={resultText}
            initial="hidden"
            animate="show"
          >
            {result.data?.shortUrl ? result.data.shortUrl : result.error}
          </motion.p>
          {result.data?.shortUrl && (
            <ShortenerResultActions shortUrl={result.data.shortUrl} />
          )}
        </>
      )}
    </motion.div>
  );
};

export default ShortenerResult;
