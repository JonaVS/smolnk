import { Url } from "../../../models/Url";
import { ApiResult } from "../../../types/ApiResult";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";

type props = {
  isLoading: boolean
  result: ApiResult<Url | null>
}

const ShortenerResult = ({isLoading, result}:props) => {
  return (
    <div className="mt-6 h-9 w-max mx-auto text-white font-bold">
      {isLoading && <LoadingSpinner />}
      <p>{result.data?.shortUrl ? result.data.shortUrl : result.error }</p>
    </div>
  );
};

export default ShortenerResult;