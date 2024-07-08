import React from 'react';
import { useLocation } from 'react-router-dom';
import './TicketConfirmationPage.css';

function TicketConfirmationPage() {
  const location = useLocation();
  const { name, email, phone, message } = location.state || {};

  return (
    <div className="confirmation-page">
      <h2>Ticket Submitted</h2>
      <p>Your support ticket has been submitted successfully. Here are the details:</p>
      <ul>
        <li><strong>Name:</strong> {name}</li>
        <li><strong>Email:</strong> {email}</li>
        <li><strong>Phone:</strong> {phone}</li>
        <li><strong>Message:</strong> {message}</li>
      </ul>
    </div>
  );
}

export default TicketConfirmationPage;
