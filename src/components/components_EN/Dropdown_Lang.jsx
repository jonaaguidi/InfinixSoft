const Dropdown_Lang = () => {
  return (
    <div className="animate-fade-up animate-duration-[650ms] animate-delay-25 w-fit absolute border-2 border-[#313134] bg-black shadow-navbar p-2 rounded-md top-[124px] max-[469px]:left-58">
      <div className="w-fit flex flex-col rounded-lg items-start">
        <a
          href="/es"
          className="flex items-center gap-2 cursor-pointer mb-1 p-2 rounded-lg hover:bg-black focus:bg-black hover:text-[#DB3957]"
          target='_blank'
          rel='noreferrer'>
          <p className="text-[14px] font-normal">Spanish <span className="ml-1">(ES)</span></p>
        </a>

        <a
          href="/br"
          className="flex items-center gap-2 cursor-pointer p-2 rounded-lg  hover:bg-black focus:bg-black hover:text-[#DB3957]"
          target='_blank'
          rel='noreferrer'>
          <p className="text-[14px] font-normal">Portuguese<span className="ml-1">(BR)</span></p>
        </a>
      </div>
    </div>
  );
};

export default Dropdown_Lang;


