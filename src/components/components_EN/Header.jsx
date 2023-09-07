import "../../styles/index.css";
import Logo from "../../../public/Header/logo.svg"
import EN from "../../../public/Header/united-states-of-america.png"
import ES from "../../../public/Header/spain.png"
import BR from "../../../public/Header/brazil.png"
import Burger from "../../../public/Header/burger_menu.svg"
import Arrow from "../../../public/Header/arrow_dropdown.svg"

const Header = () => {
  return (
    <header className="w-full h-fit px-28 py-5 flex justify-between items-center">
      
      <div className="flex gap-5 items-center">
        <img src={Logo} width={226} alt="InfinixSoft" />
        <img className="p-4 hover:bg-slate-200 hover:rounded-lg cursor-pointer" src={Arrow} alt="arrow" />
      </div>

      <div className="flex items-center gap-7">
        <a className="cursor-pointer flag" href="/">
          <img src={EN} alt="English" />
        </a>
        <a className="cursor-pointer flag" href="/es">
          <img src={ES} alt="Spanish" />
        </a>
        <a className="cursor-pointer flag" href="/br">
          <img src={BR} alt="Portuguese" />
        </a>
        <div className="ml-10">
          <img src={Burger} alt="menu" />
        </div>
      </div>


    </header>
  );
};

export default Header;
