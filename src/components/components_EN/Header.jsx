import { useEffect, useState } from "react";
import Logo from "/img/Header/logo.svg"
import Arrow from "/img/Header/arrow_dropdown.svg"
import Dropdown_Holding from "./Dropdown_Holding.jsx";
import Dropdown_Lang from "./Dropdown_Lang.jsx";
import Dropdown_Menu from "./Dropdown_Menu";
import Dubai from "./Dubai.jsx";


const Header = () => {

  // Estado para abrir y cerrar el Dropdown del Holding
  const [showDropdownHolding, setShowDropdownHolding] = useState(false);
  // Estado para abrir y cerrar el Dropdown del LANG.
  const [showDropdownLang, setShowDropdownLang] = useState(false);
  // Estado para abrir y cerrar el Dropdown del Menú.
  const [showDropdownMenu, setShowDropdownMenu] = useState(false);

  // Función abrir/cerrar dropdown del Holding
  const toggleDropdownHolding = () => {
    setShowDropdownHolding(!showDropdownHolding);
    if (!showDropdownHolding) {
      setShowDropdownLang(false);
      setShowDropdownMenu(false);
    }
  };

  // Función abrir/cerrar dropdown de las Flags.
  const toggleDropdownLang = () => {
    setShowDropdownLang(!showDropdownLang);
    if (!showDropdownLang) {
      setShowDropdownHolding(false);
      setShowDropdownMenu(false);
    }
  };

  // Función abrir/cerrar dropdown de Menú.
  const toggleDropdownMenu = () => {
    setShowDropdownMenu(!showDropdownMenu);
    if (!showDropdownMenu) {
      setShowDropdownHolding(false);
      setShowDropdownLang(false);
    }
  };


  // Efecto para manejar el click global para cerrar los Dropdowns
  useEffect(() => {
    const handleGlobalClick = (event) => {
      // Si el clic ocurrió fuera del componente <Main></Main>, cierra el Dropdown
      if (event.target.closest("main")) {
        setShowDropdownHolding(false);
        setShowDropdownLang(false);
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
    <>
      <Dubai />
      <header className="w-full h-fit z-max bg-transparent opacity-100 px-28 py-5 flex justify-between items-center max-[880px]:px-14 max-[675px]:px-7 max-[675px]:py-6">

        <div className="flex gap-[18px] z-50 items-center max-[500px]:gap-2">
          <a href="#hero">
            <img src={Logo} width={201} height={42} alt="InfinixSoft" className="max-[580px]:w-40 max-[440px]:w-32 max-[420px]:w-30 max-[375px]:w-28 max-[360px]:w-24" />
          </a>
          <img className="relative p-2 mt-1 opacity-70 hover:bg-[#303035] hover:rounded-lg hover:opacity-100 cursor-pointer max-[580px]:p-2 max-[420px]:w-8" src={Arrow} alt="arrow" onClick={toggleDropdownHolding} />
          {showDropdownHolding && <Dropdown_Holding />}
        </div>
    

        <div className="flex items-center z-50 gap-4 mt-2 max-[580px]:gap-3 max-[470px]:gap-2 max-[400px]:gap-0">
          <div onClick={toggleDropdownLang} className="flex items-center justify-center gap-2 cursor-pointer">
            <p className="text-[14px] font-normal">English (US)</p>
            <img className="relative px-1 opacity-60 hover:opacity-100 cursor-pointer max-[580px]:p-2 max-[420px]:w-8" src={Arrow} alt="arrow"  />
          </div>
          {showDropdownLang && <Dropdown_Lang />}


          <div className="ml-12 cursor-pointer max-[580px]:ml-6 min-[650px]:hidden">
            <div
              className={`menu-button ${showDropdownMenu ? 'open' : ''}`}
              onClick={() => {
                toggleDropdownMenu();
              }}
            >
              <div className="menu-icon ">
                <span className={`span-1 ${showDropdownMenu ? 'open-span-1' : ''}`}></span>
                <span className={`span-2 ${showDropdownMenu ? 'open-span-2' : ''}`}></span>
                <span className={`span-3 ${showDropdownMenu ? 'open-span-3' : ''}`}></span>
              </div>
            </div>
            {showDropdownMenu && <Dropdown_Menu />}
          </div>

        </div>
      </header>
    </>
  );
};

export default Header;
