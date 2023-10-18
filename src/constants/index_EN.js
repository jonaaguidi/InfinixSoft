// CULTURE CARDS DATA
const Culture_cards = [
  {
    number: "01",
    title: 'Consulting & Strategy',
    content: "Strategic insights to navigate the digital landscape and accelerate your growth",
  },
  {
    number: "02",
    title: 'Custom Development',
    content: "Tailored solutions to meet your unique business requirements.",
  },
  {
    number: "03",
    title: 'Maintenance & Support',
    content: "Ensuring seamless operation and continuous improvement post-deployment.",
  },
];

export { Culture_cards };

// TEAM DATA
import ivan from "/img/Team/ivan.png"
import marcos from "/img/Team/Marcos.png"
import hernan from "/img/Team/Hernan.png"
import marcela from "/img/Team/Marce.png"
import martin from "/img/Team/Martin.png"
import luis from "/img/Team/Luis.png"
import ale from "/img/Team/ale.png"
import jero from "/img/Team/jero.png"
import fernando from "/img/Team/Fer.png"
import valeria from "/img/Team/valeria.png"
import ayelen from "/img/Team/aye.png"
import lis from "/img/Team/Lis.png"

const Team = [
  {
    name: 'Ivan Saroka',
    position: "CEO Infinix Holding Group, Founder & Investor",
    icon: ivan,
    link: "https://www.linkedin.com/in/isaroka/"
  },
  {
    name: 'Marcos Vittorio',
    position: "Chief Executive Officer",
    icon: marcos,
    link: "https://www.linkedin.com/in/vittoriomarcos/"
  },
  {
    name: 'Hernán Paez',
    position: "Chief Technology Officer",
    icon: hernan,
    link: "https://www.linkedin.com/in/hernanpaez/"
  },
  {
    name: 'Marcela Biondi',
    position: "Chief Financial Officer",
    icon: marcela,
    link: "https://www.linkedin.com/company/infinixsoft/"
  },
  {
    name: 'Martin Gimenez',
    position: "Head of Legal & Compliance",
    icon: martin,
    link: "https://www.linkedin.com/company/infinixsoft/"
  },
  {
    name: 'Alejandro Bustos',
    position: "Partner Solution Adviser",
    icon: ale,
    link: "https://www.linkedin.com/in/alebustos/"
  },
  {
    name: 'Jeronimo Hutton',
    position: "Business Developer Manager",
    icon: jero,
    link: "https://www.linkedin.com/in/jeronimohutton/"
  },
  {
    name: 'Luis Paez',
    position: "Chief Marketing Operator",
    icon: luis,
    link: "https://www.linkedin.com/in/luis-santiago-paez/"
  },
  {
    name: 'Fernando Lepore',
    position: "Business Developer",
    icon: fernando,
    link: "https://www.linkedin.com/in/fernando-lepore-33125929/"
  },
  {
    name: 'Valeria Caracciolo',
    position: "Expansion leader, EMEA",
    icon: valeria,
    link: "https://www.linkedin.com/in/valeriacaracciolo/"
  },
  {
    name: 'Ayelen Vignuda',
    position: "Human Resources",
    icon: ayelen,
    link: "https://www.linkedin.com/in/ayel%C3%A9n-vignuda-46b782132/"
  },
  {
    name: 'Lisianne Cabral De Melo',
    position: "Partner - Brazil",
    icon: lis,
    link: "https://www.linkedin.com/company/infinixsoft/"
  },
];

export { Team };


// SERVICES DATA
import service1 from "/img/Services/service_1.svg"
import service2 from "/img/Services/service_2.svg"
import service3 from "/img/Services/service_3.svg"
import service4 from "/img/Services/service_4.svg"
import service5 from "/img/Services/service_5.svg"
import service6 from "/img/Services/service_6.svg"
import service7 from "/img/Services/service_7.svg"
import service8 from "/img/Services/service_8.svg"

