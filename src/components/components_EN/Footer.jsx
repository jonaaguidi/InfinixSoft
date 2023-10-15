// import Wave from "/img/Wave/Wave.svg"
import Arrow from "/img/Services/Arrow_2.svg"
import infinix_logo from "/img/favicons/favicon_infinix.ico"
import Form from "../components_EN/Form"
import { BannerLogos2 } from "../../constants/index_imgs"
import { useEffect, useState } from "react";
import Dropdown_Lang_Footer from "./Dropdown_Lang_footer";
// import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {

  // Estado para abrir y cerrar el Dropdown del LANG y Form.
  const [showDropdownLang, setShowDropdownLang] = useState(false);
  const [showForm, setShowForm] = useState(false);
  // Función para mostrar el formulario cuando se hace clic en el botón
  const handleShowForm = () => {
    setShowForm(true);
  };

  const toggleDropdownLang = () => {
    setShowDropdownLang(!showDropdownLang);
  };

  // Efecto para manejar el click global para cerrar el Dropdown
  useEffect(() => {
    const handleGlobalClick = (event) => {
      // Si el clic ocurrió fuera del componente <Main></Main>, cierra el Dropdown
      if (event.target.closest("main")) {
        setShowDropdownLang(false);
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
      <footer id="footer" className="w-full h-fit flex flex-col items-center justify-center bg-[#171718] max-[970px]:px-14 max-[560px]:px-7">

        <div className="w-fit mt-16 max-w-[693px] flex flex-col gap-8 z-20">
          <div className="flex items-center gap-14 text-center max-[620px]:gap-7 max-[510px]:gap-4 max-[430px]:gap-2 max-[455px]:flex-wrap max-[455px]:justify-center">
            <div className="flex flex-col gap-3 max-[790px]:scale-90">
              <p className="font-bold text-5xl max-[520px]:text-3xl ">
                650<span className="text-[#DB3957]">+</span>
              </p>
              <p className="text-lg font-normal">
                Completed Projects
              </p>
            </div>
            <div className="flex flex-col gap-3 max-[790px]:scale-90 max-[425px]:mr-4">
              <p className="font-bold text-5xl max-[520px]:text-3xl">
                120<span className="text-[#DB3957]">+</span>
              </p>
              <p className="text-lg font-normal">Clients</p>
            </div>
            <div className="flex flex-col gap-3 max-[790px]:scale-90 max-[425px]:mt-4 max-[425px]:ml-4">
              <p className="font-bold text-5xl text-center max-[520px]:text-3xl">5</p>
              <p className="text-lg font-normal">Locations</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-20 py-20 pb-60 max-[1300px]:gap-10 max-[610px]:scale-90">
          {BannerLogos2.map((logo) => (
            <img
              key={logo.name}
              src={logo.icon}
              alt={logo.name}
              className="w-fit h-fit mx-4"
            />
          ))}
        </div>

        <div className="relative pt-20 pb-40 flex flex-col items-center justify-center gap-4 text-center">
          <h4 className="w-[548px] z-[990] text-[32px] font-bold max-[555px]:text-[28px] max-[555px]:w-[335px]">We’re Here, Ready to Listen.</h4>
          <button onClick={handleShowForm} className="btn-primary btn-hover z-[990] flex items-center justify-center gap-2 transition duration-400 hover:shadow-button">
            Let’s Speak Now
            <img src={Arrow} alt="Arrow" />
          </button>
          <div className="absolute z-10 rounded-[999px] bg-[#DB3957] blur-[160px] top-36 opacity-30 w-[600px] h-[311px] max:[971px]:w-[400px]"></div>
        </div>


        <div id="contact" className="w-full min-w-[400px] h-fit rounded-xl bg-[#181819] flex z-[990] justify-between items-center px-40 py-20 max-[1300px]:flex-col max-[1300px]:gap-6 max-[980px]:px-14 max-[560px]:px-7">
          <p className="text-[#F4F5F6] text-center flex flex-wrap items-center gap-2 max-[500px]:flex-col">
            <img src={infinix_logo} width={24} height={24} alt="logotipo" />
            Made by InfinixSoft <span>©2008 - 2023</span>
          </p>
          <ul className="flex items-center justify-center gap-8 cursor-pointer max-[980px]:flex-wrap max-[980px]:gap-5">
            <li className="hover-underline-animation">
              <a href="#about">About</a>
            </li>
            <li className="hover-underline-animation">
              <a href="#projects">Case Studies</a>
            </li>
            <li className="hover-underline-animation">
              <a href="#services">Our Services</a>
            </li>
            <li className="hover-underline-animation">
              <a target="_blank" href="https://infinixholdinggroup.com/partner/" rel="noreferrer">Partner</a>
            </li>
            <li className="relative">
              <div onClick={toggleDropdownLang} className="flex items-center justify-center gap-2 cursor-pointer max-[1050px]:gap-1">
                <p className="hover-underline-animation">English (US)</p>
                <img className="scale-105 relative pb-1.5 pl-0.5 opacity-60 hover:opacity-100 cursor-pointer  max-[420px]:scale-95" src={Arrow} alt="arrow" />
              </div>
              {showDropdownLang && <Dropdown_Lang_Footer />}
            </li>
          </ul>

        </div>
        {showForm && <Form onClose={() => setShowForm(false)} />}
      </footer>

    </>
  );
};

export default Footer;
