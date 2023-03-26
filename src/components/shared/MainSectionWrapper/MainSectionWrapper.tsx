import { HTMLMotionProps, motion } from "framer-motion";

type Props = HTMLMotionProps<'section'>;
  
const MainSectionWrapper = ({ children, className="", ...props }: Props) => {
  return (
    <motion.section
      {...props}
      className={`m-auto w-full md:w-3/4 max-w-7xl${className && ` ${className}`}`}
    >
      {children}
    </motion.section>
  );
};

export default MainSectionWrapper;