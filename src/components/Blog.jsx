import Arrow from "/img/Culture/Arrow_2.svg"
import Image from "/img/Blog/Infinixdubai.png"
import { useTranslation } from "react-i18next";


const Blog = () => {

    // Hook de Traducción
    const { t } = useTranslation();

    return (
        <section className="max-w-[1220px] mx-auto py-20 pb-60 max-[1360px]:px-28 max-[840px]:py-10 max-[880px]:px-14 max-[680px]:px-7">

            <div className="h-[146px] flex justify-between items-center max-[840px]:flex-wrap max-[840px]:gap-6 max-[840px]:mb-20 max-[367px]:gap-1">
                <div className="max-w-[550px] max-[1360px]:ml-11 max-[500px]:ml-0 max-[500px]:scale-90">
                    <h3 className="text-[36px] font-bold pb-6 max-[1360px]:text-[32px]">{t("blogText")}</h3>
                    <p className="text-[#A1A1A9] text-[18px] font-normal">{t("blogText2")}</p>
                </div>
                <button className="btn-primary btn-hover flex items-center justify-center gap-2 transition duration-400 hover:shadow-button max-[840px]:ml-11 max-[500px]:ml-4">
                    <a href="/blog" target="_blank">{t("buttonText3")}</a>
                    <img src={Arrow} alt="Arrow"></img>
                </button>
            </div>

            <div className="flex justify-center items-center pt-16 pb-20 gap-24 max-[1360px]:gap-16 max-[1080px]:flex-wrap max-[1080px]:gap-12 max-[1080px]:justify-center max-[500px]:scale-90">
                <img className="z-10 opacity-100 max-[1360px]:scale-[0.85] max-[1080px]:scale-100 max-[840px]:w-[501px]" src={Image} alt="BlogImage" width={558} height={369}></img>
                <div className="flex flex-col gap-4">
                    <button className="badge w-fit font-normal flex items-center gap-2 shadow-none">
                        {t("blogBadge")}
                    </button>
                    <div className="max-w-[520px]">
                        <div className="max-w-[469px]">
                            <a href="/blog/infinix-soft-heading-to-dubai/">
                                <h4 className="text-[32px] font-bold pb-3 transition duration-400 hover:text-[#DB3957] cursor-pointer max-[1360px]:text-[24px]">{t("blogTitle")}</h4>
                            </a>
                            <p className="text-[#A1A1A9] max-[1360px]:text-[16px]">{t("blogSubtitle")} </p>
                        </div>
                        <div className="flex gap-3 items-center pt-6">
                            <img src={Arrow} alt="Arrow"></img>
                            <p className="text-[14px] font-bold">
                                Ale Doellinger
                            </p>
                            <p className="text-[14px] text-[#A1A1A9]">02 May</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog;