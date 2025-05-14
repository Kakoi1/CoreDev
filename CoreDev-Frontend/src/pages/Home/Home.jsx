import "./Home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeroComponent from "./HeroComponent";
import Carousel from "./Carousel";
import { useState, useEffect, useRef } from "react";
import { easeInOut, motion } from "framer-motion";
import Partners from "../Partners/Partners";
import { Button } from "@components/ui";
import { Loading } from "@components/ui";

const MAX_RETRIES = 3;
const RETRY_DELAY = 3000;

const Home = () => {
    const navigate = useNavigate();
    const [logo, setLogo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [retryCount, setRetryCount] = useState(0);
    const [error, setError] = useState(null);
    const [isWrapperCentered, setIsWrapperCentered] = useState(false); // New state for centered status
    const wrapperRef = useRef(null); // Reference to wrapper-bg div

    const fetchLogo = async (attempt = 1) => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get(
                import.meta.env.VITE_APP_URL + "api/Client-Logo"
            );
            setLogo(response.data);
            setLoading(false);
        } catch (err) {
            console.error(`Error fetching clients (Attempt ${attempt}):`, err);

            if (attempt < MAX_RETRIES) {
                setTimeout(() => {
                    setRetryCount(attempt);
                }, RETRY_DELAY);
            } else {
                setError("Failed to fetch clients. Please try again later.");
                setLoading(false);
            }
        }
    };

    // Scroll handler to detect if wrapper-bg is centered
    const handleScroll = () => {
        if (wrapperRef.current) {
            const rect = wrapperRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const wrapperCenter = rect.top + rect.height / 1;
            const viewportCenter = viewportHeight / 1;

            // Check if wrapper-bg is within 20% of viewport center
            const isCentered =
                Math.abs(wrapperCenter - viewportCenter) < viewportHeight * 0.2;

            setIsWrapperCentered(isCentered);
        }
    };

    useEffect(() => {
        fetchLogo(retryCount + 1);
    }, [retryCount]);

    // Add scroll and resize event listeners
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);
        handleScroll(); // Run on mount to set initial state

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    return (
        <div className="home-container">
            <HeroComponent />

            <div className="sido">
                <div className="join-us">
                    <motion.div
                        className={`wrapper-bg ${
                            isWrapperCentered ? "centered" : ""
                        }`}
                        ref={wrapperRef}
                        animate={{
                            backgroundColor: isWrapperCentered ? "#ffffff" : "var(--black)",
                        }}
                        transition={{duration: 0.5, ease: "easeInOut"}}
                    ></motion.div>
                    <h1 className="ClientLogo" style={{ textAlign: "center" }}>
                        <span className={`spaner ${
                            isWrapperCentered ? "centered" : ""
                        }`}>Our</span> Clients
                    </h1>
                    <div className="logo-wrapper">
                        {loading && <Loading />}

                        {error && (
                            <div className="errorCont">
                                <p style={{ color: "red", textAlign: "center" }}>
                                    {error}
                                </p>
                                <button
                                    className="retryBut"
                                    onClick={() => setRetryCount(0)}
                                >
                                    Retry
                                </button>
                            </div>
                        )}
                        {!loading && !error && <Carousel images={logo} />}
                    </div>
                </div>
            </div>

            <Partners classer = { isWrapperCentered ? "centered" : "not"}/>
            <div className="motoCont">
                <div className="Textcontent">
                    <h1>INNOVATING YOUR FUTURE</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
