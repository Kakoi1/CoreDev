import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Clients.css";
import { easeInOut, motion } from 'framer-motion';
const API_URL = "http://localhost:8000/api/clients"; // Laravel API
const MAX_RETRIES = 3; // Maximum retry attempts
const RETRY_DELAY = 3000; // 3 seconds delay before retry
const backToTop = () =>{
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  })}
function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [retryCount, setRetryCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchClients = async (attempt = 1) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`${API_URL}?page=${currentPage}`);
      setClients(response.data.data);
      setTotalPages(response.data.last_page);
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
  }, [retryCount, currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPagination = () => {
    let pages = [];
    const maxPagesToShow = 1; // Number of pages to show on each side of current page
    const totalPagesToShow = maxPagesToShow * 1 + 1; // Full range

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
        {/* <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          ⬅ Prev
        </button> */}

        {pages.map((page, index) => (
          <button        
            key={index}
            onClick={() => typeof page === "number" && handlePageChange(page)}
            className={currentPage === page ? "active" : ""}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}

        {/* <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next ➡
        </button> */}
      </div>
    );
  };

  return (
    <div className="ClientCont">
      <h2>Clients</h2>

      {loading && (
        <div className="loader-container">
          <div class="loadingio-spinner-gear-nq4q5u6dq7r"><div class="ldio-x2uulkbinbj">
            <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
            </div></div>
        </div>
      )}

      {error && (
        <div className="errorCont">
          <p style={{ color: "red", textAlign: 'center'}}>{error}</p>
          <button className="retryBut" onClick={() => setRetryCount(0)}>Retry</button>
        </div>
      )}

      {!loading && !error && (
        <div className="clientWrapper">
          {clients.map((client, index) => (
            <motion.div
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 0.7 }}
            transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 10, 
                duration: 0.3, 
                delay: index * 0.07
            }}
             key={client.id} style={{ textAlign: "center" }} className="clientItem">
              <motion.img
                src={`src/assets/clients/${client.image}`} // Fixed Path: Use Public Folder
                alt={client.name}
                initial={{ scale: 1 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
              />
                <div className="overlay">
                  <h4>{client.name}</h4>
                </div>
            </motion.div>
          ))}
        </div>
      )}

      {!loading && !error && renderPagination()}
      <br /><br />
    </div>
  );
}

export default Clients;
