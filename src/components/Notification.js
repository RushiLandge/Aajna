// src/components/Notification.js
import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import { FaPen, FaTrash } from 'react-icons/fa';
import CustomDataTable from './table/CustomDataTable'; // Import the custom data table
import '../styles/Notification.css';

const Notification = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: 'Status online', allDevices: 'Yes', alarms: '', channels: 'Web' },
    { id: 2, type: 'Ignition on', allDevices: 'Yes', alarms: '', channels: 'Web' },
    { id: 3, type: 'Alarm', allDevices: 'Yes', alarms: 'SOS', channels: 'Web' },
    { id: 4, type: 'Speed limit exceeded', allDevices: 'Yes', alarms: '', channels: 'Web' },
    { id: 5, type: 'Device inactive', allDevices: 'No', alarms: '', channels: 'Web, Mobile' },
  ]);

  const deleteNotification = (id) => {
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);
  };

  const columns = [
    { name: '#', selector: row => row.id, sortable: true },
    { name: 'Type', selector: row => row.type, sortable: true },
    { name: 'All Devices', selector: row => row.allDevices, sortable: true },
    { name: 'Alarms', selector: row => row.alarms, sortable: true },
    { name: 'Channels', selector: row => row.channels, sortable: true },
    {
      name: 'Actions',
      cell: (row) => (
        <div>
          <button className="edit-btn">
            <FaPen />
          </button>
          <button className="delete-btn" onClick={() => deleteNotification(row.id)}>
            <FaTrash />
          </button>
        </div>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  return (
    <div className="notification-table">
      <h2>Notifications</h2>
      <CSVLink data={notifications} filename={"notifications.csv"} className="btn btn-primary" target="_blank">
        Download CSV
      </CSVLink>
      <CustomDataTable columns={columns} data={notifications} />
    </div>
  );
};

export default Notification;