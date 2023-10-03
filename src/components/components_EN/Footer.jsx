import WaveSection from "../components_EN/Wave";
import Arrow from "/img/Blog/Arrow_2.svg"
import infinix_logo from "/img/favicons/favicon_infinix.ico"
import Form from "../components_EN/Form"
import { BannerLogos2 } from "../../constants/index_imgs"
import { useState } from "react";

const Footer = () => {
  const [showForm, setShowForm] = useState(false);

  // Función para mostrar el formulario cuando se hace clic en el botón
  const handleShowForm = () => {
    setShowForm(true);
  };

  return (
    <>
      <WaveSection />
      <footer className="w-full flex flex-col items-center justify-center px-28 py-20 bg-[#242427] max-[970px]:px-14 max-[560px]:px-7">

        <div className="w-fit mt-16 max-w-[693px] flex flex-col gap-8 z-20">
          <div className="flex items-center gap-14 text-center max-[620px]:gap-7 max-[510px]:gap-4 max-[430px]:gap-2 max-[455px]:flex-wrap max-[455px]:justify-center max-[455px]:gap-10">
            <div className="flex flex-col gap-3 max-[790px]:scale-90">
              <p className="font-bold text-5xl max-[520px]:text-3xl ">
                650<span className="text-[#DB3957]">+</span>
              </p>
              <p className="text-lg font-normal">
                Completed Projects
              </p>
            </div>
            <div className="flex flex-col gap-3 max-[790px]:scale-90">
              <p className="font-bold text-5xl max-[520px]:text-3xl">
                120<span className="text-[#DB3957]">+</span>
              </p>
              <p className="text-lg font-normal">Clients</p>
            </div>
            <div className="flex flex-col gap-3 max-[790px]:scale-90">
              <p className="font-bold text-5xl text-center max-[520px]:text-3xl">5</p>
              <p className="text-lg font-normal">Locations</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-20 py-20 max-[1300px]:gap-10 max-[610px]:scale-90">
          {BannerLogos2.map((logo) => (
            <img
              key={logo.name}
              src={logo.icon}
              alt={logo.name}
              className="w-fit h-fit mx-4"
            />
          ))}
        </div>

        <div className="w-full pt-20 pb-40 flex flex-col items-center justify-center gap-4 text-center">
          <h4 className="w-[548px] text-[32px] font-bold max-[555px]:text-[28px] max-[555px]:w-[335px]">Start with Infinix<span className="text-[#DB3957]">Soft</span>, Today.</h4>
          <button onClick={handleShowForm} className="btn-primary btn-hover flex items-center justify-center gap-2 transition duration-400 hover:shadow-button">
            Let’s Speak Now
            <img src={Arrow} alt="Arrow"></img>
          </button>
        </div>

        <div id="contact" className="w-full flex justify-between items-center px-28 pt-10 border-t-[1px] border-[#DFE0E3] max-[1300px]:flex-col max-[1300px]:gap-6 max-[980px]:px-14 max-[560px]:px-7">
          <p className="text-[#F4F5F6] flex items-center gap-2">
            <img src={infinix_logo} width={24} height={24} alt="logotipo" />
            Made by InfinixSoft © 2023 
          </p>
          <ul className="flex items-center justify-center gap-8 cursor-pointer max-[980px]:flex-wrap max-[980px]:gap-5">
            <li className="hover-underline-animation">
              <a href="#about">About</a>
            </li>
            <li className="hover-underline-animation">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover-underline-animation">
              <a href="#culture">What We Do</a>
            </li>
            <li className="hover-underline-animation">
              <a href="#hero">Privacy Policy</a>
            </li>
            <li className="hover-underline-animation">
              <a href="#hero">Terms of Use</a>
            </li>
          </ul>
        </div>
        {showForm && <Form onClose={() => setShowForm(false)} />}
      </footer>

    </>
  );
};

export default Footer;
