import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Software from "./Software";
import Hardware from "./Hardware";
import './ProductPage.css'; // optional for tab styling


function ProductPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("software");
    
  // Set default tab if passed from navigation
  useEffect(() => {
    if (location.pathname === "/Products/Hardware") {
      setActiveTab("hardware");
    }else if(location.pathname === "/Products/Software"){
        setActiveTab("software");
    }
  }, [location.state]);
  

  return (
    <div className="product-page">
        <h2><span>Our</span> Products</h2>
      <div className="tab-buttons">
        <button
          className={activeTab === "software" ? "active" : ""}
          onClick={() => setActiveTab("software")}
        >
          Software
        </button>
        <button
          className={activeTab === "hardware" ? "active" : ""}
          onClick={() => setActiveTab("hardware")}
        >
          Hardware
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "software" && <Software />}
        {activeTab === "hardware" && <Hardware />}
      </div>
      {/* <MessengerButton/> */}
  
    </div>
  );
}

export default ProductPage;
