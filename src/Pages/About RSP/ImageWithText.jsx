import React, { useState } from 'react';
import './MissionH.css'
const ImageWithText = ({ imgSrc, altText, hoverText }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      style={{
        position: 'relative',
        display: 'inline-block',
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={imgSrc} alt={altText} className='imgHover' />
      {isHovered && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '30%',
            color:"black",
            transform: 'translate(-50%, -50%)',
            padding: '3px',
          }}
        >
          <p className='para'>{hoverText}</p>
        </div>
      )}
    </div>
  );
};

export default ImageWithText;
