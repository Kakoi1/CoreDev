import { useEffect, useState } from "react";
import axios from "axios";
import "./Clients.css";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { motion } from "framer-motion";
import { Badge } from "../../component/ui";

const API_URL = import.meta.env.VITE_APP_URL + "api/clients/"; // Laravel API
const MAX_RETRIES = 3; // Maximum retry attempts
const RETRY_DELAY = 3000; // 3 seconds delay before retry

function Clients() {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All"); // Default: show all categories
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

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

    const fetchClients = async (attempt = 1) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(API_URL + selectedCategory, {
                params: {
                    page: currentPage, // Pass currentPage to the API
                },
            });
            setClients(response.data.data); // Use paginated client data
            setTotalPages(response.data.last_page); // Set total pages from the API response
            setLoading(false);
        } catch (err) {
            console.error(`Error fetching clients (Attempt ${attempt}):`, err);

            if (attempt < MAX_RETRIES) {
                setTimeout(() => {
                    setRetryCount(attempt); // Trigger re-fetch with increased attempt count
                }, RETRY_DELAY);
            } else {
                setError("Failed to fetch clients. Please try again later.");
                setLoading(false);
            }
        }
    };
    console.log(clients);

    useEffect(() => {
        fetchClients(retryCount + 1);
    }, [retryCount, selectedCategory, currentPage]); // Fetch data when retryCount, selectedCategory, or currentPage changes

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top when a page is clicked
    };

    const renderPagination = () => {
        let pages = [];
        const maxPagesToShow = 1; // Number of pages to show on each side of current page
        const totalPagesToShow = maxPagesToShow * 2 + 1; // Full range

        if (totalPages <= totalPagesToShow) {
            pages = [...Array(totalPages)].map((_, index) => index + 1);
        } else {
            pages = [1]; // Always include the first page

            let start = Math.max(currentPage - maxPagesToShow, 2);
            let end = Math.min(currentPage + maxPagesToShow, totalPages - 1);

            if (start > 2) pages.push("..."); // Add '...' if hidden pages exist before
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
            if (end < totalPages - 1) pages.push("..."); // Add '...' if hidden pages exist after

            pages.push(totalPages); // Always include last page
        }

        return (
            <div className="pagination" onClick={backToTop}>
                <button
                    className="left-arrow"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <MdOutlineKeyboardArrowLeft className="arrow-icon" />
                </button>

                {pages.map((page, index) => (
                    <button
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

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

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
                {categories.map((category) => (
                    <motion.button
                        // transition={{ duration: 0.1 }}
                        key={category}
                        onClick={() => {
                            setSelectedCategory(category);
                            setCurrentPage(1); // Reset to the first page when category changes
                        }}
                        className={
                            selectedCategory === category ? "active" : ""
                        }
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            {loading && (
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
            )}

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

            {!loading && !error && (
                <>
                    <div className="clientWrapper">
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
                                    src={`src/assets/clients/${client.image}`} // Fixed Path: Use Public Folder
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
            {!loading && !error && renderPagination()}
            <br />
            <br />
        </div>
    );
}

export default Clients;
