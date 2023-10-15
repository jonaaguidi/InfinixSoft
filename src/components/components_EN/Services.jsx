import { useState } from "react";
import { services } from "../../constants/index_EN";
import Form from "./Form";
import Wave from "./Wave";
import Arrow from "/img/Services/Arrow_2.svg";
import { useEffect } from "react";

const Services = () => {
  const [showForm, setShowForm] = useState(false);

  // Función para mostrar el formulario cuando se hace click en el botón
  const handleShowForm = () => {
    setShowForm(true);
  };

  // Función para verificar el ancho de la ventana y ocultar el elemento
  const checkWindowWidth = () => {
    const elementToHide = document.querySelector(".element-to-hide");

    if (elementToHide) {
      if (window.innerWidth <= 824) {
        elementToHide.style.display = "none";
      } else {
        elementToHide.style.display = "block";
      }
    }
  };

  // Ejecutar la función al cargar la página y al cambiar el tamaño de la ventana
  useEffect(() => {
    checkWindowWidth();
    window.addEventListener("resize", checkWindowWidth);
    return () => {
      window.removeEventListener("resize", checkWindowWidth);
    };
  }, []);

  return (
    <>
      <Wave />
      <div id="services" className="w-full bg-[#242427]">
        <section className="max-w-[1220px] relative bg-[#242427] py-20 mx-auto flex flex-col items-center max-[1350px]:px-14 max-[520px]:px-7">
          <div className="max-w-[538px] flex flex-col self-start">
            <p className="badge w-fit z-[990] font-normal">OUR EXPERTISE</p>
            <h2 className="text-[52px] text-[#F4F5F6] font-bold pb-2 max-[458px]:text-2xl">
              Support Areas
            </h2>
            <h4 className="text-[#A1A1A9] text-[18px] font-normal max-[580px]:text-sm">
              Tailored solutions to meet your unique business requirements.
            </h4>
          </div>
          <div className="max-w-[1220px]  flex justify-start  flex-wrap pt-20 gap-6 max-[1350px]:gap-4 max-[1163px]:justify-center max-[1163px]:gap-6">
            {services.map((card) => (
              <div
                key={card.title}
                className="max-w-[390px] z-10 relative max-[1350px]:w-[340px] max-[1163px]:w-[390px] max-[916px]:w-[340px] max-[816px]:w-[396px] max-[440px]:w-[320px]"
              >
                <div className="flex flex-col justify-center p-10 bg-cards h-[316px] rounded-[12px] border-2 border-[#313134] z-20 max-[1350px]:h-[352px] max-[916px]:h-[364px] max-[440px]:h-[348px]">
                  <img className="pb-6" src={card.icon} width={42} height={42} alt={card.title} />
                  <h4 className="text-[#F4F5F6] text-[21px] font-bold pb-3">{card.title}</h4>
                  <p className="text-[#A1A1A9] text-[16px] font-normal">{card.content}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full mt-20 z-[990] flex flex-col gap-4 items-center justify-center py-20">
            <p className="text-[32px] font-bold">Start Infinix, today.</p>
            <a href="/projects" target="_blank" rel="noreferrer">
              <button className="btn-primary btn-hover transition duration-400 hover:shadow-opacity flex items-center justify-center gap-2 max-w-[300px]">
                Book a Free Consultation
                <img className="ml-1 w-4" src={Arrow} alt="Arrow" />
              </button>
            </a>
          </div>

          {/* Degrade */}
          <div className="element-to-hide">
            <div className="absolute top-[1100px] left-[175px] inset-0">
              <div className="rounded-[999px] bg-[#DB3957] blur-[200px] opacity-30 w-[700px] h-[311px]"></div>
            </div>
          </div>

          {showForm && <Form onClose={() => setShowForm(false)} />}
        </section>
      </div>
    </>
  );
};

export default Services;
