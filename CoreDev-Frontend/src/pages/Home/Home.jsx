import './Home.css';        
import teamPhoto from '../../assets/coreDev-Team-Edited-2.png';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ParticlesComponent from './ParticlesComponent';
import Carousel from './Carousel';
import { FaLaptopCode } from "react-icons/fa";
import { BiServer } from "react-icons/bi";
import { BsHeadset } from "react-icons/bs";
import { useState, useEffect } from 'react';
import { easeInOut, motion } from 'framer-motion';
import pcIcon from '../../assets/pc-icon.png';
import { FiTool } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";
import Partners from '../Partners/Partners'

const MAX_RETRIES = 3; // Maximum retry attempts
const RETRY_DELAY = 3000;

const Home = () => {

      const navigate = useNavigate();
      const [logo, setLogo] = useState([]);
      const [loading, setLoading] = useState(true);
       const [retryCount, setRetryCount] = useState(0);
        const [error, setError] = useState(null);

      const fetchLogo = async (attempt = 1) => {
        setLoading(true);
        setError(null);
    
        try {
          const response = await axios.get(import.meta.env.VITE_APP_URL+'api/Client-Logo');
          setLogo(response.data);
          setLoading(false);
        } catch (err) {
          console.error(`Error fetching clients (Attempt ${attempt}):`, err);
    
          if (attempt < MAX_RETRIES) {
            setTimeout(() => {
              setRetryCount(attempt); // Trigger re-fetch with increased attempt count
            }, RETRY_DELAY);
          } else {
            setError("Failed to fetch clients. Please try again later.");
            setLoading(false);
          }
        }
      };

       useEffect(() => {
          fetchLogo(retryCount + 1);
        }, [retryCount]);

    const [services] = useState([
        {
            name: "Software Development",
            icon: <FaLaptopCode className='icon' />,
            description: "We offer more than just accounting and banking software solutions – our diverse software products are tailored to meet your needs.",
            label: "Explore our Software Solutions",
            link: '/Products/Software'
        },
        {
            name: "Hardware Distributor",
            icon: <BiServer className='icon' />,
            description: "We've broadened our product range to meet our clients' demands, offering computer peripherals, servers, and different types of printers like Passbook and POS printers.",
            label: "View Hardware Listing",
             link: '/Products/Hardware'
        },
        {   
            name: "Service Provider",
            icon: <BsHeadset className='icon' />,
            description: "We provide 24/7 technical support to our valued clients. Feel free to contact us any time of the day. We are at your service.",
            label: "Get in touch",
             link: '/Contact-us'
        }
    ]);

    
    return (
        <div className="home-container">
          
            <ParticlesComponent />

            <div className='services-wrapper'>
                <h1 className='service-header'><span>OUR</span> SERVICES</h1>
                <div className='service-list'>
                    {services.map((item, index) => (
                        <motion.div 
                            key={index} 
                            className='service-item'
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ ease: easeInOut, duration: 0.6, delay: index * 0.2 }}  
                        >
                            <div className='top'>
                                {item.icon}
                                <h3 className='service-item-header'>{item.name}</h3>
                                <motion.p 
                                    className='description'
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: easeInOut, delay: index * 0.3 }}
                                >
                                    {item.description}
                                </motion.p>
                            </div>
                            <div className='bottom'>
                                <motion.button
                                  onClick={() =>
                                    navigate(item.link)
                                  }
                                    type='button'
                                    className='outlined-button' // Added class for styling
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                >               
                                    {item.label}
                                </motion.button>
                            </div>            
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className='sido'>
                <div className="join-us-wrapper">
                    <div className='left'>
                        <motion.h2 
                            className='header'
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: easeInOut, delay: 0.2 }}
                        >
                            Be Part of Our Growing Team
                        </motion.h2>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: easeInOut, delay: 0.4 }}
                        >
                            We believe that our people are our greatest asset. At coreDev, we foster a culture of collaboration, 
                            innovation, and mutual respect. We're always looking for talented individuals who share our values and are 
                            excited to contribute to our mission.
                        </motion.p>
                        <motion.button 
                            className='join-btn'
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                        >
                            <FiTool />
                            <span
                            onClick={() =>
                                navigate("/careers")
                              } 
                            >Join Now</span>
                        </motion.button>
                    </div>
                    <div className="right">
                    <img src={pcIcon} alt="PC" />
                    </div>
                </div>
            </div>
            <h1 className='ClientLogo' style={{textAlign: 'center'}}><span>Our</span> Clients</h1>
            <div className='logo-wrapper'  >
            {loading && (
                <div className="loader-container">
                <div className="loadingio-spinner-gear-nq4q5u6dq7r">
                    <div className="ldio-x2uulkbinbj">
                    <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                    </div>
                </div>
                </div>
            )}

            {error && (
                <div className="errorCont">
                <p style={{ color: "red", textAlign: "center" }}>{error}</p>
                <button className="retryBut" onClick={() => setRetryCount(0)}>
                    Retry
                </button>
                </div>
            )}
            {!loading && !error && (
                    <Carousel images={logo} />
            )}
            </div>
            <Partners/>
            <div className="motoCont">
                <div className='Textcontent'>
                <h1>INNOVATING YOUR FUTURE</h1>
                </div>
            </div>
        </div>
    );
}

export default Home;
