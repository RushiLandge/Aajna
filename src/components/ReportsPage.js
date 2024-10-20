// src/components/ReportsPage.js
import React, { useState } from 'react';
import CustomDataTable from './table/CustomDataTable'; // Import your custom DataTable
import '../styles/ReportsPage.css'; // Import custom CSS for additional styles

const ReportsPage = () => {
  const [devices] = useState([
    {
      id: 1,
      name: 'Muhammed Asim',
      regNumber: 'DP70 FDM',
      identifier: '352016700229800',
      lastUpdate: '2024-09-24 16:02:02',
      speed: 54,
      batteryLevel: '-',
      odometer: 19445.78,
      fuel: '-',
      address: '22.586810, 88.275390',
      expiration: '2024-09-26',
    },
    {
      id: 2,
      name: 'A/N Courier Ltd',
      regNumber: 'FL19 JVV',
      identifier: '352016708033824',
      lastUpdate: '2024-08-30 11:54:20',
      speed: 61,
      batteryLevel: '-',
      odometer: 153.22,
      fuel: '-',
      address: '13.928521, 75.570839',
      expiration: '2024-09-24',
    },
    {
      id: 3,
      name: 'A/N Courier Ltd',
      regNumber: 'DT70 YSS',
      identifier: '352016708312459',
      lastUpdate: '2024-08-30 11:54:25',
      speed: 56,
      batteryLevel: '-',
      odometer: 157.03,
      fuel: '-',
      address: '12.301511, 76.639327',
      expiration: '2024-09-06',
    },
    {
      id: 4,
      name: 'A/N Courier Ltd',
      regNumber: 'NL20 UMF',
      identifier: '352016708310933',
      lastUpdate: '2024-10-10 14:23:19',
      speed: 39,
      batteryLevel: '-',
      odometer: 1606.53,
      fuel: '-',
      address: '12.301794, 76.639378',
      expiration: '-',
    },
    // Add more device entries as needed
  ]);

  const columns = [
    { name: "#", selector: row => row.id, sortable: true },
    { name: "Device Name", selector: row => row.name, sortable: true },
    { name: "Registration Number", selector: row => row.regNumber, sortable: true },
    { name: "Identifier", selector: row => row.identifier, sortable: true },
    { name: "Last Update", selector: row => row.lastUpdate, sortable: true },
    { name: "Speed (km/h)", selector: row => row.speed, sortable: true },
    { name: "Battery Level", selector: row => row.batteryLevel, sortable: true },
    { name: "Odometer (km)", selector: row => row.odometer, sortable: true },
    { name: "Fuel %", selector: row => row.fuel, sortable: true },
    { name: "Address", selector: row => row.address, sortable: true },
    { name: "Expiration", selector: row => row.expiration, sortable: true },
  ];

  const customStyles = {
    rows: {
      style: {
        backgroundColor: 'skyblue',
        textDecoration: 'underline',
      },
    },
  };

  return (
    <div className="reports-page">
      <div className="report-menu">
        <h2>Devices</h2>
        {/* Add your menu components here if needed */}
      </div>

      <div className="devices-header">
        <div className="device-filter">
          <input type="text" placeholder="Search..." />
          <span>+734 more</span>
        </div>
      </div>

      <CustomDataTable
        title={"Device Reports"}
        columns={columns}
        data={devices}
        customStyles={customStyles}
      />
    </div>
  );
};

export default ReportsPage;