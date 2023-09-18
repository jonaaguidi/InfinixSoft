import AboutImage from "/img/About/about_img.jpg"
import logo1 from "/img/Team/team_logo1.svg";
import logo2 from "/img/Team/team_logo2.svg";
import logo3 from "/img/Team/team_logo3.svg";

const About = () => {
    return (
        <section className="w-fit h-fit mx-auto px-28 py-20 flex items-center justify-between gap-24 max-[1300px]:gap-4 max-[950px]:gap-0 max-[880px]:px-14 max-[675px]:px-7">
            <div>
                <img width={620} className="rounded-2xl max-[950px]:hidden" src={AboutImage} alt="About"></img>
            </div>
            <div className="flex flex-col justify-center gap-4">
                <div className="w-fit max-w-[693px] flex flex-col gap-8 z-50">
                    <h5 className="text-2xl font-semibold max-[1120px]:text-xl">We are Infinix<span className="text-[#DB3957]">soft.</span></h5>
                    <h3 className="font-normal text-4xl text-[#F4F5F6] max-[1120px]:text-2xl">InfinixSoft offers games, business and product development (web, mobile, social and internet technologies) to startup and enterprise clients.</h3>
                </div>

                <div className="flex items-center pt-16 gap-16 max-[1384px]:gap-2 max-[1384px]:pt-8 max-[485px]:gap-10 max-[485px]:pt-4 max-[485px]:flex-wrap max-[485px]:justify-center">
                    <img className="max-[1384px]:scale-75" src={logo1} alt="Upcity"></img>
                    <img className="max-[1384px]:scale-75" src={logo2} alt="Design Rush"></img>
                    <img className="max-[1384px]:scale-75"  src={logo3} alt="Clutch"></img>
                </div>

            </div>
        </section>
    )
}

export default About

{/*
<div className="w-fit max-w-[693px] flex flex-col gap-8 z-50" >
        <h3 className="text-2xl max-[1120px]:text-xl">Nuestras Métricas: <span className="font-semibold">El Reflejo de Nuestros Éxitos Empresariales</span></h3>
            <div className="flex gap-14 max-[470px]:gap-6">
                <div className="flex flex-col gap-3">
                        <p className="font-bold text-5xl max-[1175px]:text-2xl">650<span className="text-[#DB3957]"> +</span></p>
                        <p className="text-lg font-normal max-[1175px]:text-sm">Completed Projects</p>
                </div>
                <div className="flex flex-col gap-3">
                        <p className="font-bold text-5xl max-[1175px]:text-2xl">120<span className="text-[#DB3957]"> +</span></p>
                        <p className="text-lg font-normal max-[1175px]:text-sm">Clients</p>
                </div>
                <div className="flex flex-col gap-3">
                        <p className="font-bold text-5xl text-center max-[1175px]:text-2xl">5</p>
                        <p className="text-lg font-normal max-[1175px]:text-sm">Locations</p>
                </div>
        </div>
</div> */

}