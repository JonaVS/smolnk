import TextInput from "../../shared/TextInput/TextInput";

const ShortenerForm = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()} className="flex justify-center px-3 mt-8">
        <TextInput
          id="urlInput"
          label="URL to shorten"
          labelClassName="hidden"
          className="max-w-xl w-10/12 h-14 px-3 bg-gray-50 text-gray-500 font-medium rounded-l-xl drop-shadow-lg focus:outline-none"
          placeholder="Enter a long URL here..."
        />
        <button
          type="submit"
          className="px-3 text-gray-50 font-bold bg-purple-600 rounded-r-xl drop-shadow-2xl"
        >
          Shorten!
        </button>
      </form>
    </>
  );
};

export default ShortenerForm;
