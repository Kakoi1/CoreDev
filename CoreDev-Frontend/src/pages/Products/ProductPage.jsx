import { useState } from "react";
import { FiServer, FiPackage, FiCloud } from "react-icons/fi";
import { SoftwareList } from "@features/softwareProducts";
import { HardwareList } from "@features/hardwareProducts";
import { CloudSolutionList } from "@features/cloudSolution";
import "./ProductPage.css";

function ProductPage() {
    const [activeTab, setActiveTab] = useState("software");

    // Set default tab based on the URL path

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        // navigate(`/Products/${capitalizedTab}`);
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
                <button
                    className={activeTab === "cloud" ? "active" : ""}
                    onClick={() => handleTabChange("cloud")}
                >
                    <FiCloud /> Cloud Solutions
                </button>
            </div>

            <div className="tab-content">
                <div
                    className={`tab-pane ${
                        activeTab === "software" ? "active" : ""
                    }`}
                >
                    {activeTab === "software" && <SoftwareList />}
                </div>
                <div
                    className={`tab-pane ${
                        activeTab === "hardware" ? "active" : ""
                    }`}
                >
                    {activeTab === "hardware" && <HardwareList />}
                </div>
                <div
                    className={`tab-pane ${
                        activeTab === "cloud" ? "active" : ""
                    }`}
                >
                    {activeTab === "cloud" && <CloudSolutionList />}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
