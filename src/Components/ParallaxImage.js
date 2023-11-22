import React, { useState } from 'react';
import './ParallaxImage.css'; // Import your component's CSS

function ParallaxImage() {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseMove = (e) => {
    if (isHovered) {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    }
  };

  const parallaxStyle = {
    backgroundPosition: `${10 + cursorPosition.x * 0.06}% ${1 + cursorPosition.y * 0.12}%`,
  };

  return (
    
    
    <div
      className={`background-image-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={parallaxStyle}
    >
  
    </div>
  );
}

export default ParallaxImage;
