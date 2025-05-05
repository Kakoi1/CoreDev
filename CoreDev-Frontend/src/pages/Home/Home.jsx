import "./Home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeroComponent from "./HeroComponent";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";
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
                    setRetryCount(attempt); // Trigger re-fetch with increased attempt count
                }, RETRY_DELAY);
            } else {
                setError("Failed to fetch clients. Please try again later.");
                setLoading(false);
            }
        }
    };

    useEffect(() => {
        fetchLogo(retryCount + 1);
    }, [retryCount]);

    return (
        <div className="home-container">
            <HeroComponent />

            <div className="sido">
                <div className="join-us-wrapper">
                    <div className="wrapper-bg"></div>
                    <div className="left">
                        <motion.h2
                            className="header"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: easeInOut,
                                delay: 0.2,
                            }}
                        >
                            Be Part of Our Growing Team
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: easeInOut,
                                delay: 0.4,
                            }}
                        >
                            We believe that our people are our greatest asset.
                            At coreDev, we foster a culture of collaboration,
                            innovation, and mutual respect. We&apos;re always
                            looking for talented individuals who share our
                            values and are excited to contribute to our mission.
                        </motion.p>
                    </div>
                    <div className="right">
                        <Button
                            text="Join Now"
                            onClick={() => navigate("/careers")}
                            variant="full"
                            size="md"
                        />

                        <Button
                            text="Learn More"
                            onClick={() => navigate("/about/who-we-are")}
                            variant="outline"
                            size="md"
                        />
                    </div>
                </div>
            </div>
            <h1 className="ClientLogo" style={{ textAlign: "center" }}>
                <span>Our</span> Clients
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
            <Partners />
            <div className="motoCont">
                <div className="Textcontent">
                    <h1>INNOVATING YOUR FUTURE</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;
