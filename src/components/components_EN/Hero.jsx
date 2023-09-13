import{ useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Hero = () => {
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
    <section className="bg-hero flex items-center justify-center">
      <div className="flex flex-col items-center z-20 w-[576px]">

        <div className="py-10">
          <h1 ref={titleRef} className="h-[72px] text-center text-[52px] text-[#F4F5F6] text-shadow font-bold pb-2 flex items-center justify-center max-[580px]:text-[32px] max-[580px]:px-4"></h1>
          <h5 className="text-center text-xl text-[#F4F5F6] text-shadow max-[580px]:text-[14px] max-[580px]:px-10">Discover how InfinixSoft can help you create the <span className='font-semibold'>Perfect Strategy</span> for your business.</h5>
        </div>

        <div className="flex gap-10 items-center justify-center max-[580px]:gap-8">
          <button className="button-gradient hover:opacity-100 border-[#DB3957]">Our Services</button>
          <button className="button-gradient hover:opacity-100 border-[#DB3957] ">Contact</button>
        </div>

      </div>
    </section>
  )
}

export default Hero;