const services = [
  {
    title: 'Strategy & Proprietary',
    content: "We provide our clients as many necessary steps to successfully design, develop and launch a web or mobile app. We also develop our own apps that we commercialize as stand-alone products.",
    icon: service1
  },
  {
    title: 'Games',
    content: "We design and develop web / desktop mobile games in Unreal Engine and Unity3d.",
    icon: service2
  },
  {
    title: 'Native / React Mobile App & Responsive Websites',
    content: "We develop Native / React mobile apps for iOS / Android devices and Responsive HTML5 Websites.",
    icon: service3
  },
  {
    title: 'Smart contracts development',
    content: "Our specialists design and develop smart contracts according to your needs. We develop Solidity based smart contracts on the Ethereum blockchain.",
    icon: service4
  },
  {
    title: 'Rest Api',
    content: "We develop Restful APIs in Ruby / Node.JS / PHP to power the mobile apps that we build.",
    icon: service5
  },
  {
    title: 'UX / UI',
    content: "We have a design team that handles the UI / UX Design of the web / mobile apps we develop.",
    icon: service6
  },
  {
    title: 'Magento',
    content: "We develop and implement Solutions Using Magento as a System of E-commerce. Let s make your business Grow.",
    icon: service7
  },
  {
    title: 'SAP',
    content: "We provide to our clients developing, configuring and managing your mobile apps with SAP integration.",
    icon: service8
  },
  {
    title: 'Artificial Intelligence Solutions',
    content: "Empowering industries with cutting-edge AI solutions, tailored for your business success.",
    icon: service4
  },
];
export { services };

// PROJECTS DATA
import BJJ from "/img/Projects/BJJ.png"
import Brooke from "/img/Projects/brooke.png"
import Future from "/img/Projects/future.png"
import XpresSpa from "/img/Projects/xpres.png"
import evJungle from "/img/Projects/evJungle.png"
import sportyfanPet from "/img/Projects/sportyfanPet.png"

const Card_Projects_data = [  
  {
    title: 'SportyFanPet',
    subtitle: "Now you can officially associate your pets with your club!",
    image: sportyfanPet,
    link: "https://sportyfanpet.com/"
  },
  {
    title: 'Ev Jungle',
    subtitle: "Find all the charging points for your plug-in vehicle.",
    image: evJungle,
    link: "http://evjungle.com/"
  },
  {
    title: 'BJJ Fanatics',
    subtitle: "Learn Brazilian Jiu-Jitsu with the best fighters.",
    image: BJJ,
    link: "https://bjjfanatics.com/"
  },  
  {
    title: 'Brooke Taylor Fit',
    subtitle: "Transform your Lifestyle with our innovative method!",
    image: Brooke,
    link: "https://brooketaylorfit.com/"
  },
  {
    title: 'Future',
    subtitle: "More Cash. Less Carbon. Rewards for you and the planet.",
    image: Future,
    link: "https://www.future.green/"
  },
  {
    title: 'XpresSpa',
    subtitle: "Self-care isn’t a luxury or indulgence. It’s a travel essential.",
    image: XpresSpa,
    link: "https://www.xpresspa.com/home/"
  },
];

export { Card_Projects_data };


// Testimonials DATA
import Claudio from "/img/Testimonials/claudio.png";

export const Testimonials = [
  {
    icon: Claudio,
    name: "Claudio Fiandesio",
    position: "COO at SocialSnack",
    content: "“As the COO of Social Snack from Aleph group, I've been working with Infinix since 2013. Their performance as a technology partner has been exceptional, and I continue to recommend and use Infinix for our technological needs.”",
  },
  {
    icon: Claudio,
    name: "Claudio Fiandesio",
    position: "COO at SocialSnack",
    content: "“As the COO of Social Snack from Aleph group, I've been working with Infinix since 2013. Their performance as a technology partner has been exceptional, and I continue to recommend and use Infinix for our technological needs.”",
  },
  {
    icon: Claudio,
    name: "Claudio Fiandesio",
    position: "COO at SocialSnack",
    content: "“As the COO of Social Snack from Aleph group, I've been working with Infinix since 2013. Their performance as a technology partner has been exceptional, and I continue to recommend and use Infinix for our technological needs.”",
  },
];