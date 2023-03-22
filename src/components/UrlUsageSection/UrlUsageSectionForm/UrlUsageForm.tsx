import { useApiForm } from "../../../hooks/useApiForm";
import { UrlUsageCount, UrlUsageFormValues } from "../../../models/Url";
import apiAgent from "../../../api/agent";
import { ensureHttpPrefix } from "../../../utils/httpPrefix";
import { shouldShowResultStatus } from "../../../utils/showResultStatus";
import { motion } from "framer-motion";
import TextInput from "../../shared/TextInput/TextInput";
import Button from "../../shared/Button/Button";
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
    
  const showResultStatus = shouldShowResultStatus(apiResult, isSubmitting);

  return (
    <>
      <motion.form onSubmit={handleSubmit} className="flex px-3 w-full justify-center" layout>
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
          disabled={(values.shortUrl === "" || isSubmitting) ? true : false}
        >
          Submit
        </Button>
      </motion.form>
      {showResultStatus && <UrlUsageResult isLoading={isSubmitting} result={apiResult}/>}
    </>
  );
};

export default UrlUsageForm;
