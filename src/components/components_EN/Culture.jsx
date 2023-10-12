import Arrow from "/img/Services/Arrow_2.svg"
import { Culture_cards } from "../../constants/index_EN";
import { useState } from "react";
import Form from "./Form";

const Culture = () => {

  // Estado para abrir y cerrar el Form
  const [showForm, setShowForm] = useState(false);

  // Función para abrir/cerrar el Form.
  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <section id="culture" className="w-full bg-culture py-20 px-28 flex flex-col items-start justify-center max-[1000px]:px-14 max-[425px]:px-7">

      <div className="max-w-[1220px] mx-auto">
        <div className="max-w-[820px] flex flex-col justify-center items-start">
          <p className="badge font-normal mb-1.5">OUR EXPERTISE</p>
          <h2 className="max-w-[888px] text-[#FCFCFD] font-bold text-[42px] max-[1024px]:text-[32px] max-[455px]:text-[24px] max-[455px]:leading-8">
            From Beginning to Infinix
          </h2>
          <h4 className="max-w-[720px] text-[18px] text-[#A1A1A9] pt-2 max-[1024px]:text-[16px] max-[455px]:text-[14px] max-[455px]:leading-6">
            Tailored solutions to meet your unique business requirements.
          </h4>
        </div>

        <div className="flex justify-center flex-wrap pt-20 gap-6 max-[832px]:gap-12 max-[800px]:gap-7">
          {Culture_cards.map((card) => (
            <div key={card.title} className="max-w-[390px] z-10 relative max-[1442px]:w-[356px] max-[400px]:w-[304px]">
              <div className="h-fit flex flex-col p-[30px] bg-cards rounded-[12px] border-2 border-[#313134] z-20 justify-start items-start max-[400px]:h-fit">
                <p className="text-[14px] font-semibold text-[#868687]">{card.number}</p>
                <h4 className="text-[#FCFCFD] text-[18px] font-bold pb-2.5 max-[400px]:p-0">{card.title}</h4>
                <p className="text-[#A1A1A9] text-[15px] font-normal">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex flex-col gap-4 items-center justify-center py-16">
        <p className="text-[32px] font-bold">Start Infinix, today.</p>

        <button
          onClick={toggleShowForm}
          className="btn-primary btn-hover transition duration-400 hover:shadow-opacity flex items-center justify-center gap-2 max-w-[300px]"
        >
          Book a Free Consultation
          <img className="ml-1 w-4" src={Arrow} alt="Arrow"></img>
        </button>

      </div>

      {showForm && <Form onClose={() => setShowForm(false)} />}

    </section>
  );
}

export default Culture;

