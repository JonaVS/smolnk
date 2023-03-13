import { useState } from "react";
import { Url } from "../../../../models/Url";
import { ApiResult } from "../../../../types/ApiResult";
import apiAgent from "../../../../api/agent";
import { getApiError } from "../../../../utils/errorExtractor";
import { ensureHttpPrefix } from "../../../../utils/httpPrefix";

export const useShortenerForm = () => {
  const [urlInputVal, setUrlInputVal] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [apiResult, setApiResult] = useState<ApiResult<Url>>({data: null, error: null})

  const handleUrlInputChange = ( event: React.ChangeEvent<HTMLInputElement>): void => {
    setUrlInputVal(event.target.value);
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setApiResult({ data: null, error: null });
    try {
      const result = await apiAgent.url.shortenUrl({
        urlToShorten: ensureHttpPrefix(urlInputVal),
      });
      setApiResult({ data: result, error: null });
      setUrlInputVal("");
    } catch (error) {
      setApiResult({ data: null, error: getApiError(error) });
    }
    setIsLoading(false);
  };

  return { urlInputVal, isLoading, apiResult, handleUrlInputChange, handleFormSubmit}
};
