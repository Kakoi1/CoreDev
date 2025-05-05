import "../styles/HardwareList.css";
import { NavLink } from "react-router-dom";
import FW from "/assets/fw-v2.png";
import PC from "/assets/pc-v2.png";
import Laptop from "/assets/laptop-v2.png";
import Server from "/assets/server-v2.png";
import Wifi from "/assets/wifi-v2.png";
import Cams from "/assets/cams-v2.png";
import Printer from "/assets/print-v2.png";
import Net from "/assets/net-v2.png";
import Bio from "/assets/biometrics-v2.png";
import Cloud from "/assets/cloud-v2.png";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";


export const HardwareList = () => {
    const location = useLocation();

    const hardComp = [
        { pictures: PC, name: "Desktop Computers", url: "computer" },
        { pictures: Laptop, name: "Laptop Computers", url: "laptop" },
        { pictures: Server, name: "Physical Servers", url: "server" },
        { pictures: Net, name: "Network Devices", url: "router" },
        { pictures: FW, name: "Firewall Devices", url: "firewall" },
        { pictures: Cloud, name: "Cloud Services", url: "cloud" },
        { pictures: Printer, name: "Printers & Scanners", url: "printer" },
        { pictures: Cams, name: "CCTV Cameras", url: "cctv" },
        { pictures: Wifi, name: "Wireless Internet", url: "wifi" },
        { pictures: Bio, name: "Time and Attendance & Biometrics", url: "TAB" },
    ];

    return (
        <div className="HardwareContainer">
            <h2>
                <span className="hardSpan"> Hardware</span> Products
            </h2>

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
                            delay: index * 0.1, // Sequential appearance effect
                        }}
                        className="hardware"
                    >
                        <NavLink
                            to={
                                location.pathname === "/Products/Hardware"
                                    ? item.url
                                    : "Hardware/" + item.url
                            }
                            style={{ textDecoration: "none" }}
                        >
                            <img
                                src={item.pictures}
                                alt={item.name}
                                loading="lazy"
                            />
                            <h4 style={{ textAlign: "center" }}>{item.name}</h4>
                        </NavLink>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

