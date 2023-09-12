import { Culture_cards } from "../../constants/index_EN";

const Culture = () => {
  return (
    <section className="w-full py-20 px-28 flex flex-col items-center">
      <div className="max-w-[838px] flex flex-col justify-center items-center  ">
        <h2 className="max-w-[888px] text-[#FCFCFD] text-[42px] text-center leading-[50.4px]">
          Nuestros Valores:<span className="font-bold"> La Base de Nuestra Cultura Empresarial</span>
        </h2>
        <h4 className="max-w-[720px] text-center pt-2 pb-8 leading-[30px]">
          En InfinixSoft, nuestros valores de <span className="font-bold">excelencia, innovación, colaboración y responsabilidad social</span> guían cada acción y proyecto que emprendemos.
        </h4>
        <button className="button-gradient">Our Services</button>
      </div>
      <div className=" max-w-[1280px] flex justify-center flex-wrap pt-20 gap-20">
        {Culture_cards.map((card) => (
          <div id="card_blur" key={card.title} className="max-w-[358px] relative">
            <div className="flex flex-col py-16 px-8 bg-[#18181B] rounded-3xl border-gradient z-20 ">
              <img className="pb-8" src={card.icon} width={42} height={42} alt={card.title} />
              <h4 className="text-[#FCFCFD] text-[21px] font-bold pb-4">{card.title}</h4>
              <p className="text-[#777E90] text-[16px] font-normal">{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Culture;
