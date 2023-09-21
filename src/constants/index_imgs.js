// Importaciones/Exportaciones de Imagenes con el objetivo de modularizar el codigo.

// Banner debajo del Hero.
import Atlassian from "/img/Banner/Atlassian.png"
import AWS from "/img/Banner/AWS.png"
import HubSpot from "/img/Banner/HubSpot.png"
import Isotipo from "/img/Banner/isotipo.png"
import Magento from "/img/Banner/Magento.png"
import Shopify from "/img/Banner/Shopify.png"


const BannerLogos = [
  {
    name: 'Magento',
    icon: Magento,
  },
  {
    name: 'HubSpot',
    icon: HubSpot,
  },
  {
    name: 'Isotipo',
    icon: Isotipo,
  },
  {
    name: 'Atlassian',
    icon: Atlassian,
  },
  {
    name: 'Shopify',
    icon: Shopify,
  },
  {
    name: 'AWS',
    icon: AWS,
  },
];

export { BannerLogos };


// Holding Dropdown (Todo el holding menos InfinixSoft)
import InfinixHolding from "/img/Hero/Infinix_Holding.svg"
import InfinixQA from "/img/Hero/Infinix_QA.svg"
import InfinixNFT from "/img/Hero/Infinix_NFT.svg"
import InfinixVR from "/img/Hero/Infinix_VR.svg"
import InfinixSocial from "/img/Hero/Infinix_Social.svg"
import InfinixGaming from "/img/Hero/Infinix_Gaming.svg"

const Holding_Dropdown = [
  {
    name: 'Infinix Holding',
    icon: InfinixHolding,
    link: "https://infinixholdinggroup.com/"
  }, 
  {
    name: 'Infinix Social',
    icon: InfinixSocial,
    link: "https://infinixsocial.com/"
  },
  {
    name: 'Infinix Gaming',
    icon: InfinixGaming,
    link: "https://infinixgaming.com/"
  },
  {
    name: 'Infinix QA',
    icon: InfinixQA,
    link: "https://infinixqa.com/"
  },

  {
    name: 'Infinix VR',
    icon: InfinixVR,
    link: "https://www.infinixar.com/"
  },

  {
    name: 'Infinix NFT',
    icon: InfinixNFT,
    link: "https://infinixNFT.com/"
  },
];

export { Holding_Dropdown };


// Clients DATA
import AlaMaula from "/img/clients/alamaula.webp"
import Alpeh from "/img/clients/alpeh.webp"
import barCrawlNation from "/img/clients/barCrawlNation.webp"
import bjfanatics from "/img/clients/bjfanatics-logo.webp"
import bondacom from "/img/clients/bondacom.webp"
import Bonus from "/img/clients/Bonus.webp"
import cencosud from "/img/clients/cencosud.webp"
import certicamara from "/img/clients/certicamara.webp"
import cisco from "/img/clients/cisco.webp"
import clickStream from "/img/clients/clickStream.webp"
import colegioescribanos from "/img/clients/colegio-escribanos.webp"
import datingly from "/img/clients/datingly.webp"


const Clients = [
  {
    name: 'AlaMaula',
    icon: AlaMaula,
  },
  {
    name: 'Alpeh',
    icon: Alpeh,
  },
  {
    name: 'barCrawlNation',
    icon: barCrawlNation,
  },
  {
    name: 'bjfanatics',
    icon: bjfanatics,
  },
  {
    name: 'bondacom',
    icon: bondacom,
  },
  {
    name: 'Bonus',
    icon: Bonus,
  },
  {
    name: 'Cencosud',
    icon: cencosud,
  },
  {
    name: 'certicamara',
    icon: certicamara,
  },
  {
    name: 'Cisco',
    icon: cisco,
  },
  {
    name: 'clickStream',
    icon: clickStream,
  },
  {
    name: 'colegioescribanos',
    icon: colegioescribanos,
  },
  {
    name: 'datingly',
    icon: datingly,
  },
];

export { Clients };
