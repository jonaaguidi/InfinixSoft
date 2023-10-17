/* eslint-disable react/no-unescaped-entities */
import Future from "/img/Projects/Future_logo.svg"
import FutureImage from "/img/Projects/image_future.png"
import Biotoken from "/img/Projects/Biotoken.svg"
import BiotokenImage from "/img/Projects/biotokenImage.png"
import Bombo from "/img/Projects/bombologo.svg"
import BomboImage from "/img/Projects/Bombo_image.png"
import iosIcon from "/img/Projects/applelogo.svg"
import androidIcon from "/img/Projects/Androidlogo.svg"
import webIcon from "/img/Projects/weblogo.svg"
import { BsAndroid2, BsApple, BsFillCreditCard2BackFill, BsPeopleFill } from "react-icons/bs";
import { FaAppStoreIos, FaNodeJs, FaReact } from "react-icons/fa"
import { SlGraph } from "react-icons/sl";
import { SiEthereum } from "react-icons/si"
import { FaEarthAmericas } from "react-icons/fa6"
import { BiLeaf, BiNetworkChart } from "react-icons/bi"
import Arrow from "/img/Services/Arrow_2.svg"
import { useEffect, useState } from "react"


const Projects = () => {

  // Resize de los difuminados
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

    <section id="projects" className="max-w-[1220px] mx-auto py-20 pb-60 mb-10 max-[1024px]:py-10 max-[860px]:px-14 max-[480px]:px-7">

      <div className="max-w-[838px] z-[100] py-20 mx-auto flex flex-col justify-center items-center max-[1024px]:py-10">
        <p className="badge w-fit font-normal mb-2">WORK SHOWCASE</p>
        <h2 className="max-w-[888px] text-[#FCFCFD] leading-[120%] font-bold text-[52px] text-center pb-3 max-[1024px]:text-[32px] max-[1024px]:leading-[40px] max-[455px]:leading-8">
          Our Portfolio
        </h2>
        <h4 className="max-w-[404px] text-[18px] font-normal text-[#A1A1A9] text-center pb-8 max-[1024px]:text-[16px] max-[455px]:text-[16px] max-[455px]:leading-6">
          A glimpse into the transformative impact we’ve made across various industries
        </h4>
      </div>

      <div id="Bombo_Project" className="flex items-center justify-center gap-2 max-[1210px]:scale-90 max-[1040px]:scale-100 max-[1040px]:flex-col-reverse">


        <div className="relative" >
          <div className={`absolute left-[68px] inset-0 rounded-[999px] bg-[#d78e27] blur-[106px] opacity-80 ${windowWidth < 620 ? "top-16 w-[156px] h-[268px]" : "top-24 w-[386px] h-[368px]"
            }`}></div>
          <img className="scale-[1.17]" src={BomboImage} width={605} height={556} />
        </div>

        <div className="max-w-[546px] z-0 flex flex-col flex-end gap-10 max-[1440px]:scale-[0.90] max-[1040px]:scale-[0.85]">
          <div className="max-w-[482px] flex-wrap">
            <p className="badge w-fit font-normal mb-3">ENTERTAINMENT INDUSTRY</p>
            <img src={Bombo} alt="Bombo" className="pb-6" />
            <p className="text-[12px] text-white font-semibold uppercase pb-3">REVOLUTIONING THE TICKETING INDUSTRY WITH BLOCKCHAIN TECHNOLOGY.</p>
            <p className="text-[16px] font-normal text-[#A1A1A9] pb-6">Mobile application, combined with a backend administrative platform, offers a secure, transparent and efficient solution for ticket management and sales using NFT and blockchain technology.</p>
            <a href="https://wearebombo.com/" target="_blank" rel="noreferrer">
              <button className="btn-primary btn-hover transition duration-400 hover:shadow-button w-fit flex items-center justify-center gap-2">
                View More
                <img className="ml-1 w-4" src={Arrow} alt="Arrow" />
              </button>
            </a>
          </div>

          <div className="flex flex-col gap-6 flex-wrap">
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

          <div className="flex flex-col gap-4">
            <p className="text-[14px] text-[#A1A1A9]">Who supports us</p>
            <div className="flex gap-4 flex-wrap">
              <div className="flex justify-center items-center gap-2">
                <img src={iosIcon} alt="iOS" />
                <p className="text-[16px] text-white font-bold">iOS</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src={androidIcon} alt="android" />
                <p className="text-[16px] text-white font-bold">Android</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src={webIcon} alt="web" />
                <p className="text-[16px] text-white font-bold">WebApp</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div id="Biotoken" className="flex items-center justify-center gap-3 pt-28 max-[1210px]:scale-90 max-[1040px]:flex-col max-[1040px]:scale-100" >

        <div className="max-w-[546px] flex flex-col flex-end gap-10 max-[1440px]:scale-[0.90] max-[1040px]:scale-[0.85]">

          <div className="max-w-[487px]">
            <p className="badge w-fit font-normal mb-3">AGRO INDUSTRY</p>
            <img src={Biotoken} alt="Biotoken" className="pb-6" />
            <p className="text-[12px] text-white font-semibold uppercase pb-3">Transforming Carbon Footprint - Biotoken's Digital Innovation</p>
            <p className="text-[16px] font-normal text-[#868687] pb-6">Convert CO2 offsets into tradeable tokens with Biotoken. Harnessing blockchain for cleaner planet solutions. Supported by global entities, we drive economic and environmental benefits. Combat climate change. #CarbonTech</p>
            <a href="https://biotoken.world/" target="_blank" rel="noreferrer">
              <button className="btn-primary btn-hover transition duration-400 hover:shadow-button w-fit flex items-center justify-center gap-2">
                View More
                <img className="ml-1 w-4" src={Arrow} alt="Arrow" />
              </button>
            </a>
          </div>

          <div className="flex flex-col gap-6 ">
            <div className="flex flex-col items-start gap-3">
              <p className="text-[12px] font-semibold">AWARDS AND WINNING</p>
              <div className="flex gap-5 flex-wrap">
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]"><BiNetworkChart /></span>
                  BLOCKCHAIN FOR ENVIRONMENTAL
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[18px] mb-[2px]"><BiLeaf /></span>
                  SUSTAINABLE  IMPACT
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
                  <span className="text-[18px] mb-[2px]"><BsPeopleFill /></span>
                  LACCHAIN
                </button>
                <button className="badge flex items-center gap-2">
                  <span className="text-[20px] mb-[2px]"><SiEthereum /></span>
                  ERC20 TOKENS
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-[14px] text-[#A1A1A9]">Who supports us</p>
            <div className="flex gap-4 flex-wrap">
              <div className="flex justify-center items-center gap-2">
                <img src={iosIcon} alt="iOS" />
                <p className="text-[16px] text-white font-bold">iOS</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src={androidIcon} alt="android" />
                <p className="text-[16px] text-white font-bold">Android</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src={webIcon} alt="web" />
                <p className="text-[16px] text-white font-bold">WebApp</p>
              </div>
            </div>
          </div>

        </div>

        <div className="relative z-0 flex items-center justify-center" >
          <div
            className={`absolute inset-0 rounded-[999px] bg-[#7DE972] blur-[126px] opacity-80 ${windowWidth < 620 ? "top-10 left-[60px] w-[140px] h-[248px]" : "left-[100px] top-24 w-[386px] h-[368px]"
              }`}
          ></div>
          <img alt="biotoken" className={`scale-100 pt-5 ${windowWidth < 440 ? "pl-10" : "pl-16"} pr-10 max-[1240px]:scale-95`} src={BiotokenImage} width={562} height={589} />
        </div>

      </div>

      <div id="Future" className="flex items-center justify-center gap-10 pt-28 max-[1210px]:scale-90 max-[1040px]:flex-col-reverse max-[1040px]:scale-100" >

        <div className="relative flex items-center justify-center">
          <div className={`absolute left-[80px] top-20 inset-0 rounded-[999px] bg-[#99ACC8] blur-[126px] opacity-80 ${windowWidth < 620 ? "w-[152px] h-[216px]" : "w-[386px] h-[368px]"
            }`}></div>
          <img className={`scale-[1.17] ${windowWidth < 620 ? "pb-24 pr-10" : "pb-20 pr-20"}`} src={FutureImage} width={605} height={556} />
        </div>

        <div className="max-w-[546px] z-0 flex flex-col flex-end gap-10 max-[1440px]:scale-[0.90] max-[1040px]:scale-[0.85]">

          <div className="max-w-[487px]">
            <p className="badge w-fit font-normal mb-3">FINTECH INDUSTRY</p>
            <img src={Future} alt="Future" className="pb-6" />
            <p className="text-[12px] text-white font-semibold uppercase pb-3">Transformando educación - Innovación educativa digital</p>
            <p className="text-[16px] font-normal text-[#868687] pb-6">FutureCard Visa® Debit: Cashback for eco-friendly spending. Earn 6% at FuturePartners and 5% on green choices like public transport, electric charging, and sustainable products. Future empowers you to make climate-conscious decisions, impacting 66% of carbon emissions. Join Future and earn FutureCoins through app Missions.</p>
            <a href="https://www.future.green/" target="_blank" rel="noreferrer">
              <button className="btn-primary btn-hover transition duration-400 hover:shadow-button w-fit flex items-center justify-center gap-2">
                View More
                <img className="ml-1 w-4" src={Arrow} alt="Arrow" />
              </button>
            </a>

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
                <p className="text-[16px] text-white font-bold">iOS</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src={androidIcon} alt="android" />
                <p className="text-[16px] text-white font-bold">Android</p>
              </div>
              <div className="flex justify-center items-center gap-2">
                <img src={webIcon} alt="web" />
                <p className="text-[16px] text-white font-bold">WebApp</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full flex items-center justify-center mt-28 max-[800px]:mt-10 max-[800px]:pb-10">
      <a href="/projects" target="_blank" rel="noreferrer">
              <button className="btn-primary btn-hover transition duration-400 hover:shadow-opacity flex items-center justify-center gap-2 max-w-[300px]">
                View More
                <img className="ml-1 w-4" src={Arrow} alt="Arrow" />
              </button>
            </a>
      </div>

    </section>


  )
}

export default Projects