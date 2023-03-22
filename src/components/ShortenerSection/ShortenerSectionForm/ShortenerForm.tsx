import { useApiForm } from "../../../hooks/useApiForm";
import { ShortenerFormValues, Url } from "../../../models/Url";
import apiAgent from "../../../api/agent";
import { ensureHttpPrefix } from "../../../utils/httpPrefix";
import { shouldShowResultStatus } from "../../../utils/showResultStatus";
import TextInput from "../../shared/TextInput/TextInput";
import Button from "../../shared/Button/Button";
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

  const showResultStatus = shouldShowResultStatus(apiResult, isSubmitting);

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
          placeholder="Enter a long URL here..."
          onChange={handleChange}
          value={values.urlToShorten}
        />
        <Button
          type="submit"
          variant="formPrimary"
          disabled={(values.urlToShorten === "" || isSubmitting) ? true : false}
        >
          Shorten!
        </Button>
      </form>
      {showResultStatus && <ShortenerResult isLoading={isSubmitting} result={apiResult}/>}
    </>
  );
};

export default ShortenerForm;
