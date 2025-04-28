import './Home.css';        
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeroComponent from './HeroComponent';
import Carousel from './Carousel';
import { useState, useEffect } from 'react';
import { easeInOut, motion } from 'framer-motion';
import pcIcon from '../../assets/pc-icon.png';
import { FiTool } from "react-icons/fi";
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

    
    
    return (
        <div className="home-container">
          
            < HeroComponent/>

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
                            innovation, and mutual respect. We&apos;re always looking for talented individuals who share our values and are 
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
