import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import ParallaxImage from './Components/ParallaxImage'; 
import Demo from "./Components/Demo";
import Suvidha_events1 from './Components/Suvidha_events1';
import Background1 from './Components/Background1';
import Scroll from './Components/Scroll';
import News from './Components/News';
import Background2 from './Components/Background2';
import Team from './Components/Team';
import Collab from './Components/Collab';
import Slider1 from './Components/CardSlider1';
import Slider2 from './Components/CardSlider2';
import Footter from './Components/Footter';
import Intern from './Components/Internship';
import Help from './Components/Help';
import Events_main from './Components/Events_main';
import Gallery from './Components/Gallery';
import Contact_page from './Components/Contact_page';
import HomePage from './Components/HomePage.js';
import './App.css';
import { Route, Routes, useLocation } from 'react-router';




function App() {
  return (
      
      <Routes>
        <Route path="/" element={<HomePage></HomePage>} />
        <Route path="/help" element={<Help />} />
        <Route path="/intern" element={<Intern />} />
        <Route path="/events" element={<Events_main />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact_page />} />
      </Routes>
  );
}

export default App;
