import { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Clients.css";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { motion } from "framer-motion";
import { Badge } from "../../component/ui";
import { ComponentLoading } from "../../component/ui";

const API_URL = import.meta.env.VITE_APP_URL + "api/clients/"; // Laravel API
const MAX_RETRIES = 3; // Maximum retry attempts
const RETRY_DELAY = 3000; // 3 seconds delay before retry

const categories = [
    "All",
    "Government and Employee",
    "Police and Military-Related",
    "Community and Farmers",
    "Market Vendors and Small Business",
    "Corporate and Employee",
    "Religious and Parish-Based",
    "University, School-Based",
    "General Multipurpose",
    "Corporations and Non-Cooperative",
];

function Clients() {
    const [clients, setClients] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All"); // Default: show all categories
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const containerRef = useRef(null);

    const fetchClients = async (attempt = 1) => {
        setloading(true);
        setError(null);

        try {
            const response = await axios.get(API_URL + selectedCategory, {
                params: {
                    page: currentPage, // Pass currentPage to the API
                    per_page: 12,
                },
            });
            setClients(response.data.data); // Use paginated client data
            setTotalPages(response.data.last_page); // Set total pages from the API response
            setloading(false);
        } catch (err) {
            console.error(`Error fetching clients (Attempt ${attempt}):`, err);

            if (attempt < MAX_RETRIES) {
                setTimeout(() => {
                    setRetryCount(attempt); // Trigger re-fetch with increased attempt count
                }, RETRY_DELAY);
            } else {
                setError("Failed to fetch clients. Please try again later.");
                setloading(false);
            }
        }
    };
    console.log(clients);

    useEffect(() => {
        const attempt = retryCount + 1;
        fetchClients(attempt);
    }, [retryCount, selectedCategory, currentPage]); // Fetch data when retryCount, selectedCategory, or currentPage changes

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const renderPagination = () => {
        let pages = [];
        const maxPagesToShow = 1;
        const totalPagesToShow = maxPagesToShow * 2 + 1;

        if (totalPages <= totalPagesToShow) {
            pages = [...Array(totalPages)].map((_, index) => index + 1);
        } else {
            pages = [1];

            let start = Math.max(currentPage - maxPagesToShow, 2);
            let end = Math.min(currentPage + maxPagesToShow, totalPages - 1);

            if (start > 2) pages.push("...");
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
            if (end < totalPages - 1) pages.push("...");

            pages.push(totalPages);
        }

        return (
            <div className="pagination" onClick={backToTop}>
                <button
                    type="button"
                    className="left-arrow"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <MdOutlineKeyboardArrowLeft className="arrow-icon" />
                </button>

                {pages.map((page, index) => (
                    <button
                        type="button"
                        key={index}
                        onClick={() =>
                            typeof page === "number" && handlePageChange(page)
                        }
                        className={currentPage === page ? "active" : ""}
                        disabled={page === "..."}
                    >
                        {page}
                    </button>
                ))}

                <button
                    type="button"
                    className="right-arrow"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    <MdOutlineKeyboardArrowRight className="arrow-icon" />
                </button>
            </div>
        );
    };

    // Filter clients based on the selected category
    const filteredClients =
        selectedCategory === "All"
            ? clients
            : clients.filter((client) => client.category === selectedCategory);

    return (
        <div className="ClientCont">
            <div className="client-header">
                <h2>
                    Our <span>Clients</span>
                </h2>
                <p>
                    We partner with a diverse range of organizations to provide
                    tailored solutions that meet their unique needs.
                </p>
            </div>

            {/* Category Filter Buttons */}
            <div className="category-buttons">
                <div className="buttonCat">
                    {categories.map((category) => (
                        <motion.button
                            type="button"
                            key={category}
                            onClick={() => {
                                setSelectedCategory(category);
                                setCurrentPage(1);
                            }}
                            className={
                                selectedCategory === category ? "active" : ""
                            }
                        >
                            {category}
                        </motion.button>
                    ))}
                </div>
                <div className="selectCat">
                    <label htmlFor="category-select">Categories:</label>
                    <select
                        name="category"
                        id="category-select"
                        className="category-select"
                        value={selectedCategory}
                        onChange={(e) => {
                            setSelectedCategory(e.target.value);
                            setCurrentPage(1);
                        }}
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {error && (
                <div className="errorCont">
                    <p style={{ color: "red", textAlign: "center" }}>{error}</p>
                    <button
                        className="retryBut"
                        onClick={() => setRetryCount(0)}
                    >
                        Retry
                    </button>
                </div>
            )}

            {!error && (
                <>
                    <div ref={containerRef} className="clientWrapper">
                        {loading && (
                            <ComponentLoading
                                isLoading={loading}
                                message="Loading Clients..."
                                ref={containerRef}
                            />
                        )}

                        {filteredClients.map((client, index) => (
                            <motion.div
                                whileTap={{ scale: 0.9 }}
                                // initial={{ opacity: 0, scale: 1 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 10,
                                    duration: 0.3,
                                    delay: index * 0.07,
                                }}
                                key={client.id}
                                style={{ textAlign: "center" }}
                                className="clientItem"
                            >
                                <motion.img
                                    src={`src/assets/clients/${client.image}`}
                                    alt={client.name}
                                />
                                <h4>{client.name}</h4>
                                <Badge color={"default"}>
                                    {client.category}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>
                </>
            )}
            <br />
            <br />
            <br />
            {!error && renderPagination()}
            <br />
            <br />
        </div>
    );
}

export default Clients;
