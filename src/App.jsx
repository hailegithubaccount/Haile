import './App.css';
import Header from './Component/Header';
import Banner from './Component/Banner';
import Skill from './Component/Skill';
import Projects from './Component/Projects';
import About from './Component/AboutMe';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="all overflow-x-hidden w-full bg-zinc-950 min-h-screen text-white">
      <Header />
      <div id="home"><Banner /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skill /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;