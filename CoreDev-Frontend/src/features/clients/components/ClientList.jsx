import { useEffect, useState, useRef } from "react";
import { getClientsByCategory } from "../services/clientService";
import {
    MdOutlineKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { motion } from "framer-motion";
import { Badge, ComponentLoading } from "../../../component/ui";
import { CategoryFilter } from "./CategoryFilter";
import { categories } from "../data/category";
import "../styles/Client.css"

const MAX_RETRIES = 3;
const RETRY_DELAY = 3000;

export default function ClientsList() {
    const [clients, setClients] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const containerRef = useRef(null);

    const fetchClients = async (attempt = 1) => {
        setloading(true);
        setError(null);
        try {
            const response = await getClientsByCategory(
                selectedCategory,
                currentPage
            );
            setClients(response.data);
            setTotalPages(response.last_page);
            setloading(false);
        } catch (err) {
            console.error(`Error fetching clients (Attempt ${attempt})`, err);
            if (attempt < MAX_RETRIES) {
                setTimeout(() => setRetryCount(attempt), RETRY_DELAY);
            } else {
                setError("Failed to fetch clients. Please try again later.");
                setloading(false);
            }
        }
    };

    useEffect(() => {
        const attempt = retryCount + 1;
        fetchClients(attempt);
    }, [retryCount, selectedCategory, currentPage]);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const filteredClients =
        selectedCategory === "All"
            ? clients
            : clients.filter((client) => client.category === selectedCategory);

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="ClientCont">
            <div className="client-header">
                <h2>
                    Our <span>Clients</span>
                </h2>
                <p>We partner with a diverse range of organizations...</p>
            </div>

            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
                onPageReset={() => setCurrentPage(1)}
            />

            {error ? (
                <div className="errorCont">
                    <p style={{ color: "red", textAlign: "center" }}>{error}</p>
                    <button
                        className="retryBut"
                        onClick={() => setRetryCount(0)}
                    >
                        Retry
                    </button>
                </div>
            ) : (
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
                                key={client.id}
                                className="clientItem"
                                whileTap={{ scale: 0.9 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 10,
                                    delay: index * 0.07,
                                }}
                            >
                                <motion.img
                                    src={`/src/assets/clients/${client.image}`}
                                    alt={client.name}
                                />
                                <h4>{client.name}</h4>
                                <Badge color={"default"}>
                                    {client.category}
                                </Badge>
                            </motion.div>
                        ))}
                    </div>

                    <div className="pagination" onClick={backToTop}>
                        <button
                            type="button"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            <MdOutlineKeyboardArrowLeft className="arrow-icon" />
                        </button>
                        <button
                            type="button"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            <MdOutlineKeyboardArrowRight className="arrow-icon" />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
