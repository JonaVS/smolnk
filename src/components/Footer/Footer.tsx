import { motion, Variants } from "framer-motion";

const link: Variants = {
  hover: {scale: 0.9, transition: {type: "spring", duration: 0.5}}
}

const Footer = () => {
  return (
    <footer className="w-full h-10 flex justify-center place-items-center text-gray-50 font-bold mt-auto p-1">
      Made by&nbsp;
      <motion.a
        variants={link} whileHover="hover"
        href="https://github.com/JonaVS"
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-200"
      >
        JonaVS
      </motion.a>
    </footer>
  );
};

export default Footer;
