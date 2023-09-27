import Marquee from "react-fast-marquee";
import { Clients } from "../../constants/index_imgs"; // Data de Clients

const Partners = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center mx-auto py-20">
            <div className="max-w-[640px] mx-auto py-20 flex flex-col items-center justify-center">
            <p className="badge py-3 px-6 text-[12px] text-center font-semibold text-white mb-6">OUR PARTNERS</p>
                <h3 className="text-[52px] text-center font-bold text-white leading-[60px] pb-6">
                    Trusted by leading brands
                </h3>
                <h5 className="text-[18px] text-center text-[#A1A1A9]">
                    InfinixSoft offers games, business and product development (web, mobile, social and internet technologies) to startup and enterprise clients.
                </h5>
            </div>
            <div className="flex flex-col gap-14">
                <Marquee
                    direction="right"
                    speed={45}
                    pauseOnHover={true}
                    gradient={true}
                    gradientColor={[23, 23, 24]}
                    gradientWidth={296}
                >
                    {Clients.map((client, index) => (
                        <div key={index} className="mx-10">
                            <img src={client.icon} alt={client.name} width={128} height={150} />
                        </div>
                    ))}
                </Marquee>
                <Marquee
                    direction="left"
                    speed={45}
                    pauseOnHover={true}
                    gradient={true}
                    gradientColor={[23, 23, 24]}
                    gradientWidth={296}
                >
                    {Clients.map((client, index) => (
                        <div key={index} className="mx-10">
                            <img src={client.icon} alt={client.name} width={128} height={150} />
                        </div>
                    ))}
                </Marquee>
                <Marquee
                    direction="right"
                    speed={45}
                    pauseOnHover={true}
                    gradient={true}
                    gradientColor={[23, 23, 24]}
                    gradientWidth={296}
                >
                    {Clients.map((client, index) => (
                        <div key={index} className="mx-10">
                            <img src={client.icon} alt={client.name} width={128} height={150} />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Partners;
