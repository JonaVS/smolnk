import { UrlUsageCount } from "../../../models/Url";
import { Result } from "../../../types/Result";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";
import UrlUsage from "./UrlUsageCount/UrlUsage";

type Props = {
  isLoading: boolean,
  result: Result<UrlUsageCount>
}

const UrlUsageResult = ({ isLoading, result }: Props) => {
  return (
    <div className="h-20 mt-6 text-center">
      {isLoading ? (
        <LoadingSpinner />
      ) : result.data && result.data.usageCount !== null ? (
        <UrlUsage usageCount={result.data.usageCount.toLocaleString()}/>
      ) : (
        result.error && <p className="text-white font-bold">{result.error}</p>
      )}
    </div>
  );
};



export default UrlUsageResult;
