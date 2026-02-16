


import { Routes, Route, useLocation } from "react-router-dom";

import React, { useEffect } from "react";
// import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import "./app.css";


import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import HomeReal from "./Pages/HomeReal";
import Services from "./Pages/Services";
import BookingPage from "./Pages/BookingPage";
import Dashboard from "./Pages/Dashboard";
import AboutUs from "./Pages/AbouUs";
import ContactUs from "./Pages/ContactUs";


// import AdminAuth from "./pages/AdminAuth";
// import AdminDashboard from "./pages/AdminDashboard";
import AdminAuth from "./Pages/AdminAuth";
import AdminDashboard from "./Pages/AdminDashboard";


import { BookingProvider } from "./context/BookingContext";


const App = () => {
  const user = useSelector((state) => state.auth.user);
  const darkMode = useSelector((state) => state.ui.darkMode);

  useEffect(() => {
    if (darkMode) document.body.classList.add("dark");
    else document.body.classList.remove("dark");
  }, [darkMode]);
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  return (
    <>
    {!user && !isAdminRoute && (
  <div className="login-overlay">
    <Login />
  </div>
)}


      <Routes>
       
        <Route path="/admin" element={<AdminAuth />} />

        <Route path="/admin-dashboard" element={<AdminDashboard />} />
       
        {user && (
          <>
            <Route
              path="/"
              element={
                <BookingProvider>
                  <Navbar />
                  <HomeReal />
                  <Footer />
                </BookingProvider>
              }
            />

            <Route
              path="/services"
              element={
                <BookingProvider>
                  <Navbar />
                  <Services />
                  <Footer />
                </BookingProvider>
              }
            />

            <Route
              path="/about"
              element={
                <BookingProvider>
                  <Navbar />
                  <AboutUs />
                  <Footer />
                </BookingProvider>
              }
            />

            <Route
              path="/booking"
              element={
                <BookingProvider>
                  <Navbar />
                  <BookingPage />
                  <Footer />
                </BookingProvider>
              }
            />

            <Route
              path="/dashboard"
              element={
                <BookingProvider>
                  <Navbar />
                  <Dashboard />
                  <Footer />
                </BookingProvider>
              }
            />

            <Route 
            
              path="/contact"
              element={
                <BookingProvider>
                  <Navbar />
                  <ContactUs />
                  <Footer />
                </BookingProvider>
              }
            />
          </>
        )}
      </Routes>
    </>
  );
};

export default App;
