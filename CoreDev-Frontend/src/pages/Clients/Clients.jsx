import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Clients.css";
import { motion } from "framer-motion";

const API_URL = "http://localhost:8000/api/clients"; // Laravel API
const MAX_RETRIES = 3; // Maximum retry attempts
const RETRY_DELAY = 3000; // 3 seconds delay before retry

function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Default: show all categories

  // Define the categories
  

  const categories = [
    "All",
    "Government and Employee",
    "Police and Military-Related",
    "Community and Farmers",
    "Market Vendors and Small Business",
    "Corporate and Employee",
    "Religious and Parish-Based",
    "University/School-Based",
    "General Multipurpose",
    "Corporations and Non-Cooperative",
  ];

  const fetchClients = async (attempt = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(API_URL);
      setClients(response.data.allclient); // Use allClient data directly
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

  useEffect(() => {
    fetchClients(retryCount + 1);
  }, [retryCount]);

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
      <h2>Clients</h2>

      {/* Category Filter Buttons */}
      <div className="category-buttons">
        {categories.map((category) => (
          <motion.button
            whileHover={{ scale: 1.05, y: -5 }} // Move 5px up on hover
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </motion.button>

        ))}
      </div>

      {loading && (
        <div className="loader-container">
          <div className="loadingio-spinner-gear-nq4q5u6dq7r">
            <div className="ldio-x2uulkbinbj">
              <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
        </div>
      )}

      {error && (
        <div className="errorCont">
          <p style={{ color: "red", textAlign: "center" }}>{error}</p>
          <button className="retryBut" onClick={() => setRetryCount(0)}>
            Retry
          </button>
        </div>
      )}

      {!loading && !error && (
        <motion.table className="client-table" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <thead>
            <tr>
            {/* <th>Logo</th>
              <th>Client Name</th>
              <th>Category</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredClients.map((client) => (
              <motion.tr
                key={client.id}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, amount: 0.5 }}
                variants={fadeInUpVariants}
              >
                <td>
                  <motion.img
                    src={`src/assets/clients/${client.image}`}
                    alt={client.name}
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 3 }}
                    transition={{ duration: 0.3 }}
                  />
                </td>
                <td>{client.name}</td>
                <td>{client.category}</td>
         
              </motion.tr>
            ))}
          </tbody>
        </motion.table>
      )}
    </div>
  );
}

export default Clients;