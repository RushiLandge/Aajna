// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppBar from './components/layout/AppBar';
import LeftNav from './components/layout/LeftNav';
import MainPage from './components/layout/MainPage';
import ReportsPage from './components/ReportsPage';
import Notification from './components/Notification';
import DevicesDetails from './components/DeviceDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar />
        <LeftNav />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/reports" element={<ReportsPage />} />
          <Route path="/settings" element={<Notification />} />
          <Route path="/devices-details" element={<DevicesDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;