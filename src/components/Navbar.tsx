const Navbar = () => {
  return (
    <nav className="w-full h-20 bg-blue-50 shadow-sm fixed z-50 flex items-center justify-between px-4 md:px-8">
      <div className="flex items-center">
        <img
          src="/public/moi.png"
          alt="Website logo"
          className="rounded-2xl w-14 h-14 shadow-sm"
        />
        <span className="text-3xl text-blue-950 font-medium hidden md:block ml-2">
          Portfolio
        </span>
      </div>
      <ul className="hidden md:flex flex-row gap-6 text-blue-900">
        <a href="#home" className="hover:text-blue-700">
          Accueil
        </a>
        <a href="#about" className="hover:text-blue-700">
          A propos
        </a>
        <a href="#project" className="hover:text-blue-700">
          Projets
        </a>
        <a href="#github-projects" className="hover:text-blue-700">
          GitHub
        </a>
      </ul>
      <button className="bg-blue-700 text-blue-100 hover:bg-blue-800 rounded-xl shadow py-3 px-3 hidden md:block">
        Contactez-moi
      </button>
    </nav>
  );
};

export default Navbar;
