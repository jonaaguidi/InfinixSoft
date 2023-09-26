import Arrow from "/img/Blog/Arrow_2.svg"
import Image from "/img/Blog/blog.png"
import Icon from "/img/Projects/icon.svg"
import Avatar from "/img/Blog/Avatar.png"
import IconGreen from "/img/Blog/icon_green.svg"

const Blog = () => {
    return (
        <section className="max-w-[1220px] mx-auto py-20">

            <div className="h-[146px] flex justify-between items-center">
                <div className="max-w-[394px]">
                    <h3 className="text-[32px] font-bold pb-6">¡Conoce Nuestro Blog!</h3>
                    <p className="text-[#A1A1A9] text-[18px] font-normal">Descubre todos nuestros artículos donde exploramos el fascinante mundo de la tecnología, innovaciones y mucho más.</p>
                </div>
                <button className="button-primary h-fit flex justify-center items-center gap-2">
                    <a href="www.infinixsoft.com/blog" target="_blank">Explorar Blog</a>
                    <img src={Arrow} alt="Arrow"></img>
                </button>
            </div>

            <div className="flex justify-between items-center pt-10 pb-20">
                <img src={Image} alt="BlogImage" width={558} height={369}></img>
                <div className="flex flex-col gap-6">
                    <button className="badge w-fit font-normal flex items-center gap-2 shadow-none">
                        <img src={Icon} alt="Icon" />
                        NOVEDADES
                    </button>
                    <div className="max-w-[520px]">
                        <div className="max-w-[469px]">
                            <h4 className="text-[32px] font-bold pb-3">Cheap Airline Tickets Great Ways To Save</h4>
                            <p className="text-[#A1A1A9]">In this digital generation where information can be easily obtained within seconds, business cards.</p>
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