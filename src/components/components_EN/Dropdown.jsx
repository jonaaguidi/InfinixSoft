import { Holding_Dropdown } from '../../constants/index_imgs';

const Dropdown = () => {
  return (
    <div  className="animate-fade-up animate-duration-[650ms] animate-delay-25 w-fit bg-[#171718] border border-[#db3957] p-3 rounded-lg absolute top-20 left-56 max-[580px]:left-32">
      <div className="flex flex-col rounded-lg items-center w-[170px] max-[580px]:w-[140px]">
        {Holding_Dropdown.map((item) => (
          <a
            href={item.link}
            key={item.name}
            className="cursor-pointer mb-2 p-3 rounded-lg hover:bg-black focus:bg-black"
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.icon} width={134} alt={item.name} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
