import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook, FaLinkedin, FaMobileAlt } from "react-icons/fa"; 
import './topbar.css';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="contact-info">
               <span> <TfiEmail className="icon" /> info@coredev.ph</span>
                <span> <FaMobileAlt className="icon" />24/7 : Customer Service</span>
            </div>
            {/* <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div> */}
        </div>
    );
};

export default TopBar;
    