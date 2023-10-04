const Dropdown_Menu = () => {
  return (
    <nav className="animate-fade-up animate-duration-[650ms] animate-delay-25 w-fit opacity-90 absolute bg-[#171718] shadow-navbar p-2 rounded-lg top-24 right-24 max-[469px]:right-12 max-[880px]:right-4">
      <ul className="w-fit flex flex-col rounded-lg items-center font-semibold" role="menu">

        <li role="menuitem">
          <a
            href="/#hero"
            className="menuitems"
            rel='noreferrer'
          >
            <p>Home</p>
          </a>
        </li>

        <li role="menuitem">
          <a
            href="#about"
            className="menuitems"
            rel='noreferrer'>
            <p>About</p>
          </a>
        </li>


        <li role="menuitem">
          <a
            href="#projects"
            className="menuitems"
            rel='noreferrer'
          >
            <p>Projects</p>
          </a>
        </li>

        <li role="menuitem">
          <a
            href="#contact"
            className="menuitems"
            rel='noreferrer'
          >
            <p>Contact</p>
          </a>
        </li>

      </ul>
    </nav>
  );
};

export default Dropdown_Menu;
