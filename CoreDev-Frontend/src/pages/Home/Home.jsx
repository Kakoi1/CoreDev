import "./Home.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import HeroComponent from "./HeroComponent";
import Carousel from "./Carousel";
import { useState, useEffect } from "react";
import Partners from "../Partners/Partners";
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
                <div className="client-wrapper">
                    <div className="wrapper-bg"></div>
                    <h1>
                        <span>Our</span> Clients
                    </h1>
                    <p>We&apos;re proud to work with these amazing organizations who trust us with their business needs.</p>
                    <div className="logo-wrapper">
                        {loading && <Loading />}

                        {error && (
                            <div className="errorCont">
                                <p
                                    style={{
                                        color: "red",
                                        textAlign: "center",
                                    }}
                                >
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
