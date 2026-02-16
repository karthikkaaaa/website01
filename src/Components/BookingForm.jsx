import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookingContext } from "../context/BookingContext";
import services from "../data/services.json";
import emailjs from "@emailjs/browser";
import "../styles/booking.css";

const BookingForm = ({ service }) => {
  const { addBooking, bookings } = useContext(BookingContext);
  const navigate = useNavigate();

  const [selectedService, setSelectedService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (service) setSelectedService(service);
  }, [service]);

 
  const serviceDetails = services.find(
    (s) => s.title === selectedService
  );

 
  // const bookedSlots = bookings
  //   ?.filter(
  //     (b) =>
  //       b.service === selectedService &&
  //       b.date === date
  //   )
  //   .map((b) => b.time) || [];


  const storedBookings = JSON.parse(localStorage.getItem("bookings")) || [];

const bookedSlots = storedBookings
  .filter(
    (b) =>
      b.service === selectedService &&
      b.date === date &&
      b.status === "accepted" 
  )
  .map((b) => b.time);

const availableSlots =
    serviceDetails?.slots.filter(
      (slot) => !bookedSlots.includes(slot)
    ) || [];

const handleSubmit = (e) => {
      e.preventDefault();
    
      if (!time) {
        alert("Please select a time slot");
        return;
      }
    
      const newBooking = {
        id: Date.now(),
        service: selectedService,
        date,
        time,
        email,
        price: serviceDetails.price,
        status: "pending",
      };
    
     
      addBooking(newBooking);
    
      
      const existing = JSON.parse(localStorage.getItem("bookings")) || [];
      localStorage.setItem("bookings", JSON.stringify([...existing, newBooking]));
    
      
      emailjs.send(
        "service_2n5opgq",
        "template_bccdh6d",
        {
          service_name: selectedService,
          booking_date: date,
          booking_time: time,
          user_email: email,
        },
        "fi_c4mFR2v8mTJytc"
      );
    
      navigate("/dashboard");
    };
    

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   if (availableSlots.length === 0) {
  //     alert("No slots available for this date");
  //     return;
  //   }

  //   addBooking({
  //     service: selectedService,
  //     date,
  //     time,
  //     email,
  //     price: serviceDetails.price,
  //     status: "pending",
  //   });

  //   emailjs.send(
  //     "service_v0vi4oh",
  //     "template_bccdh6d",
  //     {
  //       service_name: selectedService,
  //       booking_date: date,
  //       booking_time: time,
  //       user_email: email,
  //     },
  //     "fi_c4mFR2v8mTJytc"
  //   );

  //   navigate("/dashboard");
  // };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <h2>Book Your Event</h2>
      <p className="subtitle">
        Select your service, date, and time to confirm your booking.
      </p>

      
      <div className="form-group">
        <label>Service</label>
        <select
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          required
        >
          <option value="" disabled>
            Select a service
          </option>
          {services.map((s) => (
            <option key={s.id} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
      </div>

     
      {serviceDetails && (
        <p className="price-tag">
          💲 Event Cost: <strong>${serviceDetails.price}</strong>
        </p>
      )}

      
      <div className="form-group">
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>

      
      <div className="form-group">
        <label>Available Time Slots</label>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
          disabled={!date || !selectedService}
        >
          <option value="">Select a time</option>

          {availableSlots.length > 0 ? (
            availableSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))
          ) : (
            <option disabled>❌ Fully Booked</option>
          )}
        </select>
      </div>

      
      <div className="form-group">
        <label>Your Email</label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      
      {selectedService && date && time && serviceDetails && (
        <div className="summary-box">
          <p><strong>Service:</strong> {selectedService}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Total:</strong> ${serviceDetails.price}</p>
        </div>
      )}

      <button type="submit" className="btn-primary">
        Confirm Booking
      </button>
    </form>
  );
};

export default BookingForm;
