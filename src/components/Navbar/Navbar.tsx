import appLogo from "../../assets/appLogo.png";
import { BsGithub } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="h-auto w-full">
      <ul className="sm:w-4/5 m-auto list-none flex justify-between items-center py-6 px-4">
        <li>
          <img src={appLogo} className="h-7" alt="App logo" />
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
