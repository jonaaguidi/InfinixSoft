import { Culture_cards } from "../../constants/index_EN";

const Culture = () => {
  return (
    <section className="w-full py-20 px-28 flex flex-col items-center max-[1000px]:px-14 max-[425px]:px-7">
      <div className="max-w-[838px] flex flex-col justify-center items-center  ">
        <h2 className="max-w-[888px] text-[#FCFCFD] text-[42px] text-center leading-[50.4px] max-[1024px]:text-[32px] max-[455px]:text-[24px] max-[455px]:leading-8">
          Nuestros Valores:<span className="font-bold"> La Base de Nuestra Cultura Empresarial</span>
        </h2>
        <h4 className="max-w-[720px] text-xl text-center pt-2 pb-8 leading-[30px] max-[1024px]:text-[16px] max-[455px]:text-[14px] max-[455px]:leading-6">
          En InfinixSoft, nuestros valores de <span className="font-bold">excelencia, innovación, colaboración y responsabilidad social</span> guían cada acción y proyecto que emprendemos.
        </h4>
        <button className="button-gradient">Our Services</button>
      </div>
      <div className="max-w-[1220px] flex justify-center flex-wrap pt-20 gap-16 max-[832px]:gap-12 max-[800px]:gap-7">
        {Culture_cards.map((card) => (
          <div id="card_blur" key={card.title} className="max-w-[348px] z-10 relative hover:card_blur max-[832px]:w-[316px]">
            <div className="flex flex-col py-16 px-8 bg-[#171718] h-[340px] rounded-lg border-gradient z-20 justify-center">
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
