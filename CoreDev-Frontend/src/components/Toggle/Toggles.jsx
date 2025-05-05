import React, { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import './Toggle.css'

const Toggles = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <div className="flex items-center justify-center p-4">
      <DarkModeToggle
        onChange={setIsDarkMode}
        checked={isDarkMode}
        size={50}
      />
    </div>
  );
};

export default Toggles;
