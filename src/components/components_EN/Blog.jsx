import Arrow from "/img/Blog/Arrow_2.svg"
import Image from "/img/Blog/blog.png"
import Icon from "/img/Projects/icon.svg"
import Avatar from "/img/Blog/Avatar.png"
import IconGreen from "/img/Blog/icon_green.svg"

const Blog = () => {
    return (
        <section className="max-w-[1220px] mx-auto py-20 max-[1360px]:px-28 max-[840px]:py-10 max-[880px]:px-14 max-[680px]:px-7">

            <div className="h-[146px] flex justify-between items-center max-[840px]:flex-wrap max-[840px]:gap-6 max-[840px]:mb-20 max-[367px]:gap-1">
                <div className="max-w-[394px] max-[1360px]:ml-11 max-[500px]:ml-0 max-[500px]:scale-90">
                    <h3 className="text-[32px] font-bold pb-6 max-[1360px]:text-[28px]">¡Conoce Nuestro Blog!</h3>
                    <p className="text-[#A1A1A9] text-[18px] font-normal max-[1360px]:text-[16px]">Descubre todos nuestros artículos donde exploramos el fascinante mundo de la tecnología, innovaciones y mucho más.</p>
                </div>
                <button className="btn-primary btn-hover flex items-center justify-center gap-2 transition duration-400 hover:shadow-button max-[840px]:ml-11 max-[500px]:ml-2 max-[500px]:scale-90">
                    <a href="www.infinixsoft.com/blog" target="_blank">Explorar Blog</a>
                    <img src={Arrow} alt="Arrow"></img>
                </button>
            </div>

            <div className="flex justify-between items-center pt-10 pb-20 max-[1360px]:gap-8 max-[1080px]:flex-wrap max-[1080px]:gap-16 max-[1080px]:justify-center max-[500px]:scale-90">
                <img className="max-[1360px]:scale-[0.85] max-[1080px]:scale-100 max-[840px]:w-[501px]" src={Image} alt="BlogImage" width={558} height={369}></img>
                <div className="flex flex-col gap-6">
                    <button className="badge w-fit font-normal flex items-center gap-2 shadow-none">
                        <img src={Icon} alt="Icon" />
                        NOVEDADES
                    </button>
                    <div className="max-w-[520px]">
                        <div className="max-w-[469px]">
                            <h4 className="text-[32px] font-bold pb-3 transition duration-400 hover:text-[#DB3957] cursor-pointer max-[1360px]:text-[28px]">Cheap Airline Tickets Great Ways To Save</h4>
                            <p className="text-[#A1A1A9] max-[1360px]:text-[16px]">In this digital generation where information can be easily obtained within seconds, business cards.</p>
                        </div>
                        <div className="flex gap-3 items-center pt-6">
                            <img src={Avatar} alt="Avatar" width={42} height={42}></img>
                            <img src={IconGreen} alt="IconGreen"></img>
                            <p className="text-[14px] font-bold">Viola Manisa</p>
                            <p className="text-[14px] text-[#A1A1A9]">02 May</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog