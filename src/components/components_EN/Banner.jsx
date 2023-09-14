import { BannerLogos } from "../../constants/index_imgs"

const Banner = () => {
    return (
        <div className="w-full h-fit px-28 py-14 bg-black flex flex-wrap items-center justify-center gap-20 max-[880px]:px-14 max-[466px]:px-7 max-[466px]:gap-14">
            {BannerLogos.map((logo) => (
                <img className="max-[466px]:scale-75 max-[466px]:gap-10" key={logo.name} src={logo.icon} alt={logo.name}  />
            ))}
        </div>
    )
}

export default Banner