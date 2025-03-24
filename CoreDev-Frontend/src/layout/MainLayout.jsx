import React, { useEffect, useState } from "react";
import "./MainLayout.css";
import { Outlet, useLocation } from "react-router-dom"; // Detect route changes
import Navigation from "../component/Navigation";
import { motion, useScroll } from "framer-motion";
import Footer from "../component/Footer/Footer";
import { FaArrowAltCircleUp } from "react-icons/fa";  
import TopBar from "../component/Topbar/topbar";

const MainLayout = () => {
  const { scrollYProgress } = useScroll();
  const [yAxis, setYAxis] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSplit, setIsSplit] = useState(false);
  const location = useLocation(); // Detect page change

  

  useEffect(() => {
    // Reset loader and animation on each route change
    setIsLoading(true);
    setIsSplit(false);

    const timer = setTimeout(() => {
      setIsLoading(false); 
      backToTop()// Hide loader
      setTimeout(() => {
        setIsSplit(true); // Start split animation
      }, 500);
    }, 1500); // Loader stays for 3 seconds

    return () => clearTimeout(timer);
  }, [location.pathname]); // Run effect on every page visit

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
        <div id="loader-wrapper">

        <div className="loadingio-spinner-gear-nq4q5u6dq7r"><div className="ldio-x2uulkbinbj">
          <div><div></div><div></div><div></div><div></div><div></div><div></div></div>
          </div></div>

      </div>
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
      <div className="main-container" onLoad={backToTop}>
        <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }}></motion.div>
        <TopBar/>
        <Navigation />
        <Outlet />
        <Footer />
        {yAxis > 150 && <FaArrowAltCircleUp className="backTop" onClick={backToTop} />}
      </div>
    </div>
  );
};

export default MainLayout;
