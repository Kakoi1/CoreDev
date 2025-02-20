import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Product.css"; // Import the CSS file

function Product() {
  const { category } = useParams();
  const API_URL = `http://localhost:8000/api/hardware/${category}`;

  const [hardwares, setHardware] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null); // For overlay

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setHardware(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setError("Failed to load data. Please try again.");
        setLoading(false);
      });
  }, [category]);
  const handleOverlayClick = (event) => {
    setSelectedItem(null);
  };
  const handleContentClick = (event) => {
    event.stopPropagation(); // Stops the click from reaching the parent (overlay)
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="product-container">
      <h2>Hardware in {category} Category</h2>
      <div className="grid-container">
        {hardwares.length > 0 ? (
          hardwares.map((item, index) => (
            <div key={index} className="product-card" onClick={() => setSelectedItem(item)}>
              <img
                src={`http://localhost:5173/src/assets/hardwareImage/${item.image}`}
                alt={item.name}
                className="product-image"
              />
              <h3 style={{textWrap: 'word-break'}} className="product-name">{item.name}</h3>
            </div>
          ))
        ) : (
          <p>No hardware found in this category.</p>
        )}
      </div>

      {/* Overlay when an item is clicked */}
      {selectedItem && (
        <div className="overlay" onClick={handleOverlayClick}>
        <div className="overlay-content" onClick={handleContentClick}>
          <span className="close-btn" onClick={() => setSelectedItem(null)}>&times;</span>
          <img
            src={`http://localhost:5173/src/assets/hardwareImage/${selectedItem.image}`}
            alt={selectedItem.name}
            className="overlay-image"
          />
          <h3>{selectedItem.name}</h3>
          <p>{selectedItem.description}</p>
            <br />
            <a className="emailUs" href="mailto:info@coredev.ph">Email Us</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Product;
