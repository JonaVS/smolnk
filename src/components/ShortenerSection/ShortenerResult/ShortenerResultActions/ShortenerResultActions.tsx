import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { IoMdCopy } from "react-icons/io";
import ActionToast from "../../../shared/ActionToast/ActionToast";
import { RxOpenInNewWindow } from "react-icons/rx";

type Props = { shortUrl: string };
const btnClassName = "rounded-full p-2 bg-teal-100 drop-shadow-lg transition-color hover:bg-purple-200 duration-300 ease-in-out"

const actionsContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.3
    }
  },
}

const actionItem: Variants = {
  hidden: { opacity: 0, scale: 1.2 },
  show: { opacity: 1, scale: 1, transition: {duration: 0.2}}
}

const ShortenerResultActions = ({ shortUrl }: Props) => {
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
    <motion.div
      className="flex gap-2 justify-center mt-2"
      variants={actionsContainer}
      initial="hidden"
      animate="show"
    >
      <div className="relative">
        <motion.button
          className={`${btnClassName}`}
          title="Copy to clipboard"
          type="button"
          onClick={handleCopyToClipboard}
          variants={actionItem}
        >
          <IoMdCopy size={25} color="gray" />
        </motion.button>
        <ActionToast show={copied} text="Copied!" />
      </div>
      <motion.button
        className={btnClassName}
        title="Open in new window"
        type="button"
        onClick={handleOpenInNewWindow}
        variants={actionItem}
      >
        <RxOpenInNewWindow size={25} color="gray" />
      </motion.button>
    </motion.div>
  );
};

export default ShortenerResultActions;
