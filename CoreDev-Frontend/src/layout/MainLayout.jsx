import { useEffect, useState } from "react";
import "./MainLayout.css";
import { Outlet, useLocation } from "react-router-dom"; // Detect route changes
import Navigation from "../component/Navigation/Navigation";
import { motion, useScroll } from "framer-motion";
import Footer from "../component/Footer/Footer";
import { FaArrowAltCircleUp } from "react-icons/fa";
import TopBar from "../component/Topbar/topbar";
import { Loading } from "../component/ui";

const MainLayout = () => {
    const { scrollYProgress } = useScroll();
    const [yAxis, setYAxis] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isSplit, setIsSplit] = useState(false);
    const location = useLocation(); // Detect page change

    useEffect(() => {
        // Trigger loader on route change
        setIsLoading(true);
        setIsSplit(false);
        const timer = setTimeout(() => {
            setIsLoading(false);
            backToTop(); // Hide loader
            setTimeout(() => {
                setIsSplit(true); // Start split animation
            }, 500);
        }, 500); // loader duration

        return () => clearTimeout(timer);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setYAxis(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const backToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div>
            {isLoading && (
                <Loading isLoading={isLoading} isSplit={isSplit}/>
            )}

            {!isLoading && !isSplit && (
                <div className="split-screen">
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: "-100%" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="split-section section-left"
                    ></motion.div>

                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: "100%" }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className="split-section section-right"
                    ></motion.div>
                </div>
            )}

            {/* Main Content */}
            <main className="main-container" >
                <motion.div
                    className="progress-bar"
                    style={{ scaleX: scrollYProgress }}
                ></motion.div>
                <TopBar />
                <Navigation />
                <section className="main-section">
                    <div className="main-content">
                        <Outlet />
                    </div>
                </section>
                <Footer />
                {yAxis > 150 && (
                    <FaArrowAltCircleUp
                        className="backTop"
                        onClick={backToTop}
                    />
                )}
            </main>
        </div>
    );
};

export default MainLayout;
