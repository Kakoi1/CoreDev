import './Home.css';        
import teamPhoto from '../../assets/coreDev-Team-Edited-2.png';
import { useNavigate } from "react-router-dom";
import ParticlesComponent from './ParticlesComponent';
import { FaLaptopCode } from "react-icons/fa";
import { BiServer } from "react-icons/bi";
import { BsHeadset } from "react-icons/bs";
import { useState } from 'react';
import { easeInOut, motion } from 'framer-motion';
import pcIcon from '../../assets/pc-icon.png';
import { FiTool } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import { FaFacebook } from "react-icons/fa";



const Home = () => {
      const navigate = useNavigate();
    const [services] = useState([
        {
            name: "Software Development",
            icon: <FaLaptopCode className='icon' />,
            description: "We offer more than just accounting and banking software solutions – our diverse software products are tailored to meet your needs.",
            label: "Explore",
            link: '/Products/Software'
        },
        {
            name: "Hardware Distributor",
            icon: <BiServer className='icon' />,
            description: "We've broadened our product range to meet our clients' demands, offering computer peripherals, servers, and different types of printers like Passbook and POS printers.",
            label: "Explore",
            link: '/Products/Hardware'
        },
        {   
            name: "Service Provider",
            icon: <BsHeadset className='icon' />,
            description: "We provide 24/7 technical support to our valued clients. Feel free to contact us any time of the day. We are at your service.",
            label: "Contact",
            link: '/Contact-us'
        }
    ]);
    
    return (
        
        <div className="home-container">
            <ParticlesComponent >
             
            </ParticlesComponent>

               

            <div className='services-wrapper'>
                <h1 className='service-header'>Services</h1>
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
                                <p className='description'>{item.description}</p>
                            </div>
                            <div className='bottom'>
                                <motion.button
                                  onClick={() =>
                                    navigate(item.link)
                                  }
                                    type='button'
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
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
                        <h2 className='header'>Be Part of Our Growing Team</h2>
                        <p>
                            We believe that our people are our greatest asset. At coreDev, we foster a culture of collaboration, 
                            innovation, and mutual respect. We're always looking for talented individuals who share our values and are 
                            excited to contribute to our mission.
                        </p>
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
            <div className='reach-us-wrapper'>
                <div className="left">
                    <h2 className='header'>Reach Us</h2>
                    <p className='description'>
                        For any inquiries, concerns, or requests for further information, please do not hesitate to contact us. 
                        We are committed to providing excellent customer service and will be happy to assist you. 
                        Our contact details are listed below.
                    </p>
                    <div className='contact'>
                        <a href="mailto:info@coredev.ph">
                            <TfiEmail className='icon' color='#ff6c00'/> info@coredev.ph
                        </a>
                    </div>
                    <div className='contact'>
                        <a href="https://web.facebook.com/coredev" target="_blank" rel="noopener noreferrer">
                            <FaFacebook color='#ff6c00' className='icon'/> facebook.com/coredev
                        </a>
                    </div>
                </div>
                <div className="right">
                    <form action="">
                        <div className='fullname'>
                            <input type="text" name="first_name" placeholder='First Name' required />
                            <input type="text" name="last_name" placeholder='Last Name' required />
                        </div>
                        <input type="email" name="email" placeholder='Email' required />
                        <textarea name="message" placeholder='Your Message' required></textarea>
                        <button className='submit-btn' type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Home;
