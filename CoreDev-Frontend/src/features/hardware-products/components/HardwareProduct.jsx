import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "../styles/HardwareProduct.css";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import ProductInquiryForm from "../../shared/inquiry-form/components/InquiryForm";
import { getHardwareProducts } from "../services/HardwareService";
import { ComponentLoading, Button } from "@components/ui";

const categoryNames = {
    desktop: {
        name: "Computer Desktop",
        description:
            "Discover our premium selection of desktop computers for work, gaming, and creative projects.",
    },
    laptop: {
        name: "Laptop Computer",
        description:
            "Explore our premium collection of laptop computers designed for productivity, gaming, and on-the-go creativity",
    },
    server: {
        name: "Physical Server",
        description:
            "Discover our high-performance physical servers built for reliability, scalability, and enterprise-grade workloads.",
    },
    router: {
        name: "Network Devices",
        description:
            "Explore our reliable range of network devices designed to deliver fast, secure, and seamless connectivity for homes and businesses.",
    },
    firewall: {
        name: "Firewall Devices",
        description:
            "Protect your network with our advanced firewall devices, engineered for robust security, threat prevention, and reliable performance.",
    },
    Cloud: {
        name: "Cloud Services",
       description:
            "Unlock the power of the cloud with our scalable, secure, and flexible cloud services tailored for businesses of all sizes.",
    },
    printer: {
        name: "Printers & Scanners",
        description:
            "Discover our efficient range of printers and scanners designed for high-quality output, fast performance, and seamless document management.",
    },
    cctv: {
        name: "CCTV Cameras",
        description:
            "Secure your property with our reliable CCTV cameras, offering crystal-clear surveillance, remote monitoring, and 24/7 protection.",
    },
    wifi: {
        name: "Wireless Internet",
        description:
            "Stay connected with our fast and reliable wireless internet solutions, designed for seamless streaming, browsing, and remote work anywhere.",
    },
    TAB: {
        name: "Time and Attendance & Biometrics",
        description:
            "Streamline your workforce management with our advanced time attendance and biometric systems, ensuring accurate tracking, security, and efficiency.",
    },
};

export default function HardwareProduct() {
    const { category } = useParams();
    const containerRef = useRef(null);

    const [hardwares, setHardware] = useState([]);
    const [nameCategory, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retry, setRetry] = useState(0); // Retry counter
    const [ShowFeature, setShowFeature] = useState({});

    const toggleDetails = (id) => {
        setShowFeature((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const fetchHardwareProduct = async () => {
        try {
            const response = await getHardwareProducts(category);
            setHardware(response.data);
            setLoading(false);
            setError(null);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("Failed to load data. Retrying...");
            setLoading(true);
            setTimeout(() => {
                setRetry((prev) => prev + 1);
            }, 3000);
        }
    };

    useEffect(() => {
        fetchHardwareProduct();
    }, [category, retry]);

    // Set name category dynamically
    useEffect(() => {
        setCategory(categoryNames[category] || "Unknown Category");
    }, [category]);
    
    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <div className="product-container">
            <h2>{nameCategory && nameCategory.name}</h2>
            <p>{nameCategory && nameCategory.description}</p>
            <div className="grid-container">
                <ComponentLoading
                    isLoading={loading}
                    message="hardware Products Loading ..."
                    ref={containerRef}
                />

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
                                src={`/src/assets/hardwareImage/${item.image}`}
                                alt={item.name}
                                className="product-image"
                            />
                            <h3 className="product-name">{item.name}</h3>

                            {ShowFeature[index] && (
                                <AnimatePresence>
                                    <motion.div
                                        className="product-description"
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <p>{item.description}</p>
                                    </motion.div>
                                </AnimatePresence>
                            )}
                            <div className="card-footer">
                                <Button
                                    text={
                                        ShowFeature[index]
                                            ? "Hide Details"
                                            : "Show Details"
                                    }
                                    icon={
                                        ShowFeature[index] ? (
                                            <IoIosArrowUp className="icon " />
                                        ) : (
                                            <IoIosArrowDown className="icon " />
                                        )
                                    }
                                    onClick={() => toggleDetails(index)}
                                    variant="full"
                                    size="sm"
                                />

                                <ProductInquiryForm
                                    productName={item.name}
                                    picUrl={`../../src/assets/hardwareImage/${item.image}`}
                                    type={"Hardware"}
                                />
                            </div>
                        </motion.div>
                    ))
                ) : (
                    <p>No hardware found in this category.</p>
                )}
            </div>
        </div>
    );
}
