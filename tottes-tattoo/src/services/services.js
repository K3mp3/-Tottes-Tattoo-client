import { API_URL } from '../../config/config';

export const getBookings = async () => {
  try {
    const response = await fetch(`${API_URL}/bookings`);
    if (!response.ok) {
      throw new Error('Kunde inte hämta bokningar');
    }

    const result = await response.json();
    console.log(result.data);
    return result.data;
  } catch (err) {
    throw err;
  }
};

export const createBooking = async (bookingData) => {
  try {
    const response = await fetch(`${API_URL}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bookingData),
    });

    if (!response.ok) {
      throw new Error('Kunde inte skapa bokning');
    }

    const result = await response.json();
    return result.data;
  } catch (err) {
    throw err;
  }
};
