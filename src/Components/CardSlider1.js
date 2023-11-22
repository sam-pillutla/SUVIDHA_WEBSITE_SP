import React, { useState, useRef,useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardSlider1.css';
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";
import g1 from './g1.png';
import g2 from './g2.png';
import g3 from './g3.png';
import g4 from './g4.png';
import g5 from './g5.png';
import g6 from './g6.png';
import g7 from './g7.png';
import g8 from './g8.png';
import g9 from './g9.png';
import g10 from './g10.png';
import g11 from './g11.png';
import g12 from './g12.png';

const CardSlider1 = () => {
  const cardData = [g1, g2, g3, g4, g5,g6,g7,g8,g9,g10,g11,g12];
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    sliderRef.current.slickGoTo(index);
  };
  useEffect(() => {
    // call api or anything
    var cols = document.getElementsByClassName('card');
    for(let i=0; i<cols.length; i++) {
      cols[i].style.width = '330px';  
      cols[i].style.margin = '40px';  
    }
    console.log("loaded");
 });
  return (
    <div>
        <div className='heading-cen'>
                <h2 className="head5">Testimonial</h2>
                <h1>
                What do they say?
                </h1>
            </div>

    
    <div className='CardSlider'>
      <Slider {...settings} ref={sliderRef}>
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <img src={card} alt="" width={'100%'} height={'450px'} style={{borderRadius:'15px'}}/>
          </div>
        ))}
      </Slider>
      <div className="custom-dots">
        {cardData.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div> 
    </div>
    <button className='buttonapp'><a href="https://drive.google.com/drive/u/1/folders/1lCc5YL2t6eFN3nlk9mgseCXCg7kOdty8" 
     target="_blank"
     rel="noopener noreferrer" 
     style={{textDecoration:'none',color:'white'}}>
    Testimonials
  </a></button>
    </div>
  );
};

export default CardSlider1;
