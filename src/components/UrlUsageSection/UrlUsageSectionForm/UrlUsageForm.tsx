import { useApiForm } from "../../../hooks/useApiForm";
import { UrlUsageCount, UrlUsageFormValues } from "../../../models/Url";
import apiAgent from "../../../api/agent";
import { ensureHttpPrefix } from "../../../utils/httpPrefix";
import TextInput from "../../shared/TextInput/TextInput";
import UrlUsageResult from "../UrlUsageResult/UrlUsageResult";

const initialValues = {
  shortUrl: ""
}

const UrlUsageForm = () => {
  const { values, isSubmitting, apiResult, handleChange, handleSubmit } =
    useApiForm<UrlUsageFormValues, UrlUsageCount>({
      initialValues,
      cleanOnSuccess: false,
      onSubmit: async (values): Promise<UrlUsageCount> => {
        return await apiAgent.url.getUrlUsageCount(ensureHttpPrefix(values.shortUrl));
      },
    }); 

  return (
    <>
      <form onSubmit={handleSubmit} className="flex px-3 w-full justify-center">
        <TextInput
          id="shortUrlInput"
          label="Short URL to search"
          value={values.shortUrl}
          name="shortUrl"
          labelClassName="hidden"
          placeholder="Ex: https://smolnk.com/wn9H0C"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="px-3 text-gray-50 font-bold bg-purple-600 rounded-r-xl drop-shadow-2xl transition-opacity 
          duration-200 ease-in-out hover:opacity-75 disabled:opacity-50 disabled:pointer-events-none"
          disabled={(values.shortUrl === "" || isSubmitting) ? true : false}
        >
          Submit
        </button>
      </form>
      <UrlUsageResult isLoading={isSubmitting} result={apiResult}/>
    </>
  );
};

export default UrlUsageForm;
