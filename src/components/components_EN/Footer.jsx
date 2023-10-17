import { useEffect, useState } from "react";
import Dropdown_Lang_Footer from "./Dropdown_Lang_footer";
import infinix_logo from "/img/favicons/favicon_infinix.ico";
import Arrow from "/img/Services/Arrow_2.svg";

const Footer = () => {
    // Estado para abrir y cerrar el Dropdown del LANG y Form.
    const [showDropdownLang, setShowDropdownLang] = useState(false);

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
        <div className="relative bottom-0 left-0 w-full h-fit rounded-xl bg-[#181819] flex z-10 justify-between items-center px-40 py-20 max-[1300px]:flex-col max-[1300px]:gap-6 max-[980px]:px-14 max-[560px]:px-7">
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
                    <div onClick={toggleDropdownLang} className="flex items-center justify-center gap-2 cursor-pointer max-[1050px]:gap-2">
                        <p className="hover-underline-animation">English (US)</p>
                        <img className="scale-105 relative pb-1.5 pl-0.5 opacity-60 hover:opacity-100 cursor-pointer rotate-[270deg] mb-1 max-[420px]:scale-95" src={Arrow} alt="arrow" />
                    </div>
                    {showDropdownLang && <Dropdown_Lang_Footer />}
                </li>
            </ul>
        </div>
    );
};

export default Footer;
