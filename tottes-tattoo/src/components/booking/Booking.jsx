import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { availableTimes } from '../../../config/config';

const Booking = ({ bookings }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    duration: 60,
    image: null,
  });
  const [step, setStep] = useState(1);
  const [selctedTime, setSelectedTime] = useState([]);

  const isWeekend = (dateString) => {
    const day = new Date(dateString).getDay();
    return day === 0 || day === 6;
  };

  const getAvailableTimes = (date) => {
    if (!date || !bookings) return [];

    const bookedTimes = bookings
      .filter((b) => b.date && b.date.slice(0, 10) === date)
      .map((b) => b.time);

    return availableTimes.filter((time) => !bookedTimes.includes(time));
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSelectTime = (t) => {
    setSelectedTime((prevSelected) => {
      if (prevSelected.includes(t)) {
        return prevSelected.filter((time) => time !== t);
      }
      if (prevSelected.length < 2) {
        return [...prevSelected, t];
      }
      return prevSelected;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isWeekend(formData.date)) {
      alert('Välj en vardag (mån–fre)');
      return;
    }

    // Spara lokalt & simulera bekräftelse
    localStorage.setItem('lastBooking', JSON.stringify(formData));
    alert(`En magisk bokningsrulle har skickats till ${formData.email}!`);
    navigate('/confirmation');
  };

  return (
    <div className="container">
      <h2>Boka din tatueringssession</h2>
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <input
              name="date"
              type="date"
              onChange={handleChange}
              value={formData.date}
              required
              min={new Date().toISOString().split('T')[0]}
            />

            <button
              type="button"
              onClick={() => {
                formData.date ? setStep(2) : alert('Välj ett datum först!');
              }}>
              Nästa
            </button>
          </>
        )}

        {step === 2 && (
          <>
            {getAvailableTimes(formData.date).map((t) => (
              <div key={t} className={'select-time-wrapper'}>
                <button
                  className={
                    t === selctedTime[0] || t === selctedTime[1]
                      ? 'select-time-btn selected'
                      : 'select-time-btn'
                  }
                  value={t}
                  type="button"
                  onClick={() => {
                    handleSelectTime(t);
                  }}>
                  {t}
                </button>
              </div>
            ))}

            <button
              name="time"
              value={selctedTime[0]}
              type="button"
              onClick={() => {
                setStep(3), handleChange;
              }}>
              Nästa
            </button>
          </>
        )}

        {step >= 3 && (
          <>
            <input
              name="firstName"
              type="text"
              placeholder="Förnamn"
              onChange={handleChange}
              value={formData.firstName}
              required
            />
            <input
              name="lastName"
              type="text"
              placeholder="Efternamn"
              onChange={handleChange}
              value={formData.lastName}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="E-postadress"
              onChange={handleChange}
              value={formData.email}
              required
            />
            <input
              name="phone"
              type="tel"
              placeholder="Telefonnummer"
              onChange={handleChange}
              value={formData.phone}
              required
            />

            <select
              name="duration"
              onChange={handleChange}
              value={formData.duration}>
              <option value="">Välj varaktighet</option>
              <option value="1">1 timme</option>
              <option value="2">2 timmar</option>
            </select>

            <input
              name="file"
              type="file"
              accept="image/*,application/pdf"
              onChange={handleChange}
            />

            <button type="submit">Skicka bokning</button>
          </>
        )}
      </form>
    </div>
  );
};

export default Booking;
