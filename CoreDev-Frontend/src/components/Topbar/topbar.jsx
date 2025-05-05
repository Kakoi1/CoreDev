import React from 'react';
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook, FaLinkedin, FaMobileAlt } from "react-icons/fa"; 
import { NavLink } from 'react-router-dom';
import './topbar.css';
import Toggle from "../Toggle/Toggles";

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
                   <NavLink to="/Contact-us" className="contact-link">24/7 : Customer Service</NavLink>
               </span>
            </div>
            {/* <Toggle/> */}
        </div>
    );
};

export default TopBar;
