import { useState } from "react";
import { useNavigate } from "react-router-dom";

const isWeekend = (dateString) => {
  const day = new Date(dateString).getDay();
  return day === 0 || day === 6; // 0 = Sunday, 6 = Saturday
};

export default function Booking() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    type: "tattoo",
    date: "",
    time: "",
    duration: "1",
    file: null,
  });

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
      alert("Please choose a weekday (Monday to Friday).");
      return;
    }

    console.log("Form submitted:", formData);
    navigate("/confirmation");
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 text-white">
      <h2 className="text-3xl font-bold mb-6">Book Your Tattoo Session</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-black bg-opacity-30 p-6 rounded-2xl shadow-xl space-y-6"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          className="w-full p-3 rounded-md bg-gray-800 text-white"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email Address"
          className="w-full p-3 rounded-md bg-gray-800 text-white"
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 rounded-md bg-gray-800 text-white"
          onChange={handleChange}
          required
        />
        <select
          name="type"
          className="w-full p-3 rounded-md bg-gray-800 text-white"
          onChange={handleChange}
        >
          <option value="tattoo">Tattoo</option>
          <option value="consultation">Consultation</option>
        </select>
        <input
          name="date"
          type="date"
          className="w-full p-3 rounded-md bg-gray-800 text-white"
          onChange={handleChange}
          required
          min={new Date().toISOString().split("T")[0]}
          pattern="\d{4}-\d{2}-\d{2}"
        />
        <select
          name="time"
          className="w-full p-3 rounded-md bg-gray-800 text-white"
          onChange={handleChange}
          required
        >
          <option value="">Select a time</option>
          {[
            "09:00", "10:00", "11:00",
            "13:00", "14:00", "15:00", "16:00", "17:00"
          ].map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
        <select
          name="duration"
          className="w-full p-3 rounded-md bg-gray-800 text-white"
          onChange={handleChange}
        >
          <option value="1">1 hour</option>
          <option value="2">2 hours</option>
        </select>
        <input
          name="file"
          type="file"
          className="w-full text-white"
          accept="image/*,application/pdf"
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-purple-600 hover:bg-purple-500 font-bold text-white transition"
        >
          Submit Booking
        </button>
      </form>
    </div>
  );
}
