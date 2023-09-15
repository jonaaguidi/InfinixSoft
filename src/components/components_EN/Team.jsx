import { Team } from "../../constants/index_EN";

const TeamComponent = () => {
  return (
    <section className="max-w-[1220px] py-20 mx-auto flex flex-col ">
      <div className="max-w-[548px] pb-20 max-[1350px]:pl-14 max-[580px]:px-7 ">
        <h2 className="text-[52px] text-[#F4F5F6] font-bold pb-6 max-[458px]:text-2xl">Team</h2>
        <p className="text-[#C7CBE5] text-[18px] max-[458px]:text-sm">
          These are some of our key personnel, but we are an immense team
          with members scattered all over the globe. Every day, each of them
          is working diligently to deliver groundbreaking products and
          services that provide outstanding value to our customers.
        </p>
      </div>

      <div className="flex items-center justify-start gap-x-11 gap-y-10 flex-wrap max-[1350px]:px-14 max-[1350px]:gap-x-4 max-[1091px]:gap-x-2 max-[580px]:px-7 max-[625px]:justify-center max-[458px]:gap-4">
        {Team.map((member) => (
          <div key={member.name} className="max-w-[166px] h-fit max-[580px]:max-w-[128px] max-[458px]:max-w-[96px]">
            <img src={member.icon} alt={member.name}></img>
            <p className="text-[14px] font-bold text-white text-center max-[458px]:text-[12px]">
              {member.name}
            </p>
            <p className="text-[12px] font-normal text-[#C7CBE5] text-center max-[458px]:text-[8px]">
              {member.position}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default TeamComponent;
