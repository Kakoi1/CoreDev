import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { FaGear } from "react-icons/fa6";
import "./loading.css";

export const Loading = ({ isLoading, isSplit }) => {
    if (isLoading) {
        return (
            <div className="loader-container">
                <FaGear className="spinner" />
            </div>
        );
    }

    if (!isLoading && !isSplit) {
        return (
            <div className="split-screen">
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: "-100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="split-section section-left"
                />
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: "100%" }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="split-section section-right"
                />
            </div>
        );
    }

    return null;
};

// Prop types validation
Loading.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isSplit: PropTypes.bool.isRequired,
};
