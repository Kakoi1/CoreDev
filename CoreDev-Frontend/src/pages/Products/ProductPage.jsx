import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Software from "./Software";
import { FiServer, FiPackage } from "react-icons/fi";
import Hardware from "./Hardware";
import "./ProductPage.css";

function ProductPage() {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState("software");

    // Set default tab based on the URL path
    useEffect(() => {
        const path = location.pathname;
        if (path === "/Products/Hardware") {
            setActiveTab("hardware");
        } else if (path === "/Products/Software") {
            setActiveTab("software");
        } else {
            setActiveTab("software");
        }
    }, [location.pathname, navigate]);

    // Handle tab change and update the URL
    const handleTabChange = (tab) => {
         setActiveTab(tab);
         const capitalizedTab = tab.charAt(0).toUpperCase() + tab.slice(1);
        navigate(`/Products/${capitalizedTab}`);
    };
   
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
                    onClick={() => handleTabChange("software")}
                >
                    <FiPackage /> Software
                </button>
                <button
                    className={activeTab === "hardware" ? "active" : ""}
                    onClick={() => handleTabChange("hardware")}
                >
                    <FiServer /> Hardware
                </button>
            </div>

            <div className="tab-content">
                <div
                    className={`tab-pane ${
                        activeTab === "software" ? "active" : ""
                    }`}
                >
                    {activeTab === "software" && <Software />}
                </div>
                <div
                    className={`tab-pane ${
                        activeTab === "hardware" ? "active" : ""
                    }`}
                >
                    {activeTab === "hardware" && <Hardware />}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;