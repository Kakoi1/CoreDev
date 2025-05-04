import "./footer.css";
import { useState } from "react";
import { SlSocialFacebook, SlSocialLinkedin } from "react-icons/sl";
import { RiArrowRightSLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const Footer = () => {
    const [footer, setFooter] = useState({
        links: {
            label: "Useful Links",
            links: [
                { label: "Home", redirect: "/" },
                { label: "Products", redirect: "/Products" },
                { label: "Clients", redirect: "/Clients" },
                { label: "Careers", redirect: "/careers" },
                { label: "Contact", redirect: "/Contact-us" },
                { label: "Privacy Policy", redirect: "/Privacy-policy" },
            ],
        },
        services: {
            label: "Our Services",
            services: [
                { label: "Software Development", link: "/Products/Software" },
                { label: "Hardware Distributor", link: "/Products/Software" },
                { label: "Service Provider", link: "/Contact-us" },
            ],
        },
        contact: {
            label: "Contact us",
            email: <a href="mailto:info@coredev.ph">info@coredev.ph</a>,
            follow: {
                label: "FOLLOW US",
                links: [
                    {
                        icon: <SlSocialFacebook className="footer-icon" />,
                        link: "https://www.facebook.com/coredev/",
                    },
                    {
                        icon: <SlSocialLinkedin className="footer-icon" />,
                        link: "https://www.linkedin.com/company/coredev-solutions-inc-",
                    },
                ],
            },
        }
    });

    return (
        <div className="footerCont">
            <footer className="footer-wrapper">
                <div className="links-wrapper">
                    <h2>{footer.links.label}</h2>
                    <ul className="custom-list">
                        {footer.links.links.map((item, index) => (
                            <li key={index}>
                                <RiArrowRightSLine />
                                <NavLink to={item.redirect}>
                                    {item.label}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-services-wrapper">
                    <h2>{footer.services.label}</h2>
                    <ul className="custom-list">
                        {footer.services.services.map((item, index) => (
                            <li key={index}>
                                <RiArrowRightSLine />

                                <NavLink to={item.link}>{item.label}</NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="contact-wrapper">
                    <h2>{footer.contact.label}</h2>
                    <p>{footer.contact.email}</p>
                    <h3 style={{ fontWeight: "bold" }}>
                        {footer.contact.follow.label}
                    </h3>
                    <div className="footer-socials">
                        {footer.contact.follow.links.map((item, index) => (
                            <a key={index} target="_blank" href={item.link}>
                                {item.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="about-wrapper">
                    <h2>About <span>coreDev</span> Solutions Inc.</h2>
                    <p>We strive to be your trusted one-stop solution for all your technology needs—offering comprehensive hardware, software, and service solutions. Whatever you require, we deliver.</p>
                </div>
            </footer>
            <footer className="CopyRight">
                © Copyright coreDev Solutions, Inc.. All Rights Reserved 2025
            </footer>
        </div>
    );
};

export default Footer;
