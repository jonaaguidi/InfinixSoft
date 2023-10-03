import { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import Form from "../components_EN/Form";

const Hero = () => {

  // Estado para abrir y cerrar el Dropdown del Holding
  const [showForm, setShowForm] = useState(false);

  // Función abrir/cerrar dropdown del Holding
  const toggleShowForm = () => {
    setShowForm(!showForm);
  };

  // Typed.js 
  const titleRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'Your Dream, Our<span id="span">&nbsp;Dev.</span>',
        'We Are Infinix<span id="span">Soft.</span>', // Lista de Textos
      ],
      contentType: 'html',
      typeSpeed: 80,
      backSpeed: 80,
      backDelay: 1500,
      startDelay: 300,
      loop: true,
      showCursor: false,
    };


    const typed = new Typed(titleRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id='hero' className="bg-hero h-[90vh] flex items-center justify-center">
      <div className="flex flex-col items-center z-20 w-[576px]">

        <div className="py-8">
          <h1 ref={titleRef} className="h-[72px] text-center text-[52px] text-[#F4F5F6] font-bold pb-2 flex items-center justify-center max-[580px]:text-[32px] max-[580px]:px-4 max-[364px]:text-[28px]"></h1>
          <h5 className="text-center text-xl text-[#F4F5F6] max-[580px]:text-[14px] max-[580px]:px-10">Discover how InfinixSoft can help you create the <span className='font-semibold'>Perfect Strategy</span> for your business.</h5>
        </div>

        <div className="flex gap-10 items-center justify-center max-[580px]:gap-8 max-[420px]:gap-2 max-[375px]:gap-0">
          <a href='#services'>
            <button className="btn-primary btn-anim btn-hover transition duration-400 hover:shadow-button flex items-center justify-center gap-2 max-[510px]:scale-90 max-[375px]:scale-[0.80]">
            Our Services
            </button>
          </a>
          <button className="btn-secondary btn-hover border-[#868687] transition duration-400 hover:shadow-button_secondary flex items-center justify-center gap-2 max-[510px]:scale-90 max-[375px]:scale-[0.80]" onClick={toggleShowForm}>
            Contact
          </button>
        </div>

      </div>
      {showForm && <Form onClose={() => setShowForm(false)} />}
    </section>
  )
}

export default Hero;