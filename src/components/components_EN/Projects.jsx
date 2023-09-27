import Future from "/img/Projects/Future_logo.svg"
import FutureImage from "/img/Projects/image_future.png"
import Bombo from "/img/Projects/bombologo.svg"
import BomboImage from "/img/Projects/Bombo_image.png"
import Icon from "/img/Projects/icon.svg"
import iosIcon from "/img/Projects/applelogo.svg"
import androidIcon from "/img/Projects/Androidlogo.svg"
import webIcon from "/img/Projects/weblogo.svg"

const Projects = () => {
  return (
    <section className="max-w-[1220px] mx-auto py-20">

      <div className="max-w-[640px] mx-auto py-20 flex flex-col items-center justify-center ">
        <p className="badge py-3 px-6 text-[12px] text-center font-semibold text-white">OUR PROJECTS</p>
        <h3 className="text-[52px] text-center font-bold text-white leading-[60px] py-5">
          Come for the features.
          Stay for best ever help.
        </h3>
        <h5 className="text-[18px] text-center text-[#A1A1A9]">InfinixSoft offers games, business and product development  (web, mobile, social and internet technologies)  to startup and enterprise clients.</h5>
      </div>

      <div id="Future_Project" className="flex items-center justify-around py-20">

        <div className="max-w-[546px] flex flex-col gap-10">

          <div className="max-w-[467px]">
            <img src={Future} alt="Future" className="pb-6" />
            <p className="text-[12px] text-white font-semibold uppercase pb-3">Transformando educación - Innovación educativa digital</p>
            <p className="text-[16px] font-normal text-[#868687] pb-6">FutureCard Visa® Debit: Cashback for eco-friendly spending. Earn 6% at FuturePartners and 5% on green choices like public transport, electric charging, and sustainable products. Future empowers you to make climate-conscious decisions, impacting 66% of carbon emissions. Join Future and earn FutureCoins through app Missions.</p>
            <button className="button-primary  transition duration-400 hover:shadow-button">Visit Website Now</button>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">AWARDS AND WINNING</p>
              <div className="flex gap-5">
                <button className="badge flex items-center gap-2">
                  <img src={Icon} alt="Icon" />
                  VISA PARTNER
                </button>
                <button className="badge flex items-center gap-2">
                  <img src={Icon} alt="Icon" />
                  PLANET CONTRIBUTION
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">TECH STACK</p>
              <div className="flex gap-5">
                <button className="badge flex items-center gap-2">
                  <img src={Icon} alt="Icon" />
                  REACT
                </button>
                <button className="badge flex items-center gap-2">
                  <img src={Icon} alt="Icon" />
                  NODE.JS
                </button>
                <button className="badge flex items-center gap-2">
                  <img src={Icon} alt="Icon" />
                  XCODE
                </button>
                <button className="badge flex items-center gap-2">
                  <img src={Icon} alt="Icon" />
                  ANDROID STUDIO
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[14px] text-[#A1A1A9]">Who supports us</p>
            <div className="flex gap-4">
              <div className="flex justify-center items-center gap-2">
                <img src={iosIcon} alt="iOS" />
                <p className="text-[16px] text-white font-bold">iOS Download</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src={androidIcon} alt="android" />
                <p className="text-[16px] text-white font-bold">Android Download</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src={webIcon} alt="web" />
                <p className="text-[16px] text-white font-bold">Website Download</p>
              </div>
            </div>
          </div>

        </div>

        <div>
          <img className="scale-110 pb-10" src={FutureImage} width={674} height={708} />
        </div>

      </div>

      <div id="Bombo_Project" className="flex items-center justify-around py-20">
        <div>
          <img className="scale-125 pb-10" src={BomboImage} width={605} height={556} />
        </div>
        <div className="max-w-[546px] flex flex-col gap-10">

          <div className="max-w-[482px]">
            <img src={Bombo} alt="Bombo" className="pb-6" />
            <p className="text-[12px] text-white font-semibold uppercase pb-3">Revolucionando la industria de ticketing con tecnología blockchain.</p>
            <p className="text-[16px] font-normal text-[#A1A1A9] pb-6">Aplicación móvil, combinada con una plataforma administrativa de backend, ofrece una solución segura, transparente y eficiente para la gestión y venta de boletos utilizando la tecnología NFT y blockchain.</p>
            <button className="button-primary  transition duration-400 hover:shadow-button">Visit Website Now</button>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">AWARDS AND WINNING</p>
              <div className="flex gap-5">
                <button className="badge flex items-center gap-2 uppercase">
                  <img src={Icon} alt="Icon" />
                  Top #1 AppStore Downloads
                </button>
                <button className="badge flex items-center gap-2 uppercase">
                  <img src={Icon} alt="Icon" />
                  +130k Active Users {">"} 3 Months
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">TECH STACK</p>
              <div className="flex gap-5">
                <button className="badge flex items-center gap-2">
                  <img src={Icon} alt="Icon" />
                  SOLIDITY
                </button>
                <button className="badge flex items-center gap-2">
                  <img src={Icon} alt="Icon" />
                  REACT
                </button>
                <button className="badge flex items-center gap-2">
                  <img src={Icon} alt="Icon" />
                  NODE.JS
                </button>
                <button className="badge flex items-center gap-2">
                  <img src={Icon} alt="Icon" />
                  ERC-721
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[14px] text-[#A1A1A9]">Who supports us</p>
            <div className="flex gap-4">
              <div className="flex justify-center items-center gap-2">
                <img src={iosIcon} alt="iOS" />
                <p className="text-[16px] text-white font-bold">iOS Download</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src={androidIcon} alt="android" />
                <p className="text-[16px] text-white font-bold">Android Download</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src={webIcon} alt="web" />
                <p className="text-[16px] text-white font-bold">Website Download</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default Projects