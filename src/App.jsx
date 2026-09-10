import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import Banner from './Component/Banner';
import Skill from './Component/Skill';
import Projects from './Component/Projects';
import About from './Component/AboutMe';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import RobotAssistant from './Component/RobotAssistant';

function App() {
  const [robotCustomMessage, setRobotCustomMessage] = useState(null);
  const [robotHeader, setRobotHeader] = useState(null);

  const handleSetRobotMessage = (msg, header = null) => {
    setRobotCustomMessage(msg);
    setRobotHeader(header);
  };

  return (
    <div className="all overflow-x-hidden w-full bg-zinc-950 min-h-screen text-white">
      <Header />
      <div id="home"><Banner onRobotInspect={handleSetRobotMessage} /></div>
      <div id="about"><About onRobotInspect={handleSetRobotMessage} /></div>
      <div id="skills"><Skill onRobotInspect={handleSetRobotMessage} /></div>
      <div id="projects"><Projects onRobotInspect={handleSetRobotMessage} /></div>
      <div id="contact"><Contact onRobotInspect={handleSetRobotMessage} /></div>
      <Footer />

      {/* Global Robot Assistant floating on the right side */}
      <RobotAssistant customMessage={robotCustomMessage} activeHeader={robotHeader} />
    </div>
  );
}

export default App;