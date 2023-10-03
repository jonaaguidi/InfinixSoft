import { useState } from "react";
import { services } from "../../constants/index_EN";
import Form from "./Form";
import { BsLightbulbFill } from "react-icons/bs";

const Services = () => {

    const [showForm, setShowForm] = useState(false);

    // Función para mostrar el formulario cuando se hace clic en el botón
    const handleShowForm = () => {
      setShowForm(true);
    };
    return (
        <section id="services" className="max-w-[1220px] py-20 mx-auto flex flex-col items-center max-[1350px]:px-14 max-[520px]:px-7">
            <div className="max-w-[538px] flex flex-col self-start">
                <h2 className="text-[52px] text-[#F4F5F6] font-bold pb-6 max-[458px]:text-2xl">
                    Services
                </h2>
                <h4 className="text-[#A1A1A9] text-[18px] font-normal max-[580px]:text-sm">
                    We provide our clients as many necessary steps to successfully design, develop and launch a web or mobile app.
                </h4>
            </div>
            <div className="max-w-[1220px] flex justify-start  flex-wrap pt-20 gap-6 max-[1350px]:gap-4 max-[1163px]:justify-center max-[1163px]:gap-6">
                {services.map((card) => (
                    <div key={card.title} className="max-w-[390px] z-10 relative max-[1350px]:w-[340px] max-[1163px]:w-[390px] max-[916px]:w-[340px] max-[816px]:w-[396px] max-[440px]:w-[320px]">
                        <div className="flex flex-col justify-center p-10 bg-[#18181B] h-[316px] rounded-lg border-gradient z-20 max-[1350px]:h-[352px] max-[916px]:h-[364px] max-[440px]:h-[348git px]">
                            <img className="pb-6" src={card.icon} width={42} height={42} alt={card.title} />
                            <h4 className="text-[#F4F5F6] text-[21px] font-bold pb-3">{card.title}</h4>
                            <p className="text-[#A1A1A9] text-[16px] font-normal">{card.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-center items-center pt-20 max-[460px]:pt-10">
                <a onClick={handleShowForm}>
                    <button id="started" onClick={handleShowForm} className="btn-primary btn-hover transition duration-400 hover:shadow-button hover:button-light flex items-center justify-center gap-3">
                    Get Started
                    <span onClick={handleShowForm} className="text-[#fffc62] opacity-80 text-[16px] transition duration-800 hover:opacity-100 hover:scale-110 "><BsLightbulbFill /></span>
                    </button>
                </a>
            </div>
            {showForm && <Form onClose={() => setShowForm(false)} />}
        </section>
    )
}

export default Services