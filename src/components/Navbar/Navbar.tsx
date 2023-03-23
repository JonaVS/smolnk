import appLogo from "../../assets/appLogo.png";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="h-16 flex items-center w-full fixed backdrop-blur-sm">
      <ul className="w-11/12 md:w-4/5 m-auto list-none flex justify-between items-center">
        <li>
          <Link to="/">
            <img src={appLogo} className="h-6" alt="App logo" />
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/JonaVS"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub size={25} color="white" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
