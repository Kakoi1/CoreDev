import './Navigation/Navigation.css';
import { NavLink } from 'react-router-dom';
import { RxCaretDown } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { LuMinimize2 } from "react-icons/lu";
import { useEffect, useState } from 'react';
import coreDevIcon from '../assets/coredev.png';



const backToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

const Navigation = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 868);
    const [showLinks, setShowLinks] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1200);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setShowLinks(!showLinks);
    };

    return (
        
        <div className='navCont'>        
            <nav className="navigation-container">
                <div className='brand'>
                    <img src={coreDevIcon} alt="CoreDev Logo" />
                    <span>CoreDev <br /> Solutions Inc.</span>
                </div>
                {!isMobile ? <Links /> : (
                    <>
                        <GiHamburgerMenu onClick={toggleMenu} className='menu-bar' color='white' fontSize='1.5rem' />
                        {showLinks && (
                            <div className='mobile-links'>
                                <div className='navIcon'> <LuMinimize2 onClick={toggleMenu} /></div>
                                <Links closeMenu={toggleMenu} />
                            </div>
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
            <li className='navigation-link' onClick={closeMenu}>
                <NavLink to="/">Home</NavLink>
            </li>
            <li className='navigation-link sub' onClick={() => toggleDropdown('product')}>
                Product <RxCaretDown className={`caret ${openDropdown === 'product' ? 'rotate' : ''}`} />
                <div className={`dropdown ${openDropdown === 'product' ? 'open' : ''}`}>
                    <NavLink to="/Products/Software" onClick={closeMenu}>Software Products</NavLink>
                    <NavLink to="/Products/Hardware" onClick={closeMenu}>Hardware Products</NavLink>
                </div>
            </li>
            <li className='navigation-link' onClick={closeMenu}>
                <NavLink to="/Clients">Clients</NavLink>
            </li>
            <li className='navigation-link' onClick={closeMenu}>
                <NavLink to="/Partners">Partners</NavLink>
            </li>
            <li className='navigation-link' onClick={closeMenu}>
                <NavLink to="/careers">Careers</NavLink>
            </li>
            <li className='navigation-link sub' onClick={() => toggleDropdown('about')}>
                About <RxCaretDown className={`caret ${openDropdown === 'about' ? 'rotate' : ''}`} />
                <div className={`dropdown ${openDropdown === 'about' ? 'open' : ''}`}>
                    <NavLink to="/about/who-we-are" onClick={closeMenu}>Who we are</NavLink>
                    <NavLink to="/about/our-team" onClick={closeMenu}>Our Team</NavLink>
                    <NavLink to="/about/government-regulation" onClick={closeMenu}>Government Regulation</NavLink>
                    <NavLink to="/about/milestone" onClick={closeMenu}>Milestone</NavLink>
                </div>
            </li>
            <li className='navigation-link' onClick={closeMenu}>
                <NavLink to="/Contact-us">Contact</NavLink>
            </li>
        </ul>
    );
};

export default Navigation;
