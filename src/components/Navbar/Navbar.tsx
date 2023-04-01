import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import appLogo from "../../assets/appLogo.png";
import { BsGithub } from "react-icons/bs";

const navItem: Variants = {
  hover: {scale: 0.9, transition: {type: "spring"}}
} 

const Navbar = () => {
  return (
    <nav className="h-16 flex items-center w-full fixed backdrop-blur-sm">
      <ul className="w-11/12 md:w-4/5 m-auto list-none flex justify-between items-center">
        <motion.li variants={navItem} whileHover="hover">
          <Link to="/">
            <img src={appLogo} className="h-6" alt="App logo" />
          </Link>
        </motion.li>
        <motion.li variants={navItem} whileHover="hover">
          <a
            href="https://github.com/JonaVS/smolnk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={25} color="white" />
          </a>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Navbar;
