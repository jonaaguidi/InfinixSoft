import { useState } from 'react';
import Form from "../components_EN/Form";
import Arrow from "/img/Services/Arrow_2.svg"
import Video from "/img/Hero/backgroundHero.mp4"

const Hero = () => {

  // Estado para abrir y cerrar el Form
  const [showForm, setShowForm] = useState(false);

  // Función para abrir/cerrar el Form.
  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <section id='hero' className="px-14 z-20 h-[85vh] flex flex-col justify-center items-center relative max-[520px]:px-7 max-[520px]:pb-20">

        <video id="video" className='absolute top-0 left-0 object-cover w-full h-full' preload={"auto"} muted autoPlay={"autoplay"} loop >
          <source src={Video} type="video/mp4" />
        </video>
        <div className="overlayHero"></div>

        <div className="flex flex-col items-center z-20 w-full text-center text-white">
          <div className="py-10">
            <h1 className="text-[52px] leading-[120%] font-bold pb-3 flex items-center justify-center max-w-[666px] mx-auto text-shadow-md max-[1000px]:text-[42px] max-[680px]:text-[36px] max-[520px]:text-[32px]">Evolving Your Ideas Into Impactful Digital Solutions</h1>
            <h5 className="text-[20px] leading-[150%] max-w-[530px] mx-auto text-shadow-md max-[1000px]:text-[18px] max-[590px]:text-[16px] max-[520px]:text-[14px]">Your trusted partner in designing, developing, launching, and maintaining technology-driven growth.</h5>
          </div>
          <button
            onClick={toggleShowForm}
            className="btn-primary btn-hover transition duration-400 hover:shadow-opacity flex items-center justify-center gap-2 max-w-[300px]"
          >
            Book a Free Consultation
            <img className="ml-1 w-4" src={Arrow} alt="Arrow"></img>
          </button>

        </div>

      </section>

      {showForm && <Form onClose={() => setShowForm(false)} />}

    </>
  )
}

export default Hero;