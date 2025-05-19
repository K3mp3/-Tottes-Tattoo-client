import React, { useState, useEffect } from 'react';
import { API_URL } from '../../config/config';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(`${API_URL}/bookings`);
        if (!response.ok) {
          throw new Error('Kunde inte hämta bokningar');
        }
        const result = await response.json();
        setBookings(result.data || []);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBookings();
  }, []);

  return (
    <section>
      <h1>Bokningar</h1>

      <ul>
        {bookings.map((booking) => (
          <li key={booking._id}>
            <b>
              {booking.firstName} {booking.lastName}
            </b>
            <br />
            Telefon: {booking.phone}
            <br />
            E-post: {booking.email}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default BookingList;
