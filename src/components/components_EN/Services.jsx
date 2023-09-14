import { services } from "../../constants/index_EN";

const Services = () => {
    return (
        <section className="max-w-[1220px] py-20 mx-auto flex flex-col items-start">
            <div className="max-w-[538px] flex flex-col items-start max-[580px]:px-7">
                <h2 className="text-[52px] text-[#F4F5F6] font-bold pb-6 max-[458px]:text-2xl">
                    Services
                </h2>
                <h4 className="text-[#C7CBE5] text-[18px] font-normal max-[580px]:text-sm">
                    We provide our clients as many necessary steps to successfully design, develop and launch a web or mobile app.
                </h4>
            </div>
            <div className="max-w-[1220px] flex justify-start flex-wrap pt-20 gap-x-14 gap-y-10 max-[580px]:justify-center">
                {services.map((card) => (
                    <div id="card_blur" key={card.title} className="max-w-[346px] z-10 relative hover:card_blur">
                        <div className="flex flex-col justify-center py-16 px-8 bg-[#18181B] h-[346px] rounded-lg border-gradient z-20 ">
                            <img className="pb-8" src={card.icon} width={42} height={42} alt={card.title} />
                            <h4 className="text-[#FCFCFD] text-[21px] font-bold pb-4">{card.title}</h4> 
                            <p className="text-[#C7CBE5] text-[16px] font-normal">{card.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services