import Logo from "../Shared/Logo";
import NavLinks from "./NavLinks";
const Navbar = () => {
  return (
    <header className=" fixed top-0 left-0 right-0 z-20 bg-white flex max-w-full flex-col  px-4 py-4 text-slate-700 md:mx-auto md:flex-row md:items-center">
      <div className="logo-img w-52 ">
      {/* logo */}
      <Logo/>

      </div>
    <input type="checkbox" className="peer hidden" id="navbar-open" />
    <label
      className="absolute top-5 right-7 cursor-pointer md:hidden"
      htmlFor="navbar-open"
    >
      <span className="sr-only">Toggle Navigation</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </label>
    <nav
      aria-label="Header Navigation"
      className="flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all peer-checked:mt-8 peer-checked:max-h-56 md:ml-24 md:max-h-full md:flex-row md:items-start"
    >
      <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0">
       <NavLinks/>
        
      </ul>
    </nav>
  </header>
  );
};

export default Navbar;
