import TextInput from "../../shared/TextInput/TextInput";
import ShortenerResult from "../ShortenerResult/ShortenerResult";
import { useShortenerForm } from "./hooks/useShortenerForm";

const ShortenerForm = () => {
  const {
    urlInputVal,
    apiResult,
    isLoading,
    handleUrlInputChange,
    handleFormSubmit,
  } = useShortenerForm();

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        className="flex justify-center px-3 mt-8"
      >
        <TextInput
          id="urlInput"
          label="URL to shorten"
          labelClassName="hidden"
          className="max-w-xl w-10/12 h-14 px-3 bg-gray-50 text-gray-500 font-medium rounded-l-xl drop-shadow-lg focus:outline-none"
          placeholder="Enter a long URL here..."
          onChange={handleUrlInputChange}
          value={urlInputVal}
        />
        <button
          type="submit"
          className="px-3 text-gray-50 font-bold bg-purple-600 rounded-r-xl drop-shadow-2xl transition-opacity 
          duration-200 ease-in-out hover:opacity-75 disabled:opacity-50 disabled:pointer-events-none"
          disabled={(urlInputVal === "" || isLoading) ? true : false}
        >
          Shorten!
        </button>
      </form>
      <ShortenerResult isLoading={isLoading} result={apiResult}/>
    </>
  );
};

export default ShortenerForm;
