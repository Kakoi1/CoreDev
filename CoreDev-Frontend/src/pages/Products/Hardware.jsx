import "./Hardware.css";
import React from "react";


import FW from "../../assets/fw-v2.png";
import PC from "../../assets/pc-v2.png";
import Laptop from "../../assets/laptop-v2.png";
import Server from "../../assets/server-v2.png";
import Wifi from "../../assets/wifi-v2.png";
import Cams from "../../assets/cams-v2.png";
import Printer from "../../assets/print-v2.png";
import Net from "../../assets/net-v2.png";
import Bio from "../../assets/biometrics-v2.png";
import Cloud from "../../assets/cloud-v2.png";


import { easeInOut, motion } from "framer-motion";


const Hardware = () => {
    
    const hardComp = [
        { pictures: PC, name: "Desktop Computers" },
        { pictures: Laptop, name: "Laptop Computers" },
        { pictures: Server, name: "Physical Servers" },
        { pictures: Net, name: "Network Devices" },
        { pictures: FW, name: "Firewall Devices" },
        { pictures: Cloud, name: "Cloud Services" },
        { pictures: Printer, name: "Printers & Scanners" },
        { pictures: Cams, name: "CCTV Cameras" },
        { pictures: Wifi, name: "Wireless Internet" },
        { pictures: Bio, name: "Time and Attendance & Biometrics" },
    ];

    return (
        <div className="HardwareContainer">
            <h2 style={{ textAlign: "center" }}>Hardware Products</h2>

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
                        <h4 style={{ textAlign: "center" }}>{item.name}</h4>
                        {item.icon ? <div style={{ textAlign: "center" }}>{item.icon}</div> : <img src={item.pictures} alt={item.name} loading="lazy" />}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Hardware;
