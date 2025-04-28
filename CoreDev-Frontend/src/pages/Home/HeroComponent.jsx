import "./HeroComponent.css";
import { FaCode, FaHeadset, FaServer } from "react-icons/fa6";
import { MdArrowForward } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const leftFeature = {
    name: "Service Provider",
    icon: <FaHeadset className="icon" />,
    description:
        "We provide 24/7 technical support to our valued clients. Feel free to contact us any time of the day. We are at your service.",
    label: "Get in touch",
    link: "/Contact-us",
};

const centerFeature = {
    name: "Software Development",
    icon: <FaCode className="icon" />,
    description:
        "We offer more than just accounting and banking software solutions – our diverse software products are tailored to meet your needs.",
    label: "Explore",
    link: "/Products/Software",
};

const rightFeature = {
    name: "Hardware Distributor",
    icon: <FaServer className="icon" />,
    description:
        "We've broadened our product range to meet our clients' demands, offering computer peripherals, servers, and different types of printers like Passbook and POS printers.",
    label: "View Hardware Listing",
    link: "/Products/Hardware",
};

const HeroComponent = () => {
    const [activeFeature, setActiveFeature] = useState(null);

    const handleFeatureClick = (feature) => {
        setActiveFeature(activeFeature === feature ? null : feature);
    };

    return (
        <section className="home-hero-container">
            <div className="home-hero">
                <h1 className="home-gradient-text">coreDev Solutions Inc.</h1>
                <p>The Premier Software solutions in the Philippines</p>
                <Link to={'/about/who-we-are'} className="button">Learn more</Link>
            </div>
            <div className="home-hero-radial"></div>
            <div className="home-image-container">
                <div className="home-image-wrapper">
                    <img
                        src="/coreDevlogo.png?height=100&width=100"
                        alt="Our workspace"
                        width={250}
                        height={250}
                    />
                </div>
            </div>
            <div className="features">
                <div className="left-feature">
                    <div 
                        className="feature-container" 
                        onClick={() => handleFeatureClick('left')}
                    >
                        <div className="feature-icon">{leftFeature.icon}</div>
                        <div className="feature-name">{leftFeature.name}</div>
                        <div className={`feature-description ${activeFeature === 'left' ? 'active' : ''}`}>
                            {leftFeature.description}
                        </div>
                        <Link 
                            to={leftFeature.link} 
                            className={`cta ${activeFeature === 'left' ? 'active' : ''}`}
                        >
                            {leftFeature.label} <MdArrowForward />
                        </Link>
                    </div>
                </div>
                <div className="center-feature">
                    <div 
                        className="feature-container" 
                        onClick={() => handleFeatureClick('center')}
                    >
                        <div className="feature-icon">{centerFeature.icon}</div>
                        <div className="feature-name">{centerFeature.name}</div>
                        <div className={`feature-description ${activeFeature === 'center' ? 'active' : ''}`}>
                            {centerFeature.description}
                        </div>
                        <Link 
                            to={centerFeature.link} 
                            className={`cta ${activeFeature === 'center' ? 'active' : ''}`}
                        >
                            {centerFeature.label} <MdArrowForward />
                        </Link>
                    </div>
                </div>
                <div className="right-feature">
                    <div 
                        className="feature-container" 
                        onClick={() => handleFeatureClick('right')}
                    >
                        <div className="feature-icon">{rightFeature.icon}</div>
                        <div className="feature-name">{rightFeature.name}</div>
                        <div className={`feature-description ${activeFeature === 'right' ? 'active' : ''}`}>
                            {rightFeature.description}
                        </div>
                        <Link 
                            to={rightFeature.link} 
                            className={`cta ${activeFeature === 'right' ? 'active' : ''}`}
                        >
                            {rightFeature.label} <MdArrowForward />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroComponent;