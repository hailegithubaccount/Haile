import { useState } from 'react';
import './App.css';
import Header from './Component/Header';
import Banner from './Component/Banner';
import Skill from './Component/Skill'

import Projects from './Component/Projects';
import AboutME from './Component/AboutMe';
import Contact from './Component/Contact';

function App() {
  return (
    <div className='all'>
      <Header />
      <div id="banner"><Banner /></div>
      <div id="about">< AboutME /></div>
       <div id="skills">< Skill /></div>
       <div id="projects"><Projects /></div>
       <div id="contact"><Contact/></div>  
    </div>
  );
}

export default App;