import "./Hardware.css";
import React from "react";
import Cams from "../../assets/cams.png";
import Bio from '../../assets/bio.png';
import Cloud from '../../assets/cloud.png';
import Fw from '../../assets/fw.png';
import Laptop from '../../assets/laptop.png';
import Net from '../../assets/net.png';
import Pc from '../../assets/pc.png';
import Printer from '../../assets/print.png';
import Servers from '../../assets/server.png';
import Wifi from '../../assets/wifi.png';
import { easeInOut, motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Hardware = () => {
    
    const hardComp = [
        { pictures: Pc, name: 'Desktop Computers', url:'computer' },
        { pictures: Laptop, name: 'Laptop Computers' , url:'computer'},
        { pictures: Servers, name: 'Physical Servers' , url:'computer'},
        { pictures: Net, name: 'Network Devices' , url:'computer'},
        { pictures: Fw, name: 'Firewall Devices' , url:'computer'},
        { pictures: Cloud, name: 'Cloud Services' , url:'computer'},
        { pictures: Printer, name: 'Printers & Scanners' , url:'computer'},
        { pictures: Cams, name: 'CCTV Cameras' , url:'computer'},
        { pictures: Wifi, name: 'Wireless Internet' , url:'computer'},
        { pictures: Bio, name: 'Time and Attendance & Biometrics' , url:'computer'},
    ];

    return (
        <div className="HardwareContainer">
            <h2 style={{ textAlign: 'center' }}>Hardware Products</h2>

            <div className="HardWrapper">
                {hardComp.map((item, index) => (
                     
                    <motion.div 
                        key={index} 
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ 
                            type: "spring", 
                            stiffness: 200, 
                            damping: 10, 
                            duration: 0.3, 
                            delay: index * 0.1 // Sequential appearance effect
                        }}
                        className="hardware"
                    >
                      <NavLink to={item.url}>
                        <h4 style={{ textAlign: 'center' }}>{item.name}</h4>
                        <img src={item.pictures} alt={item.name} loading="lazy" />
                        </NavLink>
                    </motion.div>
                 
                ))}
            </div>
        </div>
    );
};

export default Hardware;
