import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronLeft } from "react-icons/bi";
import { useEffect, useState } from "react";
import coreDevIcon from "../../assets/coreDevlogo.png";
import { motion } from "framer-motion";

const backToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

const Navigation = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);
    const [showLinks, setShowLinks] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => {
        setShowLinks(!showLinks);
    };

    return (
        <div className="navCont">
            <nav className="navigation-container">
                <div className="brand">
                    <div>
                        <img src={coreDevIcon} alt="CoreDev Logo" />
                    </div>
                    <span>
                        CoreDev <br /> Solutions Inc.
                    </span>
                </div>
                {!isMobile ? (
                    <Links />
                ) : (
                    <>
                        <GiHamburgerMenu
                            onClick={toggleMenu}
                            className="menu-bar"
                            color="white"
                            fontSize="1.5rem"
                        />
                        {showLinks && (
                            <>
                                <div
                                    className={`Navoverlay ${
                                        showLinks ? "active" : ""
                                    }`}
                                    onClick={toggleMenu}
                                ></div>
                                <div
                                    className={`mobile-links ${
                                        showLinks ? "open" : "closed"
                                    }`}
                                >
                                    <div className="navIcon">
                                        <div className="brands">
                                            <div>
                                                <img
                                                    src={coreDevIcon}
                                                    alt="CoreDev Logo"
                                                />
                                            </div>
                                            <span>
                                                CoreDev <br /> Solutions Inc.
                                            </span>
                                        </div>
                                        <motion.div
                                            whileHover={{ scale: 1.55 }}
                                            whileTap={{ scale: 1.75 }}
                                            transition={{ duration: 0.3 }}
                                            onClick={toggleMenu}
                                            className="leftChev"
                                        >
                                            <BiChevronLeft />
                                        </motion.div>
                                    </div>
                                    <hr />
                                    <div>
                                        <Links closeMenu={toggleMenu} />
                                    </div>
                                </div>
                            </>
                        )}
                    </>
                )}
            </nav>
        </div>
    );
};

const Links = ({ closeMenu }) => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu);
    };

    const handleNavClick = (to) => {
        if (!to.startsWith("/About_us")) {
            backToTop();
        }
        if (closeMenu) {
            closeMenu();
        }
    };

    return (
        <ul>
            <li className="navigation-link" onClick={() => handleNavClick("/")}>
                <NavLink to="/">Home</NavLink>
            </li>
            <li
                className="navigation-link sub"
                onMouseEnter={() => toggleDropdown("product")}
            >
                <NavLink
                    to="/Products"
                    onClick={() => handleNavClick("/Products")}
                >
                    Products
                </NavLink>
            </li>
            <li
                className="navigation-link"
                onClick={() => handleNavClick("/Clients")}
            >
                <NavLink to="/Clients">Clients</NavLink>
            </li>
            <li
                className="navigation-link"
                onClick={() => handleNavClick("/careers")}
            >
                <NavLink to="/careers">Careers</NavLink>
            </li>
            <li
                className="navigation-link sub"
                onMouseEnter={() => toggleDropdown("about")}
            >
                <a>About</a>{" "}
                <RxCaretDown
                    className={`caret ${
                        openDropdown === "about" ? "rotate" : ""
                    }`}
                />
                <div
                    className={`dropdown ${
                        openDropdown === "about" ? "open" : ""
                    }`}
                >
                    <NavLink
                        to="/About_us#Who-We-are"
                        onClick={() => handleNavClick("/About_us#Who-We-are")}
                    >
                        Who we are
                    </NavLink>
                    <NavLink
                        to="/About_us#Our-Teams"
                        onClick={() => handleNavClick("/About_us#Our-Teams")}
                    >
                        Our Team
                    </NavLink>
                    <NavLink
                        to="/About_us#Government-Regulation"
                        onClick={() => handleNavClick("/About_us#Government-Regulation")}
                    >
                        Government Regulation
                    </NavLink>
                    <NavLink
                        to="/About_us#Milestone"
                        onClick={() => handleNavClick("/About_us#Milestone")}
                    >
                        Milestone
                    </NavLink>
                </div>
            </li>
            <li className="" onClick={() => handleNavClick("/Contact-us")}>
                <NavLink className="contact-button" to="/Contact-us">
                    Contact
                </NavLink>
            </li>
        </ul>
    );
};

export default Navigation;