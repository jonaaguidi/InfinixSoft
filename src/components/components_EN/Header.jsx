import "../../styles/index.css";
import Logo from "/img/Header/logo.svg"
import Burger from "/img/Header/burger_menu.svg"
import Arrow from "/img/Header/arrow_dropdown.svg"
import EN from "/img/Header/united-states-of-america.png"
import ES from "/img/Header/spain.png"
import BR from "/img/Header/brazil.png"
import Dropdown from "./Dropdown.jsx";
import { useState } from "react";

const Header = () => {

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <header className="w-full h-fit px-28 py-5 flex justify-between items-center ">

      <div className="flex gap-5 z-50  items-center">
        <img src={Logo} width={200} alt="InfinixSoft" />
        <img className="relative p-3 mt-2 opacity-60 hover:bg-[#242427] hover:rounded-lg hover:opacity-100 cursor-pointer" src={Arrow} alt="arrow" onClick={toggleDropdown} />
        {showDropdown && <Dropdown />}
      </div>

      <div className="flex items-center z-50 gap-7 mt-2">
        <a className="cursor-pointer hover:scale-110" href="/">
          <img src={EN} alt="English" />
        </a>
        <a className="cursor-pointer hover:scale-110" href="/es">
          <img src={ES} alt="Spanish" />
        </a>
        <a className="cursor-pointer hover:scale-110" href="/br">
          <img src={BR} alt="Portuguese" />
        </a>
        <div className="ml-10 cursor-pointer">
          <img className="opacity-60 hover:opacity-100" src={Burger} alt="menu" />
        </div>
      </div>

    </header>
  );
};

export default Header;
