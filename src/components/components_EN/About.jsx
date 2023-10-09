import Planet from "./Planet";
import logo1 from "/img/Team/team_logo1.svg";
import logo2 from "/img/Team/team_logo2.svg";
import logo3 from "/img/Team/team_logo3.svg";

const About = () => {

    return (
        <section id="about" className="w-fit h-fit mx-auto px-28 py-20 flex items-center justify-between gap-24 max-[1300px]:gap-4 max-[950px]:gap-0 max-[880px]:px-14 max-[675px]:px-7">
            <Planet />
            <div className=" max-w-[494px] flex flex-col justify-center gap-0">
                <div className="w-fit max-w-[428px] flex flex-col gap-8">
                    <h3 className="font-normal text-4xl text-[#F4F5F6] max-[1120px]:text-2xl">InfinixSoft offers games, business and product development (web, mobile, social and internet technologies) to startup and enterprise clients.</h3>
                </div>

                <div className="flex items-center pt-16 gap-16 max-[1384px]:gap-2 max-[1384px]:pt-8 max-[485px]:gap-10 max-[485px]:pt-4 max-[485px]:flex-wrap max-[485px]:justify-center">
                    <a href="https://clutch.co/profile/infinixsoft#highlights" target="_blank" rel="noreferrer">
                        <img className="max-[1384px]:scale-75 z-10" src={logo3} alt="Clutch" />
                    </a>
                    <a href="https://upcity.com/mobile-app-development/ipad/miami-fl?spotlight=profiles%2Finfinixsoft%2Fmiami" target="_blank" rel="noreferrer">
                        <img className="max-[1384px]:scale-75 z-10" src={logo1} alt="Upcity" />
                    </a>
                    <a href="https://www.designrush.com/agency/profile/infinixsoft" target="_blank" rel="noreferrer">
                        <img className="max-[1384px]:scale-75 z-10" src={logo2} alt="Design Rush" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About

