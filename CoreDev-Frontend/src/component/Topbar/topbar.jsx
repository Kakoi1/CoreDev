import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook, FaLinkedin, FaMobileAlt } from "react-icons/fa"; 
import { NavLink } from 'react-router-dom';
import './topbar.css';

const TopBar = () => {
    return (
        <div className="top-bar">
            <div className="contact-info">
               <span> 
                   <TfiEmail className="icon"/>
                   <a href="mailto:info@coredev.ph">info@coredev.ph</a>
               </span>
               <span> 
                   <FaMobileAlt className="icon" />
                   <NavLink to="/Contact-us" className="contact-link">24/7 : Contact Us</NavLink>
               </span>
            </div>
        </div>
    );
};

export default TopBar;
