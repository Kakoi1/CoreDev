import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './NoticeBanner.css';

const NoticeBanner = () => {
  const [show, setShow] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setShow(true);
      setFadeOut(false);
    } else {
      setShow(false);
    }
  }, [location]);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShow(false);
    }, 400); // match the fade-out duration
  };

  if (!show) return null;

  return (
    <div className={`cookie-banner-custom ${fadeOut ? "fade-out" : "fade-in"}`}>
      <p>
        This website uses cookies to provide you with great user experience.
        By accessing our website, you agree to use cookies.
        Learn more about our{" "}
        <a href="/Privacy-policy" target="_blank" rel="noopener noreferrer">
          privacy policy
        </a>.
        <button className="close-btn" onClick={handleClose}>✖</button>
      </p>
    </div>
  );
};

export default NoticeBanner;
