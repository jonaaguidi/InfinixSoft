import { BannerLogos } from "../../constants/index_imgs"

const Banner = () => {
    return (
        <div className="w-full h-[158px] px-28 bg-black flex flex-wrap items-center justify-center gap-20">
            {BannerLogos.map((logo) => (
                <img key={logo.name} src={logo.icon} alt={logo.name} />
            ))}
        </div>
    )
}

export default Banner