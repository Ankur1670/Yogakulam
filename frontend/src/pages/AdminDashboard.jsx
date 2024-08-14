// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from 'react';

const AdminDashboard = () => {
  const [classes, setClasses] = useState([]);
  const [schedules, setSchedules] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const responseClasses = await fetch('/api/classes', {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        const dataClasses = await responseClasses.json();
        setClasses(dataClasses);

        const responseSchedules = await fetch('/api/schedules', {
          headers: { 'Authorization': `Bearer ${token}` },
        });
        const dataSchedules = await responseSchedules.json();
        setSchedules(dataSchedules);
      } catch (err) {
        setError('Failed to fetch data.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {error && <p>{error}</p>}
      <h2>Classes</h2>
      <ul>
        {classes.map((classItem) => (
          <li key={classItem._id}>{classItem.name}</li>
        ))}
      </ul>
      <h2>Schedules</h2>
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule._id}>{schedule.day} - {schedule.time}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;
