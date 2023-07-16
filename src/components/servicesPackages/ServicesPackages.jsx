import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRing } from '@fortawesome/free-solid-svg-icons';
import Header from '../header/Header';
import backgroundSvg from '../../assets/serPackbg.svg';
import dateNight from "../../assets/date-night.jpg";
import './ServicesPackages.css';
import Modal from 'react-modal';

function ServicesPackages() {
  const [selectedPackage, setSelectedPackage] = useState(null); // State variable to keep track of the selected package
  const packagesAvailable = [
    {
      name: 'PACKAGE A:',
      image: dateNight,
      description: [
        "Walk down a beautiful aisle of rose petals and candles",
        "Propose with views of the Freedom Tower and city skyline",
        "Celebrate your new engagement with a bottle of bubbly. Friends and family welcome!",
      ],
      price: "$1500",
    },
    {
      name: 'PACKAGE B:',
      image: dateNight,
      description: [
        "Walk down a beautiful aisle of rose petals and candles",
        "Propose with views of the Freedom Tower and city skyline",
        "Celebrate your new engagement with a bottle of bubbly. Friends and family welcome!",
      ],
      price: "$2500",
    },
    {
      name: 'PACKAGE C:',
      image: dateNight,
      description: [
        "Walk down a beautiful aisle of rose petals and candles",
        "Propose with views of the Freedom Tower and city skyline",
        "Celebrate your new engagement with a bottle of bubbly. Friends and family welcome!",
      ],
      price: "$3500",
    },
    
  ];
  const modalStyles = {
    overlay: {
      zIndex: 9999, 
    },
    content: {
   
      zIndex: 10000,
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      maxWidth: '500px', // Set the desired maximum width of the modal
      maxHeight: '90vh', // Set the desired maximum height of the modal
      overflow: 'auto', // Enable scrolling within the modal if content exceeds the max height
      padding: '20px', // Add padding to the modal content
    },
  };

  const handlePackageClick = (packageIndex) => {
    setSelectedPackage(packageIndex);
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <>
      
      <div className="containerServPack">
        <img className="background-svg" src={backgroundSvg} alt="Background" />
        <div className="contentSerPack">
          <h1>SEVICE TITLE</h1>
          <p>
            IS TO LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT, SED DO
            EIUSMOD TEMPOR INCIDIDUNT UT .
          </p>
          <div className='packageContent'>
                {packagesAvailable.map((packageInd, index) => (          
                  <div key = {index} className='packages'>
                    <div className='packageTitle'>{packageInd.name}</div>
                    <img className='packageImage' src={packageInd.image} alt="Package Image" />
                    <div className='packageDescription'>
                      <ul className='custom-list'>
                        {packageInd.description.map((packageDetails, idx) => (
                          <li key={idx}>
                            <FontAwesomeIcon icon={faRing} size="xs" key={idx} style={{ color: "#000000" }} /> {packageDetails}
                          </li>
                        ))}
                      </ul>
                      <p>Price: {packageInd.price}</p>
                      <div className='seePackage' onClick={() => handlePackageClick(index)}>
                        <span className='seePackageText'>View Package</span>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div> 
      </div>

            {/* Modal window */}
      <Modal
        isOpen={selectedPackage !== null}
        onRequestClose={closeModal}
        style={modalStyles}>
        {selectedPackage !== null && (
          <>
            <h2>{packagesAvailable[selectedPackage].name}</h2>
            <img
              className='packageImage'
              src={packagesAvailable[selectedPackage].image}
              alt='Package Image'/>
            <div className='packageDescription'>
              <p> {packagesAvailable[selectedPackage].description}</p>
              <p>Price: {packagesAvailable[selectedPackage].price}</p>
            </div>
            <button onClick={closeModal}>Close</button>
          </>
        )}
      </Modal>
    </>
  );
}

export default ServicesPackages;
