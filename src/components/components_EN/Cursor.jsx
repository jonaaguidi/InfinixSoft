import { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    // Cambiamos el Estado del Cursor si la pantalla es Menor a 1000px
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setCursorVisible(false);
      } else {
        setCursorVisible(true);
      }
    };

    handleResize(); // Verifica el tamaño de la pantalla cuando se carga la página
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      {cursorVisible && (
        <>
          <div
            className="cursor cursor-inner"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
          ></div>
          <div
            className="cursor cursor-outer"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
            }}
          ></div>
        </>
      )}
    </>
  );
};

export default Cursor;


