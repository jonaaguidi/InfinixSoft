const Card_Projects = ({ image, title, subtitle }) => {
  return (
    <div id="Card_project" className="w-[328px] h-[427px] relative z-full px-6 py-10 border-gradient_2 flex flex-col items-center justify-center">
        <img width={150} height={150} src={image} alt={title} className="pb-10" />
        <div className="flex flex-col items-center justify-center gap-2 pb-6">
            <p className="text-[24px] font-bold">{title}</p>
            <p className="text-center text-[#A1A1A9]">{subtitle}</p>
        </div>
        <button className="button-secondary p-6 flex items-center">View Project</button>
    </div>
  )
}

export default Card_Projects