import { UrlUsageCount } from "../../../models/Url";
import { Result } from "../../../types/Result";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";

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
        <div className="w-44 mx-auto rounded-xl p-2 text-gray-50 font-bold text-center shadow-md">
          <p>Usage count</p>
          <span className="font-extrabold text-xl m-auto block">
            {result.data.usageCount.toLocaleString()}
          </span>
        </div>
      ) : (
        result.error && <p className="text-white font-bold">{result.error}</p>
      )}
    </div>
  );
};



export default UrlUsageResult;
