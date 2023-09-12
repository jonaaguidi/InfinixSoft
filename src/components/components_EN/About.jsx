import AboutImage from "/img/About/about_img.jpg"

const About = () => {
  return (
    <section className="w-fit h-fit mx-auto px-28 py-20 flex items-center justify-between gap-24 ">
        <div>
            <img className="rounded-2xl" src={AboutImage} alt="About" width={458}></img>
        </div>
        <div className="flex flex-col justify-center gap-36">
            <div className="w-fit max-w-[693px] flex flex-col gap-8 z-50">
                <h5 className="text-2xl font-semibold">We are Infinix<span className="text-[#DB3957]">soft.</span></h5>
                <h3 className="font-normal text-3xl text-[#F4F5F6]	">InfinixSoft offers games, business and product development (web, mobile, social and internet technologies) to startup and enterprise clients.</h3>
            </div>
            <div className="w-fit max-w-[693px] flex flex-col gap-8 z-50" >
                <h3 className="text-2xl">Nuestras Métricas: <span className="font-semibold">El Reflejo de Nuestros Éxitos Empresariales</span></h3>
                <div className="flex gap-14">
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-5xl">650<span className="text-[#DB3957]"> +</span></p>
                        <p className="text-lg font-normal">Completed Projects</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-5xl">120<span className="text-[#DB3957]"> +</span></p>
                        <p className="text-lg font-normal">Clients</p>
                    </div>
                    <div className="flex flex-col gap-3">
                        <p className="font-bold text-5xl text-center">5</p>
                        <p className="text-lg font-normal">Locations</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About