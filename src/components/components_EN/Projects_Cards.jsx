import Card_Projects from "./Card_Projects"
import { Card_Projects_data } from "../../constants/index_EN";

const Projects_Cards = () => {
    return (
        <section className="max-w-[1220px] flex flex-col justify-center items-center mx-auto py-10">
            <div className="max-w-[640px] mx-auto py-20 flex flex-col items-center justify-center">
                <h3 className="text-[52px] text-center font-bold text-white leading-[60px] pb-6">
                    Todos Nuestros Proyectos
                </h3>
                <h5 className="text-[18px] text-center text-[#A1A1A9]">InfinixSoft offers games, business and product development  (web, mobile, social and internet technologies)  to startup and enterprise clients.</h5>
            </div>

            <div id="Card_project" className="max-w-[1220px] mx-auto pb-12 py-2 flex gap-20 flex-wrap items-center justify-center">
                {Card_Projects_data.map((project) => (
                    <Card_Projects
                        key={project.title}
                        title={project.title}
                        subtitle={project.subtitle}
                        image={project.image}
                    />
                ))}
            </div>

            <button className="button-primary max-w-fit transition duration-400 hover:shadow-button"><a href="/projects" target="no_blank">View More</a></button>

        </section>
    )
}

export default Projects_Cards