import React, { useState, useEffect } from 'react';
import '../../styles/AppBar.css';
import { FaUserCircle, FaBell, FaMoon, FaSun } from 'react-icons/fa'; // Import icons

const AppBar = () => {
  const [darkTheme, setDarkTheme] = useState(false); // State to manage theme

  // Check localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkTheme') === 'true';
    setDarkTheme(savedTheme);
    document.body.classList.toggle('dark-theme', savedTheme);
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = !darkTheme;
    setDarkTheme(newTheme);
    document.body.classList.toggle('dark-theme', newTheme);
    localStorage.setItem('darkTheme', newTheme); // Save preference to localStorage
  };

  return (
    <div className={`app-bar ${darkTheme ? 'dark' : ''}`}>
      <h2>Reports App</h2>
      <div className="app-bar-right">
        <FaBell className="notification-icon" /> {/* Notification icon */}
        
       
      </div>
    </div>
  );
};

export default AppBar;