import Future from "/img/Projects/Future_logo.svg"
import FutureImage from "/img/Projects/image_future.png"
import Bombo from "/img/Projects/bombologo.svg"
import BomboImage from "/img/Projects/Bombo_image.png"
import iosIcon from "/img/Projects/applelogo.svg"
import androidIcon from "/img/Projects/Androidlogo.svg"
import webIcon from "/img/Projects/weblogo.svg"
import { BsAndroid2, BsApple, BsFillArrowDownCircleFill, BsFillArrowRightCircleFill, BsFillCreditCard2BackFill } from "react-icons/bs";
import { FaAppStoreIos, FaNodeJs, FaReact } from "react-icons/fa"
import { SlGraph } from "react-icons/sl";
import { SiEthereum } from "react-icons/si"
import { FaEarthAmericas } from "react-icons/fa6"



const Projects = () => {
  return (
    <section className="max-w-[1220px] mx-auto py-20 max-[860px]:px-14 max-[480px]:px-7">

      <div className="max-w-[838px] pb-6 mx-auto flex flex-col justify-center items-center">
        <p className="badge ml-2 py-3 px-6 text-[12px] text-center font-semibold text-white mb-2 max-[455px]:scale-[0.88]">OUR PROJECTS</p>
        <h2 className="max-w-[888px] text-[#FCFCFD] leading-[58px] font-bold text-[52px] text-center pb-3 max-[1024px]:text-[32px] max-[1024px]:leading-[40px] max-[455px]:text-[24px] max-[455px]:leading-8">
          Come for the features.<br></br>
          Stay for best ever help.
        </h2>
        <h4 className="max-w-[720px] text-xl text-[#A1A1A9] text-center pb-8 leading-[30px] max-[1024px]:text-[16px] max-[455px]:text-[14px] max-[455px]:leading-6">
          InfinixSoft offers games, business and product development  (web, mobile, social and internet technologies)  to startup and enterprise clients.
        </h4>
        <a href='#projects'>
          <button className="btn-primary btn-hover ml-2 transition duration-400 hover:shadow-button flex items-center justify-center gap-2 max-[455px]:scale-[0.92]">
            See Projects
            <span className='text-[16px] font-bold'><BsFillArrowDownCircleFill /></span>
          </button>
        </a>
      </div>


      <div id="projects" className="flex items-center justify-center py-10 max-[1210px]:scale-90 max-[1040px]:flex-col max-[1040px]:scale-100 m" >

        <div className="max-w-[546px] flex flex-col flex-end gap-10 max-[1440px]:scale-[0.90] max-[1040px]:scale-[0.85]">

          <div className="max-w-[487px]">
            <img src={Future} alt="Future" className="pb-6" />
            <p className="text-[12px] text-white font-semibold uppercase pb-3">Transformando educación - Innovación educativa digital</p>
            <p className="text-[16px] font-normal text-[#868687] pb-6">FutureCard Visa® Debit: Cashback for eco-friendly spending. Earn 6% at FuturePartners and 5% on green choices like public transport, electric charging, and sustainable products. Future empowers you to make climate-conscious decisions, impacting 66% of carbon emissions. Join Future and earn FutureCoins through app Missions.</p>
            <button className="btn-primary btn-hover transition duration-400 hover:shadow-button">
              <a className=" w-fit flex items-center justify-center gap-2" href="https://www.future.green/" target="_blank" rel="noreferrer"> Visit Website Now
                <span className="text-[16px]"><BsFillArrowRightCircleFill /></span>
              </a>
            </button>
          </div>

          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">AWARDS AND WINNING</p>
              <div className="flex gap-5 flex-wrap">
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]"><BsFillCreditCard2BackFill /></span>
                  VISA PARTNER
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]"><FaEarthAmericas /></span>
                  PLANET CONTRIBUTION
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">TECH STACK</p>
              <div className="flex gap-5 flex-wrap">
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]"><FaReact /></span>
                  REACT
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]"><FaNodeJs /></span>
                  NODE.JS
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[20px] mb-[2px]"><FaAppStoreIos /></span>
                  XCODE
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[20px] mb-[2px]"><BsAndroid2 /></span>
                  ANDROID STUDIO
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[14px] text-[#A1A1A9]">Who supports us</p>
            <div className="flex gap-4 flex-wrap">
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
          <img className="scale-105 pb-0 max-[1240px]:scale-90 " src={FutureImage} width={674} height={708} />
        </div>

      </div>

      <div id="Bombo_Project" className="flex items-center justify-around py-10 max-[1440px]:scale-[0.90] max-[1240px]:py-16 max-[1040px]:flex-col max-[1040px]:scale-100 max-[1040px]:gap-8 max-[1040px]:flex-col-reverse max-[500px]:scale-[0.85]">
        <div>
          <img className="scale-125" src={BomboImage} width={605} height={556} />
        </div>
        <div className="max-w-[546px] flex flex-col gap-10">

          <div className="max-w-[482px] flex-wrap max-[1210px]:scale-90 ">
            <img src={Bombo} alt="Bombo" className="pb-6" />
            <p className="text-[12px] text-white font-semibold uppercase pb-3">Revolucionando la industria de ticketing con tecnología blockchain.</p>
            <p className="text-[16px] font-normal text-[#A1A1A9] pb-6">Aplicación móvil, combinada con una plataforma administrativa de backend, ofrece una solución segura, transparente y eficiente para la gestión y venta de boletos utilizando la tecnología NFT y blockchain.</p>
            <button className="btn-primary btn-hover transition duration-400 hover:shadow-button">
              <a className=" w-fit flex items-center justify-center gap-2" href="https://wearebombo.com/" target="_blank" rel="noreferrer"> Visit Website Now
                <span className="text-[16px]"><BsFillArrowRightCircleFill /></span>
              </a>
            </button>
          </div>

          <div className="flex flex-col gap-6 flex-wrap max-[1210px]:scale-90">
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">AWARDS AND WINNING</p>
              <div className="flex gap-5 flex-wrap">
                <button className="badge flex justify-center items-center gap-2 uppercase">
                  <span className="text-[18px] mb-1"><BsApple /></span>
                  Top #1 AppStore Downloads
                </button>
                <button className="badge flex items-center gap-2 uppercase">

                  <span className="text-[18px]"><SlGraph /></span>
                  +130k Active Users {">"} 3 Months
                </button>
              </div>
            </div>
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">TECH STACK</p>
              <div className="flex gap-5 flex-wrap">
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]"><SiEthereum /></span>
                  SOLIDITY
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]"><FaReact /></span>
                  REACT
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]"><FaNodeJs /></span>
                  NODE.JS
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]"><SiEthereum /></span>
                  ERC-721
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 max-[1210px]:scale-90">
            <p className="text-[14px] text-[#A1A1A9]">Who supports us</p>
            <div className="flex gap-4 flex-wrap">
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