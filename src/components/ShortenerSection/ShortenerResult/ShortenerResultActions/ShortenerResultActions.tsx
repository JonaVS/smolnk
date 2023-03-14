import { useState } from "react";
import { IoMdCopy } from "react-icons/io";
import { RxOpenInNewWindow } from "react-icons/rx";

type props = { shortUrl: string };
const btnClassName = "rounded-full p-2 bg-teal-100 drop-shadow-lg transition-color hover:bg-purple-200 duration-300 ease-in-out"

const ShortenerResultActions = ({ shortUrl }: props) => {
 const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = (): void => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const handleOpenInNewWindow = (): void => {
    window.open(shortUrl, '_blank');
  };

  return (
    <div className="flex gap-2 justify-center mt-2">
      <button
        title="Copy to clipboard"
        type="button"
        onClick={handleCopyToClipboard}
        className={`relative ${btnClassName}`}
      >
        <IoMdCopy size={25} color="gray" />
        {copied && (
          <span className="absolute bottom-[-25px] right-1/2 translate-x-2/4 font-bold text-sm">
            Copied!
          </span>
        )}
      </button>
      <button
        title="Open in new window"
        type="button"
        onClick={handleOpenInNewWindow}
        className={btnClassName}
      >
        <RxOpenInNewWindow size={25} color="gray" />
      </button>
    </div>
  );
};

export default ShortenerResultActions;
