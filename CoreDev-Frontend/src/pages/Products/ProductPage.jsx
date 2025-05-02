import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Software from "./Software";
import { FiServer, FiPackage } from "react-icons/fi";
import Hardware from "./Hardware";
import "./ProductPage.css";

function ProductPage() {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState("software");

    // Set default tab if passed from navigation
    useEffect(() => {
        if (location.pathname === "/Products/Hardware") {
            setActiveTab("hardware");
        } else if (location.pathname === "/Products/Software") {
            setActiveTab("software");
        }
    }, [location.state]);

    return (
        <div className="product-page">
            <div className="product-page-header">
                <h3>
                    <span>Our</span> Products
                </h3>
                <p>
                    Discover our comprehensive range of technology solutions
                    designed to meet your business needs.
                </p>
            </div>
            <div className="tab-buttons">
                <button
                    className={activeTab === "software" ? "active" : ""}
                    onClick={() => setActiveTab("software")}
                >
                    <FiPackage/> Software
                </button>
                <button
                    className={activeTab === "hardware" ? "active" : ""}
                    onClick={() => setActiveTab("hardware")}
                >
                    <FiServer/> Hardware
                </button>
            </div>

            <div className="tab-content">
                {activeTab === "software" && <Software />}
                {activeTab === "hardware" && <Hardware />}
            </div>
        </div>
    );
}

export default ProductPage;
