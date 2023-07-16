import React from 'react';
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import "./ImageGrid.css";

const ImageGrid = ({ imageSrc }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <>
    
      <div className="home-image-grid">
      {imageSrc.map((image, index) => (
        <div className="image-wrapper" key={index}>
          <Link to={`/services/${(image.link)}`}>
          <div
            className={`image-container ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            
              <img src={image.src} alt={image.txt} />
           
          </div>
          </Link>
          <h2>{image.txt}</h2>
          <p>{image.description}</p>
        </div>
      ))}
    </div>
    
    <div>
      <Outlet/>
    </div>
</>
  );
};

export default ImageGrid;
