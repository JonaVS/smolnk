import { useApiForm } from "../../../hooks/useApiForm";
import { UrlUsageCount, UrlUsageFormValues } from "../../../models/Url";
import apiAgent from "../../../api/agent";
import { ensureHttpPrefix } from "../../../utils/httpPrefix";
import { shouldShowResultStatus } from "../../../utils/showResultStatus";
import { motion } from "framer-motion";
import TextInput from "../../shared/TextInput/TextInput";
import Button from "../../shared/Button/Button";
import { isEmptyString } from "../../../utils/emptyString";
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
        return await apiAgent.url.getUrlUsageCount(ensureHttpPrefix(values.shortUrl.trim()));
      },
    }); 
    
  const showResultStatus = shouldShowResultStatus(apiResult, isSubmitting);

  return (
    <>
      <motion.form onSubmit={handleSubmit} className="flex justify-center px-3 mt-3" layout>
        <TextInput
          id="shortUrlInput"
          label="Short URL to search"
          value={values.shortUrl}
          name="shortUrl"
          labelClassName="hidden"
          placeholder="Ex: https://smolnk.com/wn9H0C"
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="formPrimary"
          disabled={(isEmptyString(values.shortUrl) || isSubmitting) ? true : false}
        >
          Submit
        </Button>
      </motion.form>
      {showResultStatus && <UrlUsageResult isLoading={isSubmitting} result={apiResult}/>}
    </>
  );
};

export default UrlUsageForm;
