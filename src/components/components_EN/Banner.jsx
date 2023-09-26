// import { BannerLogos } from '../../constants/index_imgs';
// import Marquee from 'react-fast-marquee';

// const Banner = () => {
//   return (
//     <div className="w-full h-[fit] flex items-center justify-center px-28 py-14 bg-[#171718] max-[880px]:px-14 max-[466px]:px-7">
//       <Marquee direction="left" speed={55} gradient={true} gradientColor={[23, 23, 24]} gradientWidth={96} pauseOnHover={true}>
//         {BannerLogos.map((logo) => (
//           <img
//             key={logo.name}
//             src={logo.icon}
//             alt={logo.name}
//             className='mx-10 w-fit h-[fit] max-[880px]:mx-8'
//           />
//         ))}
//       </Marquee>
//     </div>
//   );
// };

// export default Banner;

import { BannerLogos } from "../../constants/index_imgs"

const Banner = () => {
  return (
    <div className="w-full h-fit px-28 py-14 flex flex-wrap items-center justify-center gap-20 max-[880px]:px-14 max-[466px]:px-7 max-[466px]:gap-14">
      {BannerLogos.map((logo) => (
        <img className="max-[466px]:scale-75 max-[466px]:gap-4" key={logo.name} src={logo.icon} alt={logo.name} />
      ))}
    </div>
  )
}

export default Banner
