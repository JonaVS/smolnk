import { AnimatePresence, motion, Variants } from "framer-motion";

type Props = {
  show: boolean;
  text: string;
  wrapperClassName?: string;
  textClassName?: string;
};

const toastContainer: Variants = {
  hidden: { scale: 0, translateX: "50%", right: "50%" },
  show: { scale: 1 },
  exit: { opacity: 0, transition: { duration: 0.3 } },
};

const ActionToast = ({
  show,
  text,
  wrapperClassName="",
  textClassName="",
}: Props) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={toastContainer}
          initial="hidden"
          animate="show"
          exit="exit"
          className={`absolute bottom-[-30px] bg-purple-600 rounded-md 
          flex items-center p-1${wrapperClassName && ` ${wrapperClassName}`}`}
        >
          <span className={`font-bold text-xs${textClassName && ` ${textClassName}`}`}>{text}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ActionToast;
