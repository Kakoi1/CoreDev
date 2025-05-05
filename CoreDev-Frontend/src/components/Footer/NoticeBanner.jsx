import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './NoticeBanner.css';

const ToastNotification = () => {
  const [show, setShow] = useState(false);
  const [isClosed, setIsClosed] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isClosed) {
      if (location.pathname === "/") {
        setShow(true);
        setFadeOut(false);
      } else {
        setShow(false);
      }
    }
  }, [location]);

  const handleClose = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShow(false);
      setIsClosed(false);
    }, 400); // match the fade-out duration
  };

  if (!show) return null;

  return (
    <div className={`toast-notification ${fadeOut ? "fade-out" : "fade-in"}`}>
      <div className="toast-content">
        <p>
          This website uses cookies to provide you with great user experience.
          By accessing our website, you agree to use cookies.
          Learn more about our{" "}
          <a href="/Privacy-policy" target="_blank" rel="noopener noreferrer">
            privacy policy
          </a>.
        </p>
        <button className="toast-close-btn" onClick={handleClose}>got it</button>
      </div>
    </div>
  );
};

export default ToastNotification;