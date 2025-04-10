import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Product.css"; // Import the CSS file
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import ProductInquiryForm from '../../email/ProductInquiryForm';

function Product() {
  const { category } = useParams();
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_APP_URL+`api/hardware/${category}`;

  const [hardwares, setHardware] = useState([]);
  const [nameCategory, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(0); // Retry counter
  const [ShowFeature, setShowFeature] = useState({})
  // Fetch data with retry logic

  const toggleDetails = (id) => {
    setShowFeature(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(API_URL)
        .then((response) => {
          setHardware(response.data);
          setLoading(false);
          setError(null); // Clear error on success
        })
        .catch((err) => {
          console.error("Error fetching data:", err);
          setError("Failed to load data. Retrying...");
          setLoading(true);
          setTimeout(() => {
            setRetry((prev) => prev + 1);
          }, 3000);
        });
    };

    fetchData();
  }, [category, retry]);

  // Set name category dynamically
  useEffect(() => {
    const categoryNames = {
      computer: "Computer Desktop",
      laptop: "Laptop Computer",
      server: "Physical Server",
      router: "Network Devices",
      firewall: "Firewall Devices",
      cloud: "Cloud Services",
      printer: "Printers & Scanners",
      cctv: "CCTV Cameras",
      wifi: "Wireless Internet",
      TAB: "Time and Attendance & Biometrics",
    };
    setCategory(categoryNames[category] || "Unknown Category");
  }, [category]);
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

  if (loading)
    return (
              <div className="loader-container">
          <div className="loadingio-spinner-gear-nq4q5u6dq7r">
            <div className="ldio-x2uulkbinbj">
              <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
        </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="product-container">
      <h2>{nameCategory}</h2>
      <div className="grid-container">
        {hardwares.length > 0 ? (
          hardwares.map((item, index) => (
            <motion.div
            layout
            whileTap={{ scale: 0.9 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={fadeInUpVariants}
            transition={{
                layout: { duration: 0.3 },
                type: "",
                stiffness: 200,
                damping: 10,
                duration: 0.3,
                delay: 1 * 0.2,
            }}
            key={index}
              className="product-card" 
            >
              
              <img
                src={`http://localhost:5173/src/assets/hardwareImage/${item.image}`}
                alt={item.name}
                className="product-image"
              />
              <h3 className="product-name">{item.name}</h3>

              <button 
                className="see-details-btn" 
                onClick={() => toggleDetails(index)}
              >
                {ShowFeature[index] ? (
                    <>
                        Hide Details
                        <IoIosArrowUp className="icon " />
                            </>
                        ) : (
                            <>
                              Show Details  
                                <IoIosArrowDown className="icon " />
                            </>
                        )}

              </button>
              {ShowFeature[index] &&
              <AnimatePresence>
              <motion.div
               layout
              //  className="feature-wrap"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               transition={{ duration: 0.3 }}
              >
              <p>{item.description }</p>
              <br />
              <ProductInquiryForm productName={item.name} picUrl={`../../src/assets/hardwareImage/${item.image}`} type={'Hardware'} />
              </motion.div>
              </AnimatePresence>
              }
            </motion.div>
            
          ))
        ) : (
          <p>No hardware found in this category.</p>
        )}
      </div>

      {/* Overlay when an item is clicked */}
     
    </div>
  );
}

export default Product;
