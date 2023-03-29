import { Variants, motion } from "framer-motion";

type Props = {
  usageCount: string,  
}

const container: Variants = {
  hidden: { scale: 0.5 },
  show: { scale: 1, transition: { duration: 0.3 } },
};

const UrlUsage = ({usageCount}:Props) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-44 mx-auto rounded-xl p-2 text-gray-50 font-bold text-center shadow shadow-gray-800"
    >
      <p>Usage count</p>
      <span className="font-extrabold text-xl text-teal-200 m-auto block">{usageCount}</span>
    </motion.div>
  );
};

export default UrlUsage;
