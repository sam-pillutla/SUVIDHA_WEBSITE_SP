import React, { useState, useRef,useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CardSlider2.css';
import { FaCalendarDays, FaLocationDot } from "react-icons/fa6";
import v1 from './v1.png';
import v2 from './v2.png';
import v3 from './v3.png';
import v4 from './v4.png';
import v5 from './v5.png';
import v6 from './v6.png';
import v7 from './v7.png';
import v8 from './v8.png';

const CardSlider2 = () => {
  const cardData = [v1, v2, v3, v4, v5,v6,v7,v8];
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
    var cols = document.getElementsByClassName('card1');
    for(let i=0; i<cols.length; i++) {
      cols[i].style.width = '360px';  
      cols[i].style.marginLeft = '25px';  
    }
    console.log("loaded");
 });
  return (
    <div>
        <div className='heading-cen'>
                <h2 className="head5">More Testimonials</h2>
            </div>

    
    <div className='CardSlider2'>
      <Slider {...settings} ref={sliderRef}>
        {cardData.map((card, index) => (
          <div key={index} className="card1">
            {<img src={card} alt="" width={'101%'} height={'200px'}/>}
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
    </div>
  );
};

export default CardSlider2;
