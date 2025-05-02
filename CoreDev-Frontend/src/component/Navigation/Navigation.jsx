import "./Navigation.css";
import { NavLink } from "react-router-dom";
import { RxCaretDown } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronLeft } from "react-icons/bi";
import { useEffect, useState } from "react";
import coreDevIcon from "../../assets/coredev.png";
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
    // console.log(showLinks);

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
                                            <img
                                                src={coreDevIcon}
                                                alt="CoreDev Logo"
                                            />
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

    return (
        <ul onClick={backToTop}>
            <li className="navigation-link" onClick={closeMenu}>
                <NavLink to="/">Home</NavLink>
            </li>
            <li
                className="navigation-link sub"
                onMouseEnter={() => toggleDropdown("product")}
            >
                <NavLink to="/Products" onClick={closeMenu}>
                    Products
                </NavLink>
            </li>
            <li className="navigation-link" onClick={closeMenu}>
                <NavLink to="/Clients">Clients</NavLink>
            </li>
            <li className="navigation-link" onClick={closeMenu}>
                <NavLink to="/careers">Careers</NavLink>
            </li>
            <li
                className="navigation-link sub"
                onMouseEnter={() => toggleDropdown("about")}
            >
                <a> About</a>{" "}
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
                    <NavLink to="/about/who-we-are" onClick={closeMenu}>
                        Who we are
                    </NavLink>
                    <NavLink to="/about/our-team" onClick={closeMenu}>
                        Our Team
                    </NavLink>
                    <NavLink
                        to="/about/government-regulation"
                        onClick={closeMenu}
                    >
                        Government Regulation
                    </NavLink>
                    <NavLink to="/about/milestone" onClick={closeMenu}>
                        Milestone
                    </NavLink>
                </div>
            </li>
            <li className="navigation-link" onClick={closeMenu}>
                <NavLink to="/Contact-us">Contact</NavLink>
            </li>
        </ul>
    );
};

export default Navigation;
