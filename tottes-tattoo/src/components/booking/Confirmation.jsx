import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Confirmation() {
  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('lastBooking');
    if (stored) setBooking(JSON.parse(stored));
  }, []);

  return (
    <div className="container">
      <h2 style={{ marginBottom: '1rem' }}>Booking Confirmed</h2>
      <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#aaa' }}>
        Your appointment has been transmitted to Tottes Tattoo Command.
      </p>

      {booking && (
        <div
          style={{
            background: 'rgba(20, 20, 40, 0.7)',
            padding: '2rem',
            borderRadius: '15px',
            marginTop: '2rem',
            boxShadow: '0 0 15px #72ffb488',
          }}>
          <p>
            <strong>Name:</strong> {booking.firstName}
          </p>
          <p>
            <strong>Email:</strong> {booking.email}
          </p>
          <p>
            <strong>Date:</strong> {booking.date}
          </p>
          <p>
            <strong>Time:</strong> {booking.time}
          </p>
          <p>
            <strong>Duration:</strong> {booking.duration} minutes
          </p>
          <p>
            <strong>Type:</strong> {booking.type}
          </p>
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <Link to="/">
          <button>Return to Home</button>
        </Link>
      </div>
    </div>
  );
}
