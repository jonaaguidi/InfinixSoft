import { Team } from "../../constants/index_EN";
import logo1 from "/img/Team/team_logo1.svg";
import logo2 from "/img/Team/team_logo2.svg";
import logo3 from "/img/Team/team_logo3.svg";

const TeamComponent = () => {
  return (
    <section className="max-w-[1220px] py-20 mx-auto flex gap-24">
      <div className="max-w-[619px] py-40">
        <h2 className="text-[52px] text-[#F4F5F6] font-bold pb-6">Team</h2>
        <p className="text-[#C7CBE5] text-[18px]">
          These are some of our key personnel, but we are an immense team
          with members scattered all over the globe. Every day, each of them
          is working diligently to deliver groundbreaking products and
          services that provide outstanding value to our customers.
        </p>
        <div className="flex items-center pt-16 gap-14">
          <img src={logo1} alt="Upcity"></img>
          <img src={logo2} alt="Design Rush"></img>
          <img src={logo3} alt="Clutch"></img>
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-6 gap-y-6 flex-wrap">
        {Team.map((member) => (
          <div key={member.name} className="max-w-[150px] gap-1.5">
            <img src={member.icon} alt={member.name}></img>
            <p className="text-[14px] font-bold text-white text-center">
              {member.name}
            </p>
            <p className="text-[12px] font-normal text-[#C7CBE5] text-center">
              {member.position}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TeamComponent;
