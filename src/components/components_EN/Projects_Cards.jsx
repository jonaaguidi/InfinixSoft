import Card_Projects from "./Card_Projects";
import { Card_Projects_data } from "../../constants/index_EN";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { Tooltip } from 'react-tooltip'

const Projects_Cards = () => {
    return (
        <section className="max-w-[1220px] flex flex-col justify-center items-center mx-auto py-10">
            <div className="max-w-[640px] mx-auto py-20 flex flex-col items-center justify-center max-[1320px]:px-28 max-[820px]:px-14 max-[556px]:px-7">
                <h2 className="max-w-[888px] text-[#FCFCFD] font-bold text-[52px] leading-[58px] text-center pb-3 max-[1024px]:text-[32px] max-[1024px]:leading-[40px] max-[455px]:text-[24px] max-[455px]:leading-8">
                    Todos Nuestros<br></br>Proyectos
                </h2>
                <h4 className="max-w-[720px] text-[18px] text-[#A1A1A9] text-center pb-8 leading-[30px] max-[1024px]:text-[16px] max-[455px]:text-[14px] max-[455px]:leading-6">
                    InfinixSoft offers games, business and product development  (web, mobile, social and internet technologies)  to startup and enterprise clients.
                </h4>
            </div>

            <div className="max-w-[1220px] mx-auto pb-12 py-2 flex gap-20 flex-wrap items-center justify-center max-[1440px]:gap-16 max-[1320px]:gap-14 max-[1320px]:px-28 max-[940px]:gap-6 max-[940px]:px-14 max-[556px]:px-7">
                {Card_Projects_data.map((project) => (
                    <Card_Projects
                        key={project.title}
                        title={project.title}
                        subtitle={project.subtitle}
                        image={project.image}
                    />
                ))}
            </div>

            <button
                data-tooltip-id="my-tooltip"
                data-tooltip-content="Coming Soon ..."
                data-tooltip-place="bottom"
                className="button-primary relative flex items-center justify-center gap-2 max-w-fit transition duration-400 hover:shadow-button"
            >
                View More
                <span className="text-[16px] mt-[1px]">
                    <BsFillPlusCircleFill />
                </span>
            </button>

            <Tooltip id="my-tooltip" data-tooltip-id="my-tooltip" data-tooltip-content="Coming Soon.." />
        </section>
    );
};

export default Projects_Cards;
