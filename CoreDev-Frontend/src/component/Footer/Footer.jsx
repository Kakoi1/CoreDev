import './footer.css';
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { useState } from 'react';
import { FiChevronsRight } from "react-icons/fi";
import { NavLink,useNavigate } from 'react-router-dom';

const Footer = () => {

      const navigate = useNavigate();

    const [footer, setFooter] = useState({
        links: {
            label: "USEFUL LINKS",
            links: [
                { label: 'Home', redirect: '/' },
                { label: 'Products', redirect: '/Products/Software' },
                { label: 'Clients', redirect: '/Clients' },
                { label: 'Careers', redirect: '/careers' },
                { label: 'Contact', redirect: '/Contact-us' },
                { label: 'Privacy Policy', redirect: '/Privacy-policy' },
              ],
        },
        services: {
            label: "OUR SERVICES",
            services: [{label:"Software Development", link: '/Products/Software'}, {label:"Hardware Distributor",link: '/Products/Software'}, {label:"Service Provider", link: '/Contact-us'}],
        },
        contact: {
            label: "EMAIL US",
            email: <a href="mailto:info@coredev.ph">info@coredev.ph</a>,
            follow: {
                label: "FOLLOW US",
                links: [
                    { icon: <FaFacebook color='#ff6c00' />, link: "https://www.facebook.com/coredev/" },
                    { icon: <FaLinkedin color='#ff6c00' />, link: "https://www.linkedin.com/company/coredev-solutions-inc-" }
                ]
            }
        },
        about: {
            label: "About CoreDev",
            description: "We aim to provide a-one-stop-shop to our valued clients, from Hardware, Software and Service provider! Just name it, and you'll have it!"
        }
    });

    return (
        <div className='footerCont'>
            <footer className='footer-wrapper'>
            <div className='links-wrapper'>
                <h2>{footer.links.label}</h2>
                <ul className="custom-list">
                    {footer.links.links.map((item, index) => (
                        <li key={index}>
                            <FiChevronsRight /><NavLink to={item.redirect}> {item.label}</NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            <div className='footer-services-wrapper'>
                <h2>{footer.services.label}</h2>
                <ul className='custom-list'>
                    {footer.services.services.map((item, index) => (
                        <li key={index}>
                            <FiChevronsRight /><NavLink to={item.link}>{item.label}</NavLink> 
                        </li>
                    ))}
                </ul>
            </div>

            <div className='contact-wrapper'>
                <h2>{footer.contact.label}</h2>
                <p>{footer.contact.email}</p>
                <h3>{footer.contact.follow.label}</h3>
                <div className='links-wrapper'>
                    {footer.contact.follow.links.map((item, index) => (
                        <a key={index} target='_blank' href={item.link}>{item.icon}</a>
                    ))}
                </div>
            </div>

            <div className='about-wrapper'>
                <h2>{footer.about.label}</h2>
                <p>{footer.about.description}</p>
            </div>
            </footer>
            <footer className='CopyRight'>
            © Copyright coreDev Solutions, Inc.. All Rights Reserved 2025
            </footer>
        </div>
    );
};

export default Footer;
