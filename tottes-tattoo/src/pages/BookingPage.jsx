import React, { useState, useEffect } from 'react';
import { getBookings, createBooking } from '../services/services';

const BookingPage = () => {
  const [bookings, setBookings] = useState([]);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getBookings();
        setBookings(data || []);
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

export default BookingPage;
