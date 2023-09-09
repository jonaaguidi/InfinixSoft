// Importaciones/Exportaciones de Imagenes dentro del diseño con el objetivo de modularizar el codigo.

// Marquee del Holding
import InfinixHolding from "/img/Hero/Infinix_Holding.svg"
import InfinixSoft from "/img/Hero/Infinix_Soft.svg"
import InfinixQA from "/img/Hero/Infinix_QA.svg"
import InfinixNFT from "/img/Hero/Infinix_NFT.svg"
import InfinixVR from "/img/Hero/Infinix_VR.svg"
import InfinixSocial from "/img/Hero/Infinix_Social.svg"
import InfinixGaming from "/img/Hero/Infinix_Gaming.svg"

const Holding = [
  {
    name: 'Infinix Holding',
    icon: InfinixHolding,
  },
  {
    name: 'Infinix Soft',
    icon: InfinixSoft,
  },
  {
    name: 'Infinix QA',
    icon: InfinixQA,
  },
  {
    name: 'Infinix NFT',
    icon: InfinixNFT,
  },
  {
    name: 'Infinix VR',
    icon: InfinixVR,
  },
  {
    name: 'Infinix Social',
    icon: InfinixSocial,
  },
  {
    name: 'Infinix Gaming',
    icon: InfinixGaming,
  },
];

export { Holding };

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
const Holding_Dropdown = [
  {
    name: 'Infinix Holding',
    icon: InfinixHolding,
    link: "https://infinixholdinggroup.com/"
  },
  {
    name: 'Infinix QA',
    icon: InfinixQA,
    link: "https://infinixqa.com/"
  },
  {
    name: 'Infinix NFT',
    icon: InfinixNFT,
    link: "https://infinixNFT.com/"
  },
  {
    name: 'Infinix VR',
    icon: InfinixVR,
    link: "https://www.infinixar.com/"
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
];

export { Holding_Dropdown };