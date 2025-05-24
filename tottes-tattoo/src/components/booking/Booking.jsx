import { useState } from "react";
import { availableTimes } from "../../../config/config";
import { createBooking } from "../../services/services";
import Confirmation from "./Confirmation";

const Booking = ({ bookings }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    duration: 60,
    employee: "Nisse",
    file: null,
  });

  const [response, setResponse] = useState(undefined);

  const [step, setStep] = useState(1);
  const [selctedTime, setSelectedTime] = useState([]);

  const isWeekend = (dateString) => {
    const day = new Date(dateString).getDay();
    return day === 0 || day === 6;
  };

  const isTimeAvailable = (date, time, duration) => {
    if (!date || !time || !duration) return false;

    const [startHour, startMinute] = time.split(":").map(Number);
    const start = new Date(`${date}T${time}`);
    const end = new Date(start.getTime() + duration * 60000);

    const sameDayBookings = bookings.filter(
      (b) => b.date && b.date.slice(0, 10) === date
    );

    for (let b of sameDayBookings) {
      const bookedStart = new Date(`${b.date.slice(0, 10)}T${b.time}`);
      const bookedEnd = new Date(
        bookedStart.getTime() + (b.duration || 60) * 60000
      );

      const overlap = start < bookedEnd && end > bookedStart;
      if (overlap) {
        return false;
      }
    }

    return true;
  };

  const getAvailableTimes = (date) => {
    if (!date || !bookings) return [];

    const duration = parseInt(formData.duration || 60);

    return availableTimes.filter((time) =>
      isTimeAvailable(date, time, duration)
    );
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

      if (prevSelected.length === 0) {
        return [t];
      }

      if (prevSelected.length === 1) {
        const [prevTime] = prevSelected;

        const getMinutes = (timeStr) => {
          const [h, m] = timeStr.split(":").map(Number);
          return h * 60 + m;
        };

        const prevMinutes = getMinutes(prevTime);
        const currentMinutes = getMinutes(t);

        const diff = Math.abs(prevMinutes - currentMinutes);

        if (diff === 60) {
          return [prevTime, t];
        } else {
          return prevSelected;
        }
      }

      return prevSelected;
    });
  };

  const checkWeekend = () => {
    if (isWeekend(formData.date)) {
      alert("Välj en vardag (mån–fre)");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const dataToSend = { ...formData };

      await createBooking(dataToSend);
      setResponse(201);
    } catch (error) {
      console.error("Fel vid bokning:", error);
      alert("Något gick fel. Försök igen senare.");
    }
  };

  return (
    <>
      {!response && (
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
                  min={new Date().toISOString().split("T")[0]}
                />
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.date) {
                      alert("Välj ett datum först!");
                    } else if (checkWeekend()) {
                      setStep(2);
                    }
                  }}
                >
                  Nästa
                </button>
              </>
            )}

            {step === 2 && (
              <>
                {getAvailableTimes(formData.date).map((t) => (
                  <div key={t} className={"select-time-wrapper"}>
                    <button
                      className={
                        t === selctedTime[0] || t === selctedTime[1]
                          ? "select-time-btn selected"
                          : "select-time-btn"
                      }
                      value={t}
                      type="button"
                      onClick={() => {
                        handleSelectTime(t);
                      }}
                    >
                      {t}
                    </button>
                  </div>
                ))}

                <button
                  type="button"
                  onClick={() => {
                    const time = selctedTime[0];
                    const duration = parseInt(formData.duration || 60);

                    if (!time) {
                      alert("Välj en tid!");
                    } else if (
                      !isTimeAvailable(formData.date, time, duration)
                    ) {
                      alert(
                        "Tiden krockar med en annan bokning. Välj en annan tid."
                      );
                    } else {
                      setFormData((prev) => ({ ...prev, time }));
                      setStep(3);
                    }
                  }}
                >
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
      )}

      {response === 201 && <Confirmation />}
    </>
  );
};

export default Booking;
