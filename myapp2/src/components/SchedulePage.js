import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SchedulePage.css';

function SchedulePage() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const isFormValid = name && phone && email && date && time;

  const handleSubmit = () => {
    if (isFormValid) {
      navigate('/confirmation', {
        state: { name, phone, email, date, time }
      });
    }
  };

  return (
    <div className="schedule-page">
      <h2>Appointment Details</h2>
      <p>Schedule a session with our digital marketing expert to boost your online presence.</p>
      <form>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Appointment Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>
        <label>
          Appointment Time:
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </label>
        <button type="button" onClick={handleSubmit} disabled={!isFormValid}>
          Confirm
        </button>
      </form>
    </div>
  );
}

export default SchedulePage;
