import React from 'react';
import { useLocation } from 'react-router-dom';
import './ConfirmationPage.css';

function ConfirmationPage() {
  const location = useLocation();
  const { name, phone, email, date, time } = location.state || {};

  return (
    <div className="confirmation-page">
      <h2>Appointment Confirmed</h2>
      <p>Your meeting is confirmed. Here are the details:</p>
      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Phone:</strong> {phone}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Date:</strong> {date}</li>
        <li><strong>Time:</strong> {time}</li>
      </ul>
    </div>
  );
}

export default ConfirmationPage;
