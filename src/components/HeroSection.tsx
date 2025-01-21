import React from 'react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-blue-50">
      <div className="">
        <div className="grid grid-rows-2 lg:grid-cols-2 pt-36 items-center">
          <div className="w-full flex flex-col items-center h-96">
            <div className="flex flex-col text-wrap">
              <h1 className="text-6xl font-medium text-blue-950">
                Moi c'est Hugo
              </h1>
              <h2 className="text-4xl mt-1 text-blue-900">
                et ça c'est mon portfolio
              </h2>
              <p className="mt-3 w-96 font-light text-zinc-500">
                Je suis un jeune développeur français passionné par le web, avec
                une envie particulière de me spécialiser dans le développement
                front-end. J’aime créer des interfaces modernes, élégantes et
                intuitives, en mettant l’expérience utilisateur au cœur de mes
                projets.
              </p>

              <div className="flex flex-row items-center mt-11">
                <button className="bg-blue-800 px-8 py-4 font-light text-xl rounded-lg text-blue-100 shadow-lg hover:bg-blue-900">
                  Get Started
                </button>
                <div className="bg-blue-800 rounded-full w-6 h-6 flex items-center justify-center ml-4 mr-2">
                  <img
                    src="public/dl.png"
                    className="w-4 h-4 invert brightness-0"
                    alt=""
                  />
                </div>
                <button className="text-zinc-500 font-light hover:text-blue-500">
                  Télécharger mon CV
                </button>
              </div>

              <div className="w-full mt-12">
                <div className="flex flex-row relative items-center">
                  <h3 className="text-zinc-500/80 font-light ">
                    Le site a été fait avec
                  </h3>
                  <div className="bg-zinc-400 w-1/12 h-0.5 rounded-sm mx-3"></div>
                </div>
                <div className="flex flex-row mt-4 gap-6">
                  <img src="public/html.png" alt="" className="w-14 h-14" />
                  <img src="public/tailwind.png" alt="" className="w-14 h-14" />
                  <img
                    src="public/js.png"
                    alt="Javascript logo"
                    className="w-14 h-14 rounded-sm"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="relative lg:w-full lg:h-full hidden lg:block"
            id="about"
          >
            <div className="absolute">
              <img
                src="public/hero.png"
                alt=""
                className="hidden lg:block lg:w-full lg:h-auto"
              />

              <div className="absolute p-4 m-0 grid grid-cols-5 gap-4 -bottom-16 -left-16 z-0">
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900/0 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900/0 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900/0 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900/0 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
                <div className="bg-blue-900 rounded-full h-1 w-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-rows-2 lg:grid-cols-2">
        <div className="w-full h-auto flex flex-col items-center">
          <h3 className="text-blue-950 font-semibold text-5xl">
            <span className="text-blue-400 text-2xl font-medium drop-shadow-md">
              A PROPOS
            </span>
            <br /> Mes expériences <br />
            et qualifications
          </h3>
          <p className="mt-3 w-96 font-light text-zinc-500">
            Pour l'instant, je me consacre beaucoup dans le FrontEnd notamment
            avec Javascript (beaucoup de React). En parallèle, je fais un peu de
            POO et de BackEnd.
          </p>
        </div>

        <div className="w-full h-auto flex flex-col lg:items-start items-center mt-10 lg:mt-0">
          <div className="bg-slate-500 h-0.5 w-1/2 mb-16 -mt-8 lg:hidden"></div>

          <h3 className="text-blue-950 font-semibold text-4xl">Mes réseaux</h3>
          <p className="mt-3 w-96 font-light text-zinc-500">
            Rejoignez moi sur mes différents réseaux pour suivre mon actualité
            comme LinkedIn ou GitHub !
          </p>

          <div className="my-8 flex flex-row gap-2">
            <button className="py-2 px-4 rounded-full bg-transparent border-2 hover:bg-blue-800">
              LinkedIn
            </button>
            <button className="py-2 px-4 rounded-full bg-transparent border-2 hover:bg-blue-800">
              GitHub
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
