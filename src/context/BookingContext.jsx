

import { createContext, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);

 
  const addBooking = (booking) => {
    setBookings((prev) => [
      ...prev,
      {
        ...booking,
        id: Date.now(),
        status: "pending", 
      },
    ]);
  };


  const deleteBooking = (id) => {
    setBookings((prev) => prev.filter((b) => b.id !== id));
  };

 
  const updateBooking = (id, updatedData) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, ...updatedData } : b
      )
    );
  };

 
  const acceptBooking = (id) => {
    updateBooking(id, { status: "accepted" });
  };


  const rejectBooking = (id) => {
    deleteBooking(id);
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
        deleteBooking,
        updateBooking,
        acceptBooking,  
        rejectBooking,   
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
