import React, { useState, useEffect } from 'react';
import { getBookings, createBooking } from '../services/services';
import Booking from '../components/Booking';

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
      <Booking />
    </section>
  );
};

export default BookingPage;
