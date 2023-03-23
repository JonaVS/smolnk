import { Variants, motion } from "framer-motion";
import { UrlUsageCount } from "../../../models/Url";
import { Result } from "../../../types/Result";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";
import UrlUsage from "./UrlUsageCount/UrlUsage";

type Props = {
  isLoading: boolean,
  result: Result<UrlUsageCount>
}

const resultContainer: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

const resultError: Variants = {
  hidden: { opacity: 0, scale: 0.6 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
}

const UrlUsageResult = ({ isLoading, result }: Props) => {
  return (
    <motion.div
      className="h-20 mt-6 text-center"
      variants={resultContainer}
      initial="hidden"
      animate="show"
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : result.data && result.data.usageCount !== null ? (
        <UrlUsage usageCount={result.data.usageCount.toLocaleString()}/>
      ) : (
        result.error && (
          <motion.p
            variants={resultError}
            initial="hidden"
            animate="show"
            className="text-white font-bold"
          >
            {result.error}
          </motion.p>
        )
      )}
    </motion.div>
  );
};

export default UrlUsageResult;
