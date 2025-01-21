// src/App.tsx
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import FetchGithub from './components/FetchGithub';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectCard />
      <div className="">
        <h2 className=" p-10 text-zinc-800 text-3xl font-bold text-center">
          Mes Projets GitHub !
        </h2>
      </div>
      <FetchGithub username="HyGoww" />
      <Footer />
    </div>
  );
};

export default App;
