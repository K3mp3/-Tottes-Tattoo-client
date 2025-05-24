import { API_URL } from "../../config/config";

export const getBookings = async () => {
  try {
    const response = await fetch(`${API_URL}/bookings`);
    if (!response.ok) {
      throw new Error("Kunde inte hämta bokningar");
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
    const formData = new FormData();

    Object.keys(bookingData).forEach((key) => {
      if (key === "file" && bookingData[key]) {
        formData.append("file", bookingData[key]);
      } else if (key !== "file") {
        formData.append(key, bookingData[key]);
      }
    });

    const response = await fetch(`${API_URL}/bookings`, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Kunde inte skapa bokning");
    }

    const result = await response.json();
    return result.data;
  } catch (err) {
    throw err;
  }
};
