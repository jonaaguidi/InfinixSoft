/* eslint-disable react/prop-types */
import { useState } from 'react';
import Arrow from "/img/Form/arrow_contact.svg"
import Logo from "/img/Header/logo.svg"

const Form = ({ onClose }) => {

    // Estado para controlar si se debe aplicar la animación de salida.
    const [shouldAnimateOut, setShouldAnimateOut] = useState(false);

    // Función para manejar el cierre del form con una transición.
    const handleClose = () => {
        setShouldAnimateOut(true);

        // Esperar a que termine la animación y luego cerrar el form.
        setTimeout(() => {
            onClose();
        }, 1500);
    };


    return (
        <div className={`fixed overflow-y-auto z-max top-0 left-0 w-screen h-screen bg-[#171718] px-24 flex gap-16 justify-center items-center transition-wipe-in-down ${shouldAnimateOut ? 'transition-wipe-out-up' : ''}`}>

            {/* Text "Contact" */}
            <div className='bg-transparent p-10 rounded-lg'>
                <h3 className='text-[42px] font-bold pb-2'>Contact</h3>
                <p className='text-[16px] font-normal text-[#A1A1A9]'>
                    Tell us about your project.<br></br>
                    We respond to almost every inquiry within one business day. Really!
                </p>
                <ul className='pt-16 flex flex-col gap-4'>
                    <li className='flex gap-1.5 pb-2 border-b border-opacity-20 border-[#A1A1A2]'>
                        <img src={Arrow} alt='arrow' />
                        <span className='font-bold'>Miami:</span> 360 NE 75 st. Miami, Suite #127, Florida 33138 United States.
                    </li>
                    <li className='flex gap-1.5 pb-2 border-b border-opacity-20 border-[#A1A1A2]'>
                        <img src={Arrow} alt='arrow' />
                        <span className='font-bold'>Dubai:</span> Dubai Silicon Oasis, DDP, Building A1, United Arab Emirates.
                    </li>
                    <li className='flex gap-1.5 pb-2 border-b border-opacity-20 border-[#A1A1A2]'>
                        <img src={Arrow} alt='arrow' />
                        <span className='font-bold'>New York:</span> 175 Varick St. New York, NY. 10014. United States.
                    </li>
                    <li className='flex gap-1.5 pb-2 border-b border-opacity-20 border-[#A1A1A2]'>
                        <img src={Arrow} alt='arrow' />
                        <span className='font-bold'>Buenos Aires:</span> Av.Rivadavia 18451, Buenos aires. Argentina.
                    </li>
                    <li className='flex gap-1.5 pb-2 border-b border-opacity-20 border-[#A1A1A2]'>
                        <img src={Arrow} alt='arrow' />
                        <span className='font-bold'>Reach out to us via email:</span><span className='text-[#db3957] font-bold cursor-pointer'>info@infinixsoft.com</span>
                    </li>
                    <li className='flex gap-1.5 pb-2 border-b border-opacity-20 border-[#A1A1A2]'>
                        <img src={Arrow} alt='arrow' />
                        <span className='font-bold'>+1 (877) 789 8761</span>
                    </li>

                </ul>
            </div>

            {/* Formulario */}
            <div className="w-[496px] h-fit bg-transparent shadow-form p-10 rounded-lg relative top-6 border-[2px] border-[#db3957] border-opacity-70">
                <div className='flex items-center justify-center pb-10'>
                    <img src={Logo} alt='Logotype' />
                </div>

                <form className='flex flex-col items-center justify-center'>

                    {/* Name Inputs */}
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="floating_first_name"
                                id="floating_first_name"
                                className="block py-2.5 px-2 rounded-sm w-full text-sm text-white bg-transparent border-0 border-b-2 border-[#A1A1A9] appearance-none focus:outline-none focus:ring-0 focus:border-[#db3957] peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-[#A1A1A9] duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#db3957] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                First Name
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-12 group">
                            <input
                                type="text"
                                name="floating_last_name"
                                id="floating_last_name"
                                className="block py-2.5 px-2 rounded-sm w-full text-sm text-white bg-transparent border-0 border-b-2 border-[#A1A1A9] appearance-none focus:outline-none focus:ring-0 focus:border-[#db3957] peer"
                                placeholder=" "
                                required
                            />
                            <label
                                htmlFor="floating_last_name"
                                className="peer-focus:font-medium absolute text-sm text-[#A1A1A9] duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#db3957] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                                Last Name
                            </label>
                        </div>
                    </div>


                    {/* Email Input */}
                    <div className="relative z-0 w-full mb-12 group">
                        <input type="Email" name="floating_Email" id="floating_Email" className="block py-2.5 px-2 rounded-sm w-full text-sm text-white bg-transparent border-0 border-b-2 border-[#A1A1A9] appearance-none focus:outline-none focus:ring-0 focus:border-[#db3957] peer" placeholder="" required />
                        <label htmlFor="floating_Email" className="peer-focus:font-medium p-1 absolute text-sm text-[#A1A1A9] duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#db3957] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>

                    {/* Company Input */}
                    <div className="relative z-0 w-full mb-12 group">
                        <input type="Company" name="floating_company" id="floating_company" className="block py-2.5 px-2 rounded-sm w-full text-sm text-white bg-transparent border-0 border-b-2 border-[#A1A1A9] appearance-none focus:outline-none focus:ring-0 focus:border-[#db3957] peer" placeholder="" required />
                        <label htmlFor="floating_company" className="peer-focus:font-medium p-1 absolute text-sm text-[#A1A1A9] duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#db3957] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company</label>
                    </div>

                    {/* Message Textarea */}
                    <div className="relative z-0 w-full mb-12 group">
                        <textarea
                            name="floating_message"
                            id="floating_message"
                            className="block py-2.5 px-2 w-full h-20 text-sm text-white bg-transparent border-0 border-b-2 border-[#A1A1A9] appearance-none focus:outline-none focus:ring-0 focus:border-[#db3957] peer"
                            placeholder=""
                            required
                        />
                        <label htmlFor="floating_message" className="peer-focus:font-medium absolute text-sm text-[#A1A1A9] duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#db3957] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Message</label>
                    </div>

                    {/* Button "Send" */}
                    <button className="button-secondary w-[296px]">Send Email</button>

                </form>

            </div>

            {/* Close Button */}
            <button
                onClick={handleClose}
                className="flex px-3 py-1.5 self-start mt-40 cursor-pointer transition duration-400 hover:scale-105">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#a1a1a9" height="16px" width="16px" version="1.1" id="Capa_1" viewBox="0 0 460.775 460.775">
                    <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
                </svg>
            </button>

        </div>
    );
};

export default Form;



