import { BannerLogos } from '../../constants/index_imgs';
import Marquee from 'react-fast-marquee';

const Banner = () => {
  return (
    <div className="w-full h-fit flex items-center justify-center px-28 py-14 bg-[#171718] max-[880px]:px-14 max-[466px]:px-7">
      <Marquee direction="left" speed={55} gradient={true} gradientColor={[23, 23, 24]} gradientWidth={96}>
        {BannerLogos.map((logo) => (
          <img
            key={logo.name}
            src={logo.icon}
            alt={logo.name}
            className='ml-20'
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Banner;
