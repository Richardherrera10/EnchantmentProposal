import './Contact.css';
import Header from '../header/Header';

import React, { useState } from 'react';

import contact1 from "../../assets/contact1.svg"
import contact2 from "../../assets/contact2.svg"
import contact3 from "../../assets/contact3.svg"
import contact4 from "../../assets/contact4.svg"
import contact5 from "../../assets/contact5.svg"

const Contact = () => {
  const [name, setName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [sessionType, setSessionType] = useState('');
  const [selectedPackage, setSelectedPackage] = useState('');
  const [budget, setBudget] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [referralSource, setReferralSource] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const sessionTypes = ['Engagement', 'Promposal', 'Date Night', 'Anniversary'];
  const engagementPackages = ['Package 1', 'Package 2', 'Package 3'];
  const promposalPackages = ['Package 4', 'Package 5', 'Package 6'];
  const dateNightPackages = ['Package 7', 'Package 8', 'Package 9'];
  const anniversaryPackages = ['Package 10', 'Package 11', 'Package 12'];
  const contactMethods = ['Text', 'Email', 'Phone'];
  const referralSources = ['Social media', 'Ads', 'Friends or family'];

  const handleSessionTypeChange = (e) => {
    setSessionType(e.target.value);
    setSelectedPackage('');
  };

  const handlePackageChange = (e) => {
    setSelectedPackage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      name,
      partnerName,
      email,
      phoneNumber,
      eventDate,
      location,
      sessionType,
      selectedPackage,
      budget,
      contactMethod,
      referralSource,
      additionalInfo
    });
    // Reset form fields
    setName('');
    setPartnerName('');
    setEmail('');
    setPhoneNumber('');
    setEventDate('');
    setLocation('');
    setSessionType('');
    setSelectedPackage('');
    setBudget('');
    setContactMethod('');
    setReferralSource('');
    setAdditionalInfo('');
  };

  return (
    <>
        {/* <Header/> */}
        <div className='contactContainer'>
            <div className='lefPictures'>
            <img src={contact1}/>
            <img src={contact2}/>
            <img src={contact3}/>
            </div>

            <div>
  <form className='contactForm' onSubmit={handleSubmit}>
    
    <div className="formColumn">
      <div>
        <label>Your name:</label><br/>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Your email:</label><br/>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Event date:</label><br/>
        <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />
      </div>
      <div>
        <label>Type of session:</label><br/>
        <select value={sessionType} onChange={handleSessionTypeChange} required>
          <option value="">Select</option>
          {sessionTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      {sessionType && (
        <div>
          <label>Packages:</label><br/>
          <select value={selectedPackage} onChange={handlePackageChange} required>
            <option value="">Select</option>
            {sessionType === 'Engagement' && engagementPackages.map((pack) => (
              <option key={pack} value={pack}>{pack}</option>
            ))}
            {sessionType === 'Promposal' && promposalPackages.map((pack) => (
              <option key={pack} value={pack}>{pack}</option>
            ))}
            {sessionType === 'Date Night' && dateNightPackages.map((pack) => (
              <option key={pack} value={pack}>{pack}</option>
            ))}
            {sessionType === 'Anniversary' && anniversaryPackages.map((pack) => (
              <option key={pack} value={pack}>{pack}</option>
            ))}
          </select>
        </div>
      )}
       <div>
        <label> Event location:</label><br/>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </div>
  
    </div>
    <div className="formColumn">
    <div>
        <label>Your partner's name:</label><br/>
        <input type="text" value={partnerName} onChange={(e) => setPartnerName(e.target.value)} required />
      </div>
    
      <div>
        <label>Your phone number:</label><br/>
        <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
      </div>
 
     
      <div>
        {/* en rangos */}
        <label>Your budget:</label><br/>
        <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} required />
      </div>
      <div>
        <label>How would you like us<br/> to contact you?</label><br/>
        <select value={contactMethod} onChange={(e) => setContactMethod(e.target.value)} required>
          <option value="">Select</option>
          {contactMethods.map((method) => (
            <option key={method} value={method}>{method}</option>
          ))}
        </select>
      </div>
      <div>
        <label>How did you hear <br/>about us?</label><br/>
        <select value={referralSource} onChange={(e) => setReferralSource(e.target.value)} required>
          <option value="">Select</option>
          {referralSources.map((source) => (
            <option key={source} value={source}>{source}</option>
          ))}
        </select>
      </div>
      
    </div>
    <div className="formColumn fullWidth ">
      <div>
        <label>Tell us more about you:</label><br/>
        <textarea className="full-width-textarea centered-textarea" value={additionalInfo} onChange={(e) => setAdditionalInfo(e.target.value)} required />
      </div>
    </div>
    <div className="centeredColumn">
        
      <button type="submit">SUBMIT</button>
    </div>
  </form>
</div>

            <div className='rightPictures'>
            <img src={contact4}/>
            <img src={contact5}/>
            </div>
        </div>
        
    </>
    
  );
};

export default Contact;
