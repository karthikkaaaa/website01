


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [view, setView] = useState("users"); 
  const [users, setUsers] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("adminLoggedIn")) {
      navigate("/admin");
      return;
    }

    setUsers(JSON.parse(localStorage.getItem("users")) || []);
    setBookings(JSON.parse(localStorage.getItem("bookings")) || []);
  }, [navigate]);

  
  const totalEarnings = bookings
    .filter((b) => b.status === "accepted")
    .reduce((sum, b) => sum + (b.price || 0), 0);

 
  const acceptUser = (id) => {
    const updated = users.map((u) =>
      u.id === id ? { ...u, status: "accepted" } : u
    );
    setUsers(updated);
    localStorage.setItem("users", JSON.stringify(updated));
  };

  const deleteUser = (id) => {
    const updatedUsers = users.filter((u) => u.id !== id);
    const updatedBookings = bookings.filter((b) => b.userId !== id);

    setUsers(updatedUsers);
    setBookings(updatedBookings);

    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("bookings", JSON.stringify(updatedBookings));
  };

  const acceptBooking = (id) => {
    const updated = bookings.map((b) =>
      b.id === id ? { ...b, status: "accepted" } : b
    );
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  const deleteBooking = (id) => {
    const updated = bookings.filter((b) => b.id !== id);
    setBookings(updated);
    localStorage.setItem("bookings", JSON.stringify(updated));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-3">Admin Dashboard</h2>

      
      {/* <div className="alert alert-info text-center fw-bold">
        💰 Total Earnings: ${totalEarnings}
      </div> */}

     
      <div className="d-flex justify-content-center gap-3 mb-4">
        <button
          className={`btn ${
            view === "users" ? "btn-primary" : "btn-outline-primary"
          }`}
          onClick={() => setView("users")}
        >
          Registered Users
        </button>

        <button
          className={`btn ${
            view === "bookings" ? "btn-success" : "btn-outline-success"
          }`}
          onClick={() => setView("bookings")}
        >
          User Bookings
        </button>
      </div>

     
      {view === "users" && (
        <>
          {users.length === 0 && <p>No users found</p>}

          {users.map((u) => (
            <div
              key={u.id}
              className="border rounded p-3 mb-2 d-flex justify-content-between align-items-center"
            >
              <div>
                <b>{u.name}</b> ({u.email}) <br />
                Status: <span className="fw-bold">{u.status}</span>
              </div>

              <div>
                {u.status !== "accepted" && (
                  <button
                    className="btn btn-sm btn-success me-2"
                    onClick={() => acceptUser(u.id)}
                  >
                    Accept
                  </button>
                )}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteUser(u.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}

     
      {view === "bookings" && (
        <>
          {bookings.length === 0 && <p>No bookings found</p>}

          {bookings.map((b) => (
            <div
              key={b.id}
              className="border rounded p-3 mb-2 d-flex justify-content-between align-items-center"
            >
              <div>
                <b>{b.userName}</b> booked <b>{b.event}</b> <br />
                Date: {b.date} <br />
                Time: {b.time} <br />
                Price: <b>${b.price}</b> <br />
                Status: <span className="fw-bold">{b.status}</span>
              </div>

              <div>
                {b.status !== "accepted" && (
                  <button
                    className="btn btn-sm btn-success me-2"
                    onClick={() => acceptBooking(b.id)}
                  >
                    Accept
                  </button>
                )}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteBooking(b.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
