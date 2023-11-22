import React, { useEffect } from 'react';
import Navbar from './Navbar';
import ParallaxImage from './ParallaxImage'; 
import Demo from "./Demo";
import Suvidha_events1 from './Suvidha_events1';
import Background1 from './Background1';
import Scroll from './Scroll';
import News from './News';
import Background2 from './Background2';
import Team from './Team';
import Collab from './Collab';
import Slider1 from './CardSlider1';
import Slider2 from './CardSlider2';
import Footter from './Footter';
import Inter from './Internship';
import Help from './Help';
import Events_main from './Events_main';
import Gallery from './Gallery';
import Contact_page from './Contact_page';


const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
       <Navbar />
      <ParallaxImage />
      <Demo />
      <Background1 />
      <Suvidha_events1/>
      <Scroll/>
      <News/>
      <Background2/>
      <Slider1/>
      <Team/>
      <Collab/>
      <Slider2/>
      <Footter/>
    </div>
  );
}

export default HomePage;