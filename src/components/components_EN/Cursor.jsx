import  { useState, useEffect } from 'react';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
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
  );
};

export default Cursor;

