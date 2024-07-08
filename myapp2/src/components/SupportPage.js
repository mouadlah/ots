import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SupportPage.css';

function SupportPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const isFormValid = name && email && phone && message;

  const handleSubmit = () => {
    if (isFormValid) {
      navigate('/ticket-confirmation', {
        state: { name, email, phone, message }
      });
    }
  };

  return (
    <div className="support-page">
      <h2>Get in Touch</h2>
      <p>Discover our digital solutions. Reach out to us for queries.</p>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Email Address:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Your Message:
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
        </label>
        <button type="button" onClick={handleSubmit} disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default SupportPage;
