import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./Footer.css"
function Footer() {
  return (
    <>
        <div className='ready'>

            <div className="background-footer"></div>
            <div className="centered">
                <div className='ready-title'>
                <h1>
                READY TO START YOUR DREAM?
                </h1>
                <div className='start-btn'>
                    <Link to="/contact"><span> CONTACT US</span></Link>
                </div>
            </div>
            <p>Enchantment Proposal</p>
            </div>
        </div>
    </>
  )
}

export default Footer