



import { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { BookingContext } from "../context/BookingContext";
import "../styles/dashboard.css";

const Dashboard = () => {

  const user = useSelector((state) => state.auth.user);

  const { bookings, deleteBooking, updateBooking } =
    useContext(BookingContext) || {};

  const [editId, setEditId] = useState(null);
  const [editDate, setEditDate] = useState("");
  const [editTime, setEditTime] = useState("");

  if (!bookings) {
    return <p>Booking context not found</p>;
  }

  const startEdit = (booking) => {
    setEditId(booking.id);
    setEditDate(booking.date);
    setEditTime(booking.time);
  };

  const saveEdit = (id) => {
    updateBooking(id, {
      date: editDate,
      time: editTime,
    });
    setEditId(null);
  };

  return (
    <div className="dashboard">
      {user && (
         <h3 className="welcome-text">
           Welcome, {user.name} 
          {/* 👋 */}
        </h3>
      )}
      <h2>My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="empty">No bookings yet</p>
      ) : (
        <div className="booking-list">
          {bookings.map((booking) => (
            <div key={booking.id} className="booking-item">
              <div className="booking-info">
                <h4>{booking.service}</h4>

                {editId === booking.id ? (
                  <>
                    <input
                      type="date"
                      value={editDate}
                      onChange={(e) => setEditDate(e.target.value)}
                    />
                    <input
                      type="time"
                      value={editTime}
                      onChange={(e) => setEditTime(e.target.value)}
                    />
                  </>
                ) : (
                  <>
                    <p>
                      <strong>Date:</strong> {booking.date}
                    </p>
                    <p>
                      <strong>Time:</strong> {booking.time}
                    </p>
                  </>
                )}
              </div>

              <div className="actions">
                {editId === booking.id ? (
                  <>
                    <button
                      className="save-btn"
                      onClick={() => saveEdit(booking.id)}
                    >
                      Save
                    </button>
                    <button
                      className="cancel-btn"
                      onClick={() => setEditId(null)}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="edit-btn"
                      onClick={() => startEdit(booking)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => deleteBooking(booking.id)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;








