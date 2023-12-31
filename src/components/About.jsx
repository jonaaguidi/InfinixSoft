import { useTranslation } from "react-i18next";
import Planet from "./Planet"
import logo1 from "/img/About/team_logo1.svg";
import logo2 from "/img/About/team_logo2.svg";
import logo3 from "/img/About/team_logo3.svg";

const About = () => {

  // Hook de Traducción
  const { t } = useTranslation();

    return (
        <section id="about" className="w-fit h-[680px] mx-auto px-28 py-20 mb-20 flex items-center justify-center gap-10 max-[1300px]:gap-4 max-[950px]:gap-0 max-[880px]:px-14 max-[675px]:px-7">
            {/* Si el ancho es mayor a 1000px aparece Planet */}
            {window.innerWidth > 1000 && <Planet />}
            <div className=" max-w-[494px] flex flex-col justify-center">

                <div className="w-fit max-w-[428px] flex flex-col items-start pb-6">
                    <div className="badge w-fit flex items-center justify-center gap-1">
                        <p className="font-normal text-[12px]">INFINIX SOFT</p>
                    </div>
                    <h2 className="mt-1 font-bold text-[42px] text-[#F4F5F6] max-[540px]:text-[32px]">{t("aboutTitle")}</h2>
                </div>

                <div className="pb-10">
                    <p className="text-[18px] font-normal pb-[18px] leading-[150%] max-[540px]:text-[16px]">
                        {t("aboutText")}
                    </p>
                    <p className="text-[18px] font-normal leading-[150%] max-[540px]:text-[16px]">
                        {t("aboutText2")}
                    </p>
                </div>

                <div className="max-w-[494px] max-h-24 flex items-center gap-12 max-[1384px]:gap-10 max-[1384px]:pt-8 max-[485px]:gap-4 max-[485px]:pt-2 max-[485px]:flex-wrap max-[485px]:justify-center max-[485px]:mb-16">
                    <a href="https://clutch.co/profile/infinixsoft#highlights" target="_blank" rel="noreferrer">
                        <img width={183} height={59} className="max-[1384px]:scale-75 z-10" src={logo3} alt="Clutch" />
                    </a>
                    <a href="https://upcity.com/mobile-app-development/ipad/miami-fl?spotlight=profiles%2Finfinixsoft%2Fmiami" target="_blank" rel="noreferrer">
                        <img width={90} height={90} className="max-[1384px]:scale-75 z-10" src={logo1} alt="Upcity" />
                    </a>
                    <a href="https://www.designrush.com/agency/profile/infinixsoft" target="_blank" rel="noreferrer">
                        <img width={73} height={97} className="max-[1384px]:scale-75 z-10" src={logo2} alt="Design Rush" />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default About;

