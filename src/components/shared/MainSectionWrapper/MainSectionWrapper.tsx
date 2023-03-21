import { HTMLMotionProps, motion } from "framer-motion";

type Props = HTMLMotionProps<'section'>;
  
const MainSectionWrapper = ({ children, ...props }: Props) => {
  return (
    <motion.section {...props} className={`m-auto w-full md:w-3/4 max-w-7xl ${props.className}`}>{children}</motion.section>
  );
};

export default MainSectionWrapper;