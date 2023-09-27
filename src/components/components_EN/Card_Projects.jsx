import { Tilt } from 'react-tilt'


const Card_Projects = ({ image, title, subtitle }) => {

  const defaultOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.032,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 400,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
  }

  return (
    <Tilt options={defaultOptions} className="w-[328px] h-[427px] relative z-full px-6 py-10 border-gradient_2 flex flex-col items-center justify-center">
      <img width={150} height={150} src={image} alt={title} className="pb-10" />
      <div className="flex flex-col items-center justify-center gap-2 pb-6">
        <p className="text-[24px] font-bold">{title}</p>
        <p className="text-center text-[#A1A1A9]">{subtitle}</p>
      </div>
      <Tilt options={defaultOptions}><button className="button-secondary p-4 flex items-center transition duration-400 hover:shadow-button_secondary">View Project</button></Tilt>
      
    </Tilt>
  )
}

export default Card_Projects