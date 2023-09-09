import Marquee from "react-fast-marquee";
import { Holding } from "../../constants/index_imgs"

const Hero = () => {
  return (
    <div className="bg-hero flex items-center justify-center">
      <div className="flex flex-col items-center z-20 w-[576px]">

        <div className="w-[264px] py-6 px-8 rounded-full bg-[#242427] cursor-pointer">
          <Marquee speed={65} delay={1} pauseOnHover={true}>
            {Holding.map((hold) => (
              <div key={hold.name} className='flex ml-4 items-center justify-center'>
                <img src={hold.icon} alt={hold.name} width={296} height={40} />
              </div>
            ))}
          </Marquee>
        </div>

        <div className="py-10">
          <h1 className="text-center text-[52px] text-[#F4F5F6] font-bold pb-3">Your Dream, Our Dev</h1>
          <h5 className="text-center text-xl leading-8 text-[#F4F5F6]">Discover how InfinixSoft can help you create the perfect strategy for your business.</h5>
        </div>

        <div className="flex gap-10 items-center justify-center">
          <button className="button-gradient hover:opacity-100">Our Services</button>
          <button className="button-gradient hover:opacity-100">Contact</button>
        </div>

      </div>
    </div>
  )
}

export default Hero;