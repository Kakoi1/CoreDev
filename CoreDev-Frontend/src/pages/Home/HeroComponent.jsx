import { useState } from "react";
import "./HeroComponent.css";
import { FaCode, FaHeadset, FaServer } from "react-icons/fa6";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";

const featureServices = [
    {
        name: "Service Provider",
        icon: <FaHeadset className="icon" />,
        description:
            "We provide 24/7 technical support to our valued clients. Feel free to contact us any time of the day. We are at your service.",
        label: "Get in touch",
        link: "/Contact-us",
    },
    {
        name: "Software Development",
        icon: <FaCode className="icon" />,
        description:
            "We offer more than just accounting and banking software solutions – our diverse software products are tailored to meet your needs.",
        label: "Explore",
        link: "/Products",
    },
    {
        name: "Hardware Distributor",
        icon: <FaServer className="icon" />,
        description:
            "We've broadened our product range to meet our clients' demands, offering computer peripherals, servers, and different types of printers like Passbook and POS printers.",
        label: "View Hardware Listing",
        link: "/Products/Hardware",
    },
];

const HeroComponent = () => {
    const [expandedFeature, setExpandedFeature] = useState(null);

    const toggleFeature = (index) => {
        setExpandedFeature(expandedFeature === index ? null : index);
    };

    return (
        <section className="home-hero-container">
            <div className="home-hero-radial"></div>
            <div className="home-hero-image"></div>
            <div className="home-hero">
                <div className="text-content">
                    <h1>
                        coreDev <span className="home-gradient-text">Solutions</span>{" "}
                        Inc.
                    </h1>
                    <p>The Premier Software solutions in the Philippines</p>
                    <Link to={"/about/who-we-are"} className="button">
                        Learn more
                    </Link>
                </div>

                <div className="features">
                    {featureServices.map((service, index) => (
                        <div
                            key={index}
                            className="feature-container"
                            onClick={() => toggleFeature(index)} // Toggle on click
                        >
                            <div className="feature-icon">{service.icon}</div>
                            <div className="feature-name">{service.name}</div>
                            <div
                                className={`feature-description ${
                                    expandedFeature === index ? "active" : ""
                                }`}
                            >
                                {service.description}
                            </div>
                            <Link
                                to={service.link}
                                className={`cta ${
                                    expandedFeature === index ? "active" : ""
                                }`}
                                onClick={(e) => e.stopPropagation()} // Prevent Link click from toggling the container
                            >
                                {service.label} <MdArrowForward />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroComponent;