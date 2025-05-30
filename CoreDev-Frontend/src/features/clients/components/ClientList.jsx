import { useState, useRef } from "react";
import { getClientsByCategory } from "../services/fetchClient.service";
import { motion } from "framer-motion";
import { Badge, ComponentLoading } from "@components/ui";
import { CategoryFilter } from "./CategoryFilter";
import { categories } from "../data/category";
import "../styles/Client.css";
import { useQuery } from "@tanstack/react-query";

export const ClientsList = () => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const containerRef = useRef(null);

    const CLIENTS_KEY = "clients";

    const {
        data,
        isLoading,
        isError,
    } = useQuery({
        queryKey: [CLIENTS_KEY],
        queryFn: () => getClientsByCategory(selectedCategory),
    });
    
    isLoading && console.log("loading...");

    const clientsData = Array.isArray(data?.data) ? data.data : []
    
    
    const filteredClients =
    selectedCategory === "All"
    ? clientsData
    : clientsData.filter(
        (client) => client.category === selectedCategory
    );

    return (
        <div className="ClientCont">
            <div className="client-header">
                <h2>
                    Our <span>Clients</span>
                </h2>
                <p>We partner with a diverse range of organizations</p>
            </div>

            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                onSelect={setSelectedCategory}
            />

            {isError ? (
                <div className="errorCont">
                    <p style={{ color: "red", textAlign: "center" }}>
                        {isError}
                    </p>
                    <button className="retryBut">Retry</button>
                </div>
            ) : (
                <>
                    <div ref={containerRef} className="clientWrapper">
                        {isLoading && (
                            <ComponentLoading
                                isLoading={isLoading}
                                message="Loading Clients..."
                                ref={containerRef}
                            />
                        )}
                        {filteredClients &&
                            filteredClients.map((client, index) => (
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

                    {/* <div className="pagination" onClick={backToTop}>
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
                    </div> */}
                </>
            )}
        </div>
    );
};
