import ES from "/img/Header/spain.png"
import BR from "/img/Header/brazil.png"

const Dropdown_Flags = () => {
  return (
    <div className="animate-fade-up animate-duration-[650ms] animate-delay-25 w-fit absolute bg-[#171718] shadow-navbar p-2 rounded-lg  top-24 max-[469px]:left-58">
      <div className="flex flex-col rounded-lg items-center w-fit">

        <a
          href="/es"
          className="flex items-center gap-2 cursor-pointer mb-1 p-2 rounded-lg hover:bg-black focus:bg-black"
          target='_blank'
          rel='noreferrer'>
          <img src={ES} width={24} alt="ES" />
          <p>ES</p>
        </a>

        <a
          href="/br"
          className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-black focus:bg-black"
          target='_blank'
          rel='noreferrer'>
          <img src={BR} width={24} alt="BR" />
          <p>BR</p>
        </a>

      </div>
    </div>
  );
};

export default Dropdown_Flags;

