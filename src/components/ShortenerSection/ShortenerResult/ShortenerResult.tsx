import { Url } from "../../../models/Url";
import { Result } from "../../../types/Result";
import LoadingSpinner from "../../shared/LoadingSpinner/LoadingSpinner";
import ShortenerResultActions from "./ShortenerResultActions/ShortenerResultActions";

type props = {
  isLoading: boolean;
  result: Result<Url | null>;
};

const ShortenerResult = ({ isLoading, result }: props) => {
  return (
    <div className="mt-6 h-20 w-max mx-auto text-white font-bold">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <p>{result.data?.shortUrl ? result.data.shortUrl : result.error}</p>
          {result.data?.shortUrl && (
            <ShortenerResultActions shortUrl={result.data.shortUrl} />
          )}
        </>
      )}
    </div>
  );
};

export default ShortenerResult;
