import { useApiForm } from "../../../hooks/useApiForm";
import { ShortenerFormValues, Url } from "../../../models/Url";
import apiAgent from "../../../api/agent";
import { ensureHttpPrefix } from "../../../utils/httpPrefix";
import TextInput from "../../shared/TextInput/TextInput";
import ShortenerResult from "../ShortenerResult/ShortenerResult";

const initialValues = {
  urlToShorten: ""
}

const ShortenerForm = () => {
  const { values, isSubmitting, apiResult, handleChange, handleSubmit } =
    useApiForm<ShortenerFormValues, Url>({
      initialValues,
      cleanOnSuccess: false,
      onSubmit: async (values): Promise<Url> => {
        return await apiAgent.url.shortenUrl({urlToShorten: ensureHttpPrefix(values.urlToShorten)})
      },
    }); 

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex justify-center px-3 mt-8"
      >
        <TextInput
          id="urlInput"
          label="URL to shorten"
          name="urlToShorten"
          labelClassName="hidden"
          className="max-w-xl w-10/12 h-14 px-3 bg-gray-50 text-gray-500 font-medium rounded-l-xl drop-shadow-lg focus:outline-none"
          placeholder="Enter a long URL here..."
          onChange={handleChange}
          value={values.urlToShorten}
        />
        <button
          type="submit"
          className="px-3 text-gray-50 font-bold bg-purple-600 rounded-r-xl drop-shadow-2xl transition-opacity 
          duration-200 ease-in-out hover:opacity-75 disabled:opacity-50 disabled:pointer-events-none"
          disabled={(values.urlToShorten === "" || isSubmitting) ? true : false}
        >
          Shorten!
        </button>
      </form>
      <ShortenerResult isLoading={isSubmitting} result={apiResult}/>
    </>
  );
};

export default ShortenerForm;
