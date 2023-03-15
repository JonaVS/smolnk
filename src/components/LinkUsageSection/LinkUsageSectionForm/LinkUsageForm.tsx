import TextInput from "../../shared/TextInput/TextInput";

const LinkUsageForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex px-3 w-full justify-center"
    >
      <TextInput
        id="shortUrlInput"
        label="Short URL to search"
        labelClassName="hidden"
        className="max-w-xl w-10/12 h-14 px-3 bg-gray-50 text-gray-500 font-medium rounded-l-xl drop-shadow-lg focus:outline-none"
        placeholder="Ex: https://smolnk.com/wn9H0C"
      />
      <button
        type="submit"
        className="px-3 text-gray-50 font-bold bg-purple-600 rounded-r-xl drop-shadow-2xl transition-opacity 
          duration-200 ease-in-out hover:opacity-75 disabled:opacity-50 disabled:pointer-events-none"
      >
        Submit
      </button>
    </form>
  );
};

export default LinkUsageForm;
