import WaveSection from "../components_EN/Wave";
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
      <section className="w-full flex flex-col items-center px-28 py-20 bg-[#242427]">

        <div className="w-fit max-w-[693px] flex flex-col gap-8 z-20">
          <div className="flex gap-14 max-[470px]:gap-6 text-center">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-5xl max-[1175px]:text-2xl">
                650<span className="text-[#DB3957]"> +</span>
              </p>
              <p className="text-lg font-normal max-[1175px]:text-sm">
                Completed Projects
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-5xl max-[1175px]:text-2xl">
                120<span className="text-[#DB3957]"> +</span>
              </p>
              <p className="text-lg font-normal max-[1175px]:text-sm">Clients</p>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-bold text-5xl text-center max-[1175px]:text-2xl">5</p>
              <p className="text-lg font-normal max-[1175px]:text-sm">Locations</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-20 py-20">
          {BannerLogos2.map((logo) => (
            <img
              key={logo.name}
              src={logo.icon}
              alt={logo.name}
              className="w-fit h-fit mx-4"
            />
          ))}
        </div>

        <div className="w-full py-40 flex flex-col items-center justify-center gap-4 text-center">
          <h4 className="w-[548px] text-[32px] font-bold">Take your Business to the Next level with Infinix<span className="text-[#DB3957]">Soft.</span></h4>
           <button onClick={handleShowForm} className="button-primary">Let’s Speak Now</button>
        </div>

        <div className="w-full flex justify-between px-28 pt-10 border-t-[1px] border-[#DFE0E3]">
          <p className="text-[#F4F5F6]">Made by InfinixSoft © 2023 </p>
          <ul className="flex gap-8 cursor-pointer">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#about">Projects</a>
            </li>
            <li>
              <a href="#about">What We Do</a>
            </li>
            <li>
              <a href="#about">Privacy Policy</a>
            </li>
            <li>
              <a href="#about">Terms of Use</a>
            </li>
          </ul>
        </div>
        {showForm && <Form onClose={() => setShowForm(false)} />}
      </section>
      
    </>
  );
};

export default Footer;
