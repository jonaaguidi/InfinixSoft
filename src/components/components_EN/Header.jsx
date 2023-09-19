import { useEffect, useState } from "react";
import "../../styles/index.css";
import Logo from "/img/Header/logo.svg"
import Burger from "/img/Header/burger_menu.svg"
import Arrow from "/img/Header/arrow_dropdown.svg"
import EN from "/img/Header/united-states-of-america.png"
import ES from "/img/Header/spain.png"
import BR from "/img/Header/brazil.png"
import Dropdown_Holding from "./Dropdown_Holding.jsx";
import Dropdown_Flags from "./Dropdown_Flags";
import Dropdown_Menu from "./Dropdown_Menu";


const Header = () => {

  // Estado para abrir y cerrar el Dropdown del Holding
  const [showDropdownHolding, setShowDropdownHolding] = useState(false);
  // Estado para abrir y cerrar el Dropdown de las Flags.
  const [showDropdownFlags, setShowDropdownFlags] = useState(false);
  // Estado para abrir y cerrar el Dropdown del Menú.
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  // Función abrir/cerrar dropdown del Holding
  const toggleDropdownHolding = () => {
    setShowDropdownHolding(!showDropdownHolding);
    if (!showDropdownHolding) {
      setShowDropdownFlags(false);
      setShowDropdownMenu(false);
    }
  };

  // Función abrir/cerrar dropdown de las Flags.
  const toggleDropdownFlags = () => {
    setShowDropdownFlags(!showDropdownFlags);
    if (!showDropdownFlags) {
      setShowDropdownHolding(false);
      setShowDropdownMenu(false);
    }
  };

  // Función abrir/cerrar dropdown de Menú.
  const toggleDropdownMenu = () => {
    setShowDropdownMenu(!showDropdownMenu);
    if (!showDropdownMenu) {
      setShowDropdownHolding(false);
      setShowDropdownFlags(false);
    }
  };


  // Efecto para manejar el click global para cerrar los Dropdowns
  useEffect(() => {
    const handleGlobalClick = (event) => {
      // Si el clic ocurrió fuera del componente <Main></Main>, cierra el Dropdown
      if (event.target.closest("main")) {
        setShowDropdownHolding(false);
        setShowDropdownFlags(false);
        setShowDropdownMenu(false);
      }
    };

    // Agrego el evento de escucha de clic al documento.
    document.addEventListener("click", handleGlobalClick);

    // Limpia el evento de escucha 
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, []);


  return (
    <header className="w-full h-fit fixed z-max bg-black px-28 py-5 flex justify-between items-center shadow-navbar max-[880px]:px-14 max-[675px]:px-7 max-[675px]:py-6">

      <div className="flex gap-5 z-50 items-center max-[500px]:gap-2">
        <a href="#hero">
          <img src={Logo} width={200} alt="InfinixSoft" className="max-[580px]:w-40 max-[440px]:w-32 max-[420px]:w-30 max-[375px]:w-28 max-[360px]:w-24" />
        </a>
        <img className="relative p-3 mt-1 opacity-70 hover:bg-[#242427] hover:rounded-lg hover:opacity-100 cursor-pointer max-[580px]:p-2 max-[420px]:w-8" src={Arrow} alt="arrow" onClick={toggleDropdownHolding} />
        {showDropdownHolding && <Dropdown_Holding />}
      </div>

      <div className="flex items-center z-50 gap-4 mt-2 max-[580px]:gap-3 max-[470px]:gap-2 max-[400px]:gap-0">
        <a className=" flex items-center justify-center gap-1.5 cursor-pointer " href="#">
          <img src={EN} alt="English" className="flags relative max-[420px]:w-[20px]" />
          <img className="w-[28px] opacity-70 hover:bg-[#242427] hover:rounded-lg hover:opacity-100 cursor-pointer max-[580px]:p-2 min-[561px]:hidden" src={Arrow} alt="arrow" onClick={(e) => { e.preventDefault(); toggleDropdownFlags(); }} />
          {showDropdownFlags && <Dropdown_Flags />}
        </a>
        <a className="flags max-[560px]:hidden" href="/es">
          <img src={ES} alt="Spanish" />
        </a>
        <a className="flags max-[560px]:hidden" href="/br">
          <img src={BR} alt="Portuguese" />
        </a>
        <div className="ml-12 cursor-pointer max-[580px]:ml-6">
          <button onClick={toggleDropdownMenu}>
            <img className="p-4 bg-[#171718] rounded-full opacity-90 max-[560px]:p-3" src={Burger} alt="menu" />
          </button>
          {showDropdownMenu && <Dropdown_Menu />}
        </div>
      </div>

    </header>
  );
};

export default Header;
