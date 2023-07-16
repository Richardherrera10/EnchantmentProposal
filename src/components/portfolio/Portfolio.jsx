// hacerlo mas grande

import React, { useState } from 'react';
import './Portfolio.css';
import Header from '../header/Header';

import blessy from "../../assets/blessy.png"
import anniversary from '../../assets/anniversary.jpg';
import dateNight from '../../assets/date-night.jpg';
import engagement from '../../assets/Engagement.jpg';
import promposal from '../../assets/promposal.png';
import mission from "../../assets/missionIMG.jpg"

const Portfolio = () => {
  const [activeOption, setActiveOption] = useState('All');
  const [lineWidth, setLineWidth] = useState(0);
  const optionPositions = {
    All: 0,
    Engagement: 20,
    'Date Night': 40,
    Promposal: 60,
    Anniversary: 80,
  };

  const handleOptionClick = (option) => {
    setActiveOption(option);
    setLineWidth(optionPositions[option]);
  };

  const getImagesForOption = () => {
    switch (activeOption) {
      case 'All':
        return [blessy, anniversary, dateNight, engagement, promposal, mission];
      case 'Engagement':
        return [engagement, mission, blessy];
      case 'DateNight':
        return [dateNight,  blessy, mission];
      case 'Promposal':
        return [promposal, mission, blessy];
      case 'Anniversary':
        return [blessy, mission, anniversary];
      default:
        return [];
    }
  };

  const images = getImagesForOption();

  return (
    <>
        
            <div className="portfolio-container">
                <h1> PORTFOLIO TITLE </h1>
      <div className="portfolio-options">
        <span
          className={`portfolio-option ${activeOption === 'All' ? 'active' : ''}`}
          onClick={() => handleOptionClick('All')}
        >
          All
        </span>
        <span
          className={`portfolio-option ${activeOption === 'Engagement' ? 'active' : ''}`}
          onClick={() => handleOptionClick('Engagement')}
        >
          Engagement
        </span>
        <span
          className={`portfolio-option ${activeOption === 'DateNight' ? 'active' : ''}`}
          onClick={() => handleOptionClick('DateNight')}
        >
          Date Night
        </span>
        <span
          className={`portfolio-option ${activeOption === 'Promposal' ? 'active' : ''}`}
          onClick={() => handleOptionClick('Promposal')}
        >
          Promposal
        </span>
        <span
          className={`portfolio-option ${activeOption === 'Anniversary' ? 'active' : ''}`}
          onClick={() => handleOptionClick('Anniversary')}
        >
          Anniversary
        </span>
      </div>
      <div className="line-container">
        <div className="line"></div>
        <div
          className="active-line"
          style={{
            width: `${lineWidth}%`,
            left: `${optionPositions[activeOption]}%`,
          }}
        ></div>
      </div>
      <div className="portfolio-images">
          <div className="image-grid">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            ))}
          </div>
          <div className="white-rectangle">
            
          </div>
     
        </div>
        <h1> Footer</h1>
    
      
    </div>    
    </>

  );
};

export default Portfolio;
