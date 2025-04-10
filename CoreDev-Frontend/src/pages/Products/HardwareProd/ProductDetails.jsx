import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import "./ProductDetails.css";

function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedItem } = location.state || {}; 

  if (!selectedItem) {
    return (
      <div className="product-details-container">
        <p>No product selected.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="product-details-container">
        <button onClick={() => navigate(-1)} className="back-btn">
        ← Back to Hardware Products
      </button>
      <h2>{selectedItem.name}</h2>
      <img
        src={`assets/hardwareImage/${selectedItem.image}`}
        alt={selectedItem.name}
        className="product-details-image"
      />
      <p>{selectedItem.description }</p>
      <a className="emailUs" style={{ textDecoration: 'none'}} href="mailto:info@coredev.ph">Email Us</a>
      <br />
      
    </div>
  );
}

export default ProductDetails;
