import "../../styles/index.css";
import Logo from "/img/Header/logo.svg"
import Burger from "/img/Header/burger_menu.svg"
import Arrow from "/img/Header/arrow_dropdown.svg"
import EN from "/img/Header/united-states-of-america.png"
import ES from "/img/Header/spain.png"
import BR from "/img/Header/brazil.png"
import Dropdown from "./Dropdown.jsx";
import { useEffect, useState } from "react";

const Header = () => {

  // Efecto para manejar el click global para cerrar el dropdown
  useEffect(() => {
    const handleGlobalClick = (event) => {
      // Si el clic ocurrió fuera del componente <Main></Main>, cierra el Dropdown
      if (event.target.closest("main")) {
        setShowDropdown(false);
      }
    };

    // Agrego el evento de escucha de clic al documento.
    document.addEventListener("click", handleGlobalClick);

    // Limpia el evento de escucha 
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);

  // Estado para abrir y cerrar el Dropdown 
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };



  return (
    <header className="w-full h-fit fixed z-max bg-black px-28 py-5 flex justify-between items-center max-[880px]:px-14 max-[675px]:px-7 max-[675px]:py-6">

      <div className="flex gap-5 z-50 items-center max-[375px]:gap-2">
        <img src={Logo} width={200} alt="InfinixSoft" className="max-[580px]:w-40" />
        <img className="relative p-3 mt-2 opacity-70 hover:bg-[#242427] hover:rounded-lg hover:opacity-100 cursor-pointer max-[580px]:p-2" src={Arrow} alt="arrow" onClick={toggleDropdown} />
        {showDropdown && <Dropdown />}
      </div>

      <div className="flex items-center z-50 gap-7 mt-2 max-[580px]:gap-3">
        <a className="cursor-pointer hover:scale-110" href="/">
          <img src={EN} alt="English" />
        </a>
        <a className="cursor-pointer hover:scale-110 max-[470px]:hidden" href="/es">
          <img src={ES} alt="Spanish" />
        </a>
        <a className="cursor-pointer hover:scale-110 max-[470px]:hidden" href="/br">
          <img src={BR} alt="Portuguese" />
        </a>
        <div className="ml-10 cursor-pointer max-[580px]:ml-5">
          <img className="opacity-60 hover:opacity-100" src={Burger} alt="menu" />
        </div>
      </div>

    </header>
  );
};

export default Header;
