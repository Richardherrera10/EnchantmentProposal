import React from 'react'
import Header from '../header/Header'
import "./AboutUs.css"
import missionImg from "../../assets/missionIMG.jpg"
import backgroundSvg from "../../assets/aboutUsBackground9.svg"
import blessy from "../../assets/aboutMe.jpg"
function AboutUs() {

const aboutUsInfo = [{title: "OUR MISSION", description: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT ..",
                        img: missionImg}, 
                        {title: "OUR VISION", description: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT ..",
                        img: missionImg}, 
                        {title: "OUR VALUES", description: "LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO EIUSMOD TEMPOR INCIDIDUNT UT ..",
                        img: missionImg}]
  return (
    <>
      
        <div className="containerAb">
            <img className="ab-background-svg" src={backgroundSvg} alt="Background" />
            <div className="contentAb">

                {aboutUsInfo.map((section, index) => (
                    <div className={`sectionContainer ${index % 2 === 1 ? "swap" : ""}`} key={index}>
                        <div className="titleDesc">
                            <h2>{section.title}</h2>
                            <p>{section.description}</p>
                        </div>
                        <img src={section.img} alt={section.title} />
                    </div>
                ))}
                <div className='founderInfo'>
                    
                    <div className='info'>
                        <div className="h1-wrapper">
                            <h1>Hi, I'm Blessy.</h1>
                        </div>
                        <div className="h1-wrapper">
                            <h1>It's nice to meet you!</h1>
                        </div>
                        <p> is to lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut . 
                        </p>
                    </div>
                    <img className='' src={blessy}/>
                </div>
            </div>
            
        </div>

    </>
  
  )
}

export default AboutUs