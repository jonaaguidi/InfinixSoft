/* eslint-disable react/no-unescaped-entities */

// TEAM SECTION ESTATICO 
import { BsLinkedin } from "react-icons/bs";
import { Team } from "../../constants/index_EN";

const TeamComponent = () => {
  return (
    <section className="max-w-[1220px] py-20 mx-auto flex flex-col ">
      <div className="max-w-[548px] pb-20 max-[1350px]:pl-14 max-[580px]:px-7 ">
        <h2 className="text-[52px] text-[#F4F5F6] font-bold pb-6 max-[458px]:text-[32px] max-[458px]:pb-2">Team</h2>
        <p className="text-[#A1A1A9] text-[18px] max-[458px]:text-[16px]">
          Our highly skilled team is at the core of our software development services. With a shared passion for technology and a relentless pursuit of excellence, we're a close-knit group of developers, designers, and problem solvers.
        </p>
      </div>

      <div className="flex items-start justify-start gap-x-11 gap-y-10 flex-wrap max-[1350px]:px-14 max-[1350px]:gap-x-7 max-[669px]:justify-center max-[580px]:px-7 max-[580px]:gap-x-5">
        {Team.map((member) => (
          <div key={member.name} className="flex flex-col items-center justify-center member z-10 max-w-[170px] h-fit max-[580px]:max-w-[156px] max-[458px]:max-w-[146px]">
              <img className="opacity-80" src={member.icon} alt={member.name}></img>
            <p className="text-[14px] font-bold text-white text-center">
              {member.name}
            </p>
            <p className="text-[12px] font-normal text-[#A1A1A9] text-center">
              {member.position}
            </p>
            <a href={member.link} target="_blank" rel="noreferrer">
             <BsLinkedin className="mt-1.5 text-[20px] cursor-pointer transition duration-500 transform hover:scale-[1.10]" /> 
            </a>
          </div>
        ))}
      </div>

    </section>
  );
};
export default TeamComponent;

