import React, { useEffect, useState } from 'react';
import './Header.css';
import { Link, Outlet, useLocation } from 'react-router-dom';
import heroBanner from "../../assets/heroBanner.jpg";
import faqBanner from "../../assets/faqBanner.jpg"
import aboutBanner from "../../assets/will-u-marry-me.jpg"
import servicesBanner from "../../assets/servicesBanner.jpg"
import portfolioBanner from "../../assets/portfolioBanner.jpg"
import contactBanner from "../../assets/faq3.jpg"

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarTransparent, setNavbarTransparent] = useState(true);
  const location = useLocation();
  const [currentRoute, setCurrentRoute] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setNavbarTransparent(currentPosition === 0);
      setScrollPosition(currentPosition);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setCurrentRoute(location.pathname);
  }, [location.pathname]);

  const getHeaderImage = () => {
    switch (currentRoute) {
      case '/aboutus':
        return aboutBanner;
      case '/services':
        return servicesBanner;
      case '/portfolio':
        return portfolioBanner;
      case '/faq':
        return faqBanner;
      case '/contact':
        return contactBanner;
      default:
        return heroBanner;
    }
  };
  
  return (
    <>
      <div className="container" style={{
        backgroundImage: `url(${getHeaderImage(currentRoute)})`
      }}>
        <nav className={`navbar ${navbarTransparent ? 'transparent' : 'white'}`}>
          <div className='titles'>
            <h2></h2>
            <Link to="/">  <h2> HOME </h2> </Link>
            
            <Link to="/aboutus">  <h2> ABOUT US </h2></Link>
            
            <Link to="/services"> <h2> SERVICES</h2> </Link>
            
          </div>
          <div>
            <h2> LOGO</h2>
          </div>
          <div className='titles'>
          <Link to="/portfolio"> <h2> PORTFOLIO </h2></Link>
            
            <Link to="/faq">  <h2> FAQ </h2></Link>
           
            <Link to="/contact"><h2> CONTACT US</h2> </Link>
            
            <h2></h2>
          </div>
        </nav>
        <h1> Have your dream proposal!</h1>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  );
}

export default Header;
