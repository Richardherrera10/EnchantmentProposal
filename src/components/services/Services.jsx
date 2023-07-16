import React from 'react';
import './Services.css';
import Header from '../header/Header';
import { useState } from 'react';
import anniversary from '../../assets/anniversary.jpg';
import dateNight from '../../assets/date-night.jpg';
import engagement from '../../assets/Engagement.jpg';
import promposal from '../../assets/promposal.png';
import serviceList from '../../assets/serviceList.svg';
import testimonial from '../../assets/testimonial.jpg';
import apostrophe from "../../assets/apostrophe.svg";
import rightArrow from "../../assets/rightArrow.svg"
import leftArrow from "../../assets/leftArrow.svg"
import ImageGrid from '../imageGrid/ImageGrid';
import { Link, Outlet, useLocation } from 'react-router-dom';
function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentContent, setCurrentContent] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [slideDirection, setSlideDirection] = useState('none');

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const imageSrc = [
    { src: engagement, txt: 'Engagement', link: "engagement",description: 'is to lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { src: dateNight, txt: 'Date Night', link: "datenight",description: 'is to lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { src: promposal, txt: 'Promposal', link: "promposal",description: 'is to lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { src: anniversary, txt: 'Anniversary', link: "anniversary", description: 'is to lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  const contents = [
    {
      name: 'KYLE ROGERS',
      service: "engagement",
      testimonial: 'fadfis to lorem ipsum dolor sit amet, consectetur adipiscing elit, , ',
    },
    {
      name: 'DAN ROGERS',
      service: "date night",
      testimonial: '“fadfis to lorem ipsum dolor sit amet, consectetur adipiscing elit, ',
    },
    {
      name: 'TAYLOR ROGERS',
      service: "Promposal",
      testimonial: '“fadfis to lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ed do eiusmod tempor incididu ut.”',
    },
  ];

  const handlePrevClick = () => {
    const prevContent = currentContent === 0 ? contents.length - 1 : currentContent - 1;
    setIsFading(true); // Start the fade-out animation
    setTimeout(() => {
      setCurrentContent(prevContent);
      setIsFading(false); // Start the fade-in animation
    }, 200); // Wait for the fade-out animation duration before updating the content
  };
  
  const handleNextClick = () => {
    const nextContent = currentContent === contents.length - 1 ? 0 : currentContent + 1;
    setIsFading(true); // Start the fade-out animation
    setTimeout(() => {
      setCurrentContent(nextContent);
      setIsFading(false); // Start the fade-in animation
    }, 200); // Wait for the fade-out animation duration before updating the content
  };

  return (
    <>
      
      <h1 className='serviceIntro'>Services</h1>
      <p className='serviceIntro'>is to lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <div className='backgroundImage'>
      <ImageGrid imageSrc={imageSrc}/>
      </div>

      <div className='testomonialsBackground'>
        <h1> WHAT OUR CLIENTS SAY.</h1>
        
        
        <div className='testimonial'>
        <div className='square-left' onClick={handlePrevClick}>
          <img src={leftArrow} alt='Left Arrow' />
        </div>
          <div className={`testimonialInfo ${isFading ? 'fade-out' : 'fade-in'}`}>

          
        <div className='middle'>
          
          <h1>{contents[currentContent].name}</h1>
          <div className="testimonialContent">
            <img src={testimonial} alt='Testimonial' />
            <div className='testDesc'>
              <h2>{contents[currentContent].service}</h2>
              <p>{contents[currentContent].testimonial}</p>
            </div>
          </div>
          <img src={apostrophe} className='apostrophe' alt='Apostrophe' />
        </div>
        </div>
        <div className='square-right' onClick={handleNextClick}>
          <img src={rightArrow} alt='Right Arrow' />
        </div>

      </div>
 </div>


    </>
  );
}

export default Services;
