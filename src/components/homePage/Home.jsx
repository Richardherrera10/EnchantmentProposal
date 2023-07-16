import React from 'react'
import { useState } from 'react'
import Header from '../header/Header'
import "./Home.css"
import myImage from "../../assets/will-u-marry-me.jpg"
import anniversary from "../../assets/anniversary.jpg"
import ring from "../../assets/ring.svg"
import dateNight from "../../assets/date-night.jpg"
import engagement from "../../assets/Engagement.jpg"
import promposal from "../../assets/promposal.png"
import golden from "../../assets/golden.svg"
import background from "../../assets/background.svg"
import ImageGrid from '../imageGrid/ImageGrid'
const Home = () => {


  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  const imageSrc = [{src: engagement, txt: "Engagement.", link:"engagement"}, 
                    {src: dateNight, txt:"Date Night.", link:"datenight"}, 
                    {src: promposal, txt: "Promposal.", link:"promposal"}, 
                    {src: anniversary, txt: "Anniversary.", link:"anniversary"}]
    return (
    <>
     
      <div className="content-container">

        <div className='first-section'> 
          <h1> LOREM IPSUM <br/>DOLOR SIT AMET </h1>
          <div class="picture-frame">
            <div class="border"></div>
            <img src={myImage} alt="Picture"/>
          </div>
        </div>

        <div className='black-line'></div>

        <div className='first-section'>
          <img src={anniversary} className="second-pic" alt="Picture"/>
          <h1 id="description"> Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna <br/>aliqua. Ut enim ad minim veniam. </h1>
        </div>
       
        <div className='black-background'>
              {/* Content of your component */}
              <h1> OUR WORKFLOW</h1>
              <div className='ring'>
                <img src={ring} alt="Picture"/>
                <div className="overlay-text">
                  <span className="corner-text top-left">1. First</span>
                  <span className="corner-text bottom-left">2. Second</span>
                  <span className="corner-text bottom-right">3. Third </span>
                  <span className="corner-text top-right">4. Fourth</span>
                </div>
              </div>
              
           
              <h1>OUR SERVICES</h1>
                <ImageGrid imageSrc={imageSrc}/>
                {/* <div className="home-image-grid">
                  {imageSrc.map((image, index) => (
                    <div className="image-wrapper" key={index}>
                      <div
                        className={`image-container ${hoveredIndex === index ? 'hovered' : ''}`}
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <img src={image.src} alt={image.txt} />
                      </div>
                      <h2>{image.txt}</h2>
                    </div>
                  ))}
                </div> */}
                

        </div>
        
        
      <div className="container-testimonial">
        <div className="title-container">
          <h2 className="title">WORDS ON</h2>
        </div>
        <div className="testimonial">
          <img src={golden} alt="Example SVG" className="small-svg" />
          <h2 className="subtitle">THE STREET</h2>
          <div className='testimonial-cards'>
            {/* put into array and use map */}
              <div className='card'>
                <img src={myImage} alt="Picture"/>
                <img src={golden} alt="Example SVG" />
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <span className='span1'> Kyle</span>
                <span className='span2'> Anniversary</span>
              </div>
              <div className='card'>
                <img src={myImage} alt="Picture"/>
                <img src={golden} alt="Example SVG" />
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <span className='span1'> Kyle</span>
                <span className='span2'> Anniversary</span>
              </div>
              <div className='card'>
                <img src={myImage} alt="Picture"/>
                <img src={golden} alt="Example SVG" />
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <span className='span1'> Kyle</span>
                <span className='span2'> Anniversary</span>
              </div>
          </div>
      
      </div>
    </div>

    <div className='ready'>
    
        <div className="background"></div>
      <div className="centered">
        <div className='ready-title'>
          <h1>
            READY TO START YOUR DREAM?
          </h1>
          <div className='start-btn'>
            <span> CONTACT US</span>
          </div>
        </div>
        <p>Enchantment Proposal</p>
      </div>
    </div>

        

      </div>

    
      
    </>
  )
}

export default Home