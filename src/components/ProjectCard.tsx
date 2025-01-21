const ProjectCard = () => {
  return (
    <section id="project">
      <div className="bg-blue-950 h-auto flex flex-col relative shadow-xl">
        <div className="w-auto sm:w-1/2 mt-20 ml-20">
          <h2 className="text-blue-700 font-semibold text-2xl">MES PROJETS</h2>

          <h3 className="mt-3 font-semibold text-zinc-100 text-2xl sm:text-4xl">
            Les différents projets que j'ai pu réaliser dans ma vie
          </h3>
        </div>
        <div className="flex flex-col lg:flex-row mx-20 my-10 gap-12">
          <div className="bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              className="rounded-t-sm w-full h-48 object-cover"
              src="public/banniere didi.png"
              alt="Image de la carte"
            />
            <div className="p-5">
              <h5 className="text-xl font-bold text-gray-800">DansTonCube</h5>
              <p className="text-gray-600 mt-2">
                Serveur Minecraft où j'ai été le chef de projet pendant 4 ans.{' '}
                <br /> Gestion du développement des fonctionnalités.
              </p>
              <a
                href="#"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                En savoir plus
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              className="rounded-t-sm w-full h-48 object-cover"
              src="public/fiverr.jpg"
              alt="Image de la carte"
            />
            <div className="p-5">
              <h5 className="text-xl font-bold text-gray-800">Fiverr</h5>
              <p className="text-gray-600 mt-2">
                Voici un exemple de description pour cette carte. Ajoutez ici un
                contenu pertinent pour informer les visiteurs.
              </p>
              <a
                href="#"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                En savoir plus
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              className="rounded-t-sm w-full h-48 object-cover"
              src="public/hero.png"
              alt="Image de la carte"
            />
            <div className="p-5">
              <h5 className="text-xl font-bold text-gray-800">Ce portfolio</h5>
              <p className="text-gray-600 mt-2">
                Voici un exemple de description pour cette carte. Ajoutez ici un
                contenu pertinent pour informer les visiteurs.
              </p>
              <a
                href="#"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                En savoir plus
              </a>
            </div>
          </div>

          <div className="max-w-sm bg-white rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              className="rounded-t-sm w-full h-48 object-cover"
              src="public/hero.png"
              alt="Image de la carte"
            />
            <div className="p-5">
              <h5 className="text-xl font-bold text-gray-800">DansTonCube</h5>
              <p className="text-gray-600 mt-2">
                Voici un exemple de description pour cette carte. Ajoutez ici un
                contenu pertinent pour informer les visiteurs.
              </p>
              <a
                href="#"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                En savoir plus
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
