import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'tattoo',
    date: '',
    time: '',
    duration: '1',
    file: null,
  });

  const isWeekend = (dateString) => {
    const day = new Date(dateString).getDay();
    return day === 0 || day === 6;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isWeekend(formData.date)) {
      alert('Please choose a weekday (Mon–Fri)');
      return;
    }

    // Save locally & simulate email
    localStorage.setItem('lastBooking', JSON.stringify(formData));
    alert(`A magical scroll has been sent to ${formData.email}!`);
    navigate('/confirmation');
  };

  return (
    <div className="container">
      <h2>Book Your Tattoo Session</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <select name="type" onChange={handleChange}>
          <option value="tattoo">Tattoo</option>
          <option value="consultation">Consultation</option>
        </select>
        <input
          name="date"
          type="date"
          onChange={handleChange}
          required
          min={new Date().toISOString().split('T')[0]}
        />
        <select name="time" onChange={handleChange} required>
          <option value="">Select a time</option>
          {[
            '09:00',
            '10:00',
            '11:00',
            '13:00',
            '14:00',
            '15:00',
            '16:00',
            '17:00',
          ].map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
        <select name="duration" onChange={handleChange}>
          <option value="1">1 hour</option>
          <option value="2">2 hours</option>
        </select>
        <input
          name="file"
          type="file"
          accept="image/*,application/pdf"
          onChange={handleChange}
        />
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default Booking;
