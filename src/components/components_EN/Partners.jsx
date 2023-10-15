import Marquee from "react-fast-marquee";
import { Clients1, Clients2, Clients3 } from "../../constants/index_imgs"; // Data de Partners
import { useEffect, useState } from "react";

const Partners = () => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return (
        <section className={`w-full z-max flex flex-col justify-center items-center mx-auto py-20 ${windowWidth < 768 ? "pb-20" : "pb-60"}`}>
            <div className="max-w-[838px] py-20 mx-auto flex flex-col justify-center items-center max-[1024px]:py-10 max-[810px]:px-14 max-[510px]:px-7">
                <p className="badge py-3 px-6 text-[12px] text-center font-semibold text-white mb-2 max-[1024px]:scale-[0.88]">OUR CLIENTS</p>
                <h2 className="max-w-[888px] text-[#FCFCFD] leading-[58px] font-bold text-[52px] text-center pb-3 max-[1024px]:text-[32px] max-[1024px]:leading-[40px] max-[455px]:text-[24px] max-[455px]:leading-8">
                    Trusted by <br></br> Leading Brands
                </h2>
                <h4 className="max-w-[580px] text-xl text-[#A1A1A9] text-center pb-8 leading-[30px] max-[1024px]:text-[16px] max-[455px]:text-[14px] max-[455px]:leading-6">
                    InfinixSoft offers games, business and product development  (web, mobile, social and internet technologies)  to startup and enterprise clients.
                </h4>
            </div>
            <div className="max-w-[1340px] flex flex-col gap-20 max-[1024px]:scale-[0.70] overflow-hidden">
                <Marquee
                    style={{ justifyContent: "center", alignItems: "center" }}
                    direction="right"
                    speed={45}
                    pauseOnHover={true}
                    gradient={true}
                    gradientColor={[23, 23, 24]}
                    gradientWidth={296}
                >
                    {Clients1.map((client, index) => (
                        <div key={index} className="mx-10">
                            <img src={client.icon} alt={client.name} className="w-fit h-fit" />
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
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    {Clients2.map((client, index) => (
                        <div key={index} className="mx-10">
                            <img src={client.icon} alt={client.name} className="w-fit h-fit" />
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
                    style={{ justifyContent: "center", alignItems: "center" }}
                >
                    {Clients3.map((client, index) => (
                        <div key={index} className="mx-10">
                            <img src={client.icon} alt={client.name} className="w-fit h-fit" />
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Partners;
