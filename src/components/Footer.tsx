const Footer = () => {
  return (
    <footer className="bg-slate-400 shadow-lg">
      <div className="flex items-center h-full w-full mx-auto my-6 grid-rows-3 gap-2 ">
        <div className="w-full p-16">
          <h2 className="text-2xl text-zinc-50">Pages</h2>
          <ul className="mt-4 pl-4">
            <li>
              → <a href="#home">Accueil</a>
            </li>
            <li>
              → <a href="#about">A propos</a>
            </li>
            <li>
              → <a href="#project">Projets</a>
            </li>
            <li>
              → <a href="#github-projects">Github</a>
            </li>
          </ul>
        </div>
        <div className="w-full p-16"></div>
        <div className="w-full p-16">
          <h2 className="text-2xl text-zinc-50">Réseaux</h2>
          <ul className="mt-4 pl-4">
            <li>
              <a href="">Twitter</a>
            </li>
            <li>
              <a href="">Github</a>
            </li>
            <li>
              <a href="">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center py-4 text-zinc-100 text-xl">
        &copy; Copyright HyGoww 2025 - Tous droits réservés
      </div>
    </footer>
  );
};

export default Footer;
