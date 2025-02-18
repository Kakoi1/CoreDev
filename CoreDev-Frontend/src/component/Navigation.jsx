import './Navigation/Navigation.css';
import { NavLink } from 'react-router-dom';
import { RxCaretDown } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useState } from 'react';
import coreDevIcon from '../assets/coredev.png';
import { LuMinimize2 } from "react-icons/lu";
const backToTop = () =>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })}
const Navigation = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 868);
    const [showLinks, setShowLinks] = useState(false);
 
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 868);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const openMenu = () => {
        setShowLinks(!showLinks);
    };

    return (
        <div className='navCont'>        
            <nav className="navigation-container">
            <div className='brand'>
                <img src={coreDevIcon} alt="CoreDev Logo" />
                <span>CoreDev <br /> Solutions Inc.</span>
            </div>
            {!isMobile ? <Links/> : (
                <>
                    <GiHamburgerMenu onClick={openMenu} className='menu-bar' color='white' fontSize='1.5rem' />
                    {showLinks && <div className='mobile-links'>
                        <div className='navIcon'> <LuMinimize2 onClick={openMenu}/></div>
                       
                        <Links /></div>}
                </>
            )}
        </nav>
        </div>
    );
};

const Links = () => {
    return (
        <ul onClick={backToTop}>
            <li className='navigation-link'><NavLink to="/">Home</NavLink></li>
            <li className='navigation-link sub'>
                Product <RxCaretDown className='caret' />
                <div className="dropdown">
                    <NavLink to="/Products/Software">Software Products</NavLink>
                    <NavLink to="/Products/Hardware">Hardware Products</NavLink>
                </div>
            </li>
            <li className='navigation-link'><NavLink to="/Clients">Clients</NavLink></li>
            <li className='navigation-link'><NavLink to="/careers">Careers</NavLink></li>
            <li className='navigation-link sub'>
                About <RxCaretDown className='caret' />
                <div className="dropdown">
                    <NavLink to="/about/who-we-are">Who we are</NavLink>
                    <NavLink to="/about/our-team">Our Team</NavLink>
                    <NavLink to="/about/government-regulation">Government Regulation</NavLink>
                    <NavLink to="/about/milestone">Milestone</NavLink>
                </div>
            </li>
            <li className='navigation-link'><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    );
};

export default Navigation;
