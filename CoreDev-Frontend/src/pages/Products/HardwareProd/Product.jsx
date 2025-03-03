import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Product.css"; // Import the CSS file

function Product() {
  const { category } = useParams();
  const navigate = useNavigate();
  const API_URL = `http://localhost:8000/api/hardware/${category}`;

  const [hardwares, setHardware] = useState([]);
  const [nameCategory, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retry, setRetry] = useState(0); // Retry counter

  // Fetch data with retry logic
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
            <div
              key={index}
              className="product-card"
              onClick={() =>
                navigate("/Products/Hardware/details", { state: { selectedItem: item } })
              } 
            >
              <img
                src={`http://localhost:5173/src/assets/hardwareImage/${item.image}`}
                alt={item.name}
                className="product-image"
              />
              <h3 className="product-name">{item.name}</h3>

              <button 
                className="see-details-btn" 
                onClick={() => navigate("/Products/Hardware/details", { state: { selectedItem: item } })}
              >
                See Details
              </button>
            </div>
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
