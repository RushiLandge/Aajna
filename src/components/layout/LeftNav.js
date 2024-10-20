// src/components/LeftNav.js
import React from 'react';
import '../../styles/LeftNav.css';
import { Link } from 'react-router-dom';

const LeftNav = () => {
  return (
    <nav className="left-nav">
      <ul>
        <li>
          <Link to="/">🏠 Home </Link>
        </li>
        <li>
          <Link to="/reports">📊 Reports</Link>
        </li>
        <li>
          <Link to="/settings">⚙️ Settings</Link>
        </li>

        <li>
          <Link to="/devices-details">⚙️ Devices</Link>
        </li>
      </ul>
    </nav>
  );
};

export default LeftNav;