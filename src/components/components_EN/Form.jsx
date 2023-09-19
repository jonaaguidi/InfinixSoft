/* eslint-disable react/prop-types */
import { useState } from 'react';

const Form = ({ onClose }) => {
    // Estado para controlar si se debe aplicar la animación de salida.
    const [shouldAnimateOut, setShouldAnimateOut] = useState(false);

    // Función para manejar el cierre del form con una transición.
    const handleClose = () => {
        setShouldAnimateOut(true);

        // Esperar a que termine la animación y luego cerrar el form.
        setTimeout(() => {
            onClose();
        }, 2500);
    };

    return (
        <div
            className={`fixed z-max top-0 left-0 w-screen h-screen bg-[#171718] bg-opacity-65 flex justify-center items-center transition-wipe-in-down 
                ${shouldAnimateOut ? 'transition-wipe-out-up' : ''}`}
        >
            <div className="bg-white p-8 rounded-lg relative">
                <button
                    onClick={handleClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 cursor-pointer"
                >
                    X
                </button>
                <h2 className="text-2xl text-black z-max">HOLA SOY UN FORMULARIO</h2>
            </div>
        </div>
    );
};

export default Form;


