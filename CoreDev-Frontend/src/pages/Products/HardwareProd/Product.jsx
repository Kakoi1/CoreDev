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
  const API_URL = import.meta.env.VITE_APP_URL + `api/hardware/${category}`;

  const [hardwares, setHardware] = useState([]);
  const [nameCategory, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(0);
  const [showFeature, setShowFeature] = useState({});
  const [selectedItem, setSelectedItem] = useState(null); // State for popup

  const toggleDetails = (id, item) => {
    if (window.innerWidth <= 768) {
      setSelectedItem(item); // Show popup on small screens
    } else {
      setShowFeature((prev) => ({
        ...prev,
        [id]: !prev[id],
      }));
    }
  };

  const closeOverlay = () => {
    setSelectedItem(null); // Close popup
  };

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(API_URL)
        .then((response) => {
          setHardware(response.data);
          setLoading(false);
          setError(null);
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
            <div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
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
                onClick={() => toggleDetails(index, item)}
              >
                {showFeature[index] && window.innerWidth > 768 ? (
                  <>
                    Hide Details
                    <IoIosArrowUp className="icon" />
                  </>
                ) : (
                  <>
                    Show Details
                    <IoIosArrowDown className="icon" />
                  </>
                )}
              </button>
              {showFeature[index] && window.innerWidth > 768 && (
                <AnimatePresence>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p>{item.description}</p>
                    <br />
                    <br />
                    <ProductInquiryForm
                      productName={item.name}
                      picUrl={`../../src/assets/hardwareImage/${item.image}`}
                      type={'Hardware'}
                    />
                  </motion.div>
                </AnimatePresence>
              )}
            </motion.div>
          ))
        ) : (
          <p>No hardware found in this category.</p>
        )}
      </div>

      {/* Overlay for small screens */}
      {selectedItem && (
        <div className="overlay">
          <div className="overlay-content">
            <span className="close-btn" onClick={closeOverlay}>
              &times;
            </span>
            <img
              src={`http://localhost:5173/src/assets/hardwareImage/${selectedItem.image}`}
              alt={selectedItem.name}
              className="overlay-image"
            />
            <h3>{selectedItem.name}</h3>
            <p>{selectedItem.description}</p>
            <ProductInquiryForm
              productName={selectedItem.name}
              picUrl={`../../src/assets/hardwareImage/${selectedItem.image}`}
              type={'Hardware'}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